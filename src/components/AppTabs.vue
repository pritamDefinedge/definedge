<template>
  <div class="max-w-screen-xl mx-auto sm:px-4 lg:px-0 px-4">
    <h4
      class="text-blue-700 text-center text-[25px] md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide"
      :class="{
        'motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate':
          hasScrolled,
      }"
    >
      APPS
    </h4>

    <h5
      class="text-white text-center font-bold tracking-wider text-base sm:text-base md:text-lg lg:text-2xl xl:text-3xl mt-4"
      :class="{
        'motion-preset-bounce motion-duration-1000': hasScrolled,
      }"
    >
      Ecosystem That Brings Markets to Your Fingertips
    </h5>

    <div
      class="flex justify-center mb-6 sm:gap-3 sm:my-12 my-12 gap-3 xs:gap-2 md:gap-4 lg:gap-x-6"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="setActiveTab(tab.id)"
        :class="{
          'border-b-2 border-blue-500 bg-white text-gray-800':
            activeTradeTab === tab.id,
          'bg-[#FFFFFF10] border-2 border-white hover:bg-[fcf7f7] hover:text-[#fff] text-gray-400':
            activeTradeTab !== tab.id,
        }"
        class="group relative inline-block overflow-hidden border-double px-4 py-3 sm:py-4 md:py-4 lg:py-4 xl:py-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 text-base sm:text-base md:text-base lg:text-lg xl:text-lg tab-btn text-md rounded-lg font-semibold cursor-pointer focus:outline-none transition duration-300 ease-in-out"
      >
        <span
          class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-[#000] opacity-25 transition-all duration-300 ease-out group-hover:w-full"
        ></span>
        <span class="flex gap-3">
          <div v-html="tab.icon" class="mt-1"></div>
          {{ tab.label }}
        </span>
      </button>
    </div>

    <div class="flex items-center justify-center space-x-12 -mt-8">
      <div
        v-for="(content, index) in tabContent.filter(
          (item) => item.id === activeTradeTab
        )"
        :key="content.id"
        class="w-full md:w-full px-0 sm:px-2 md:px-6 lg:px-6 xl:px-6"
      >
        <div class="flex sm:flex-wrap lg:flex-nowrap flex-wrap justify-between">
          <ul
            :class="{
              'motion-preset-slide-right motion-duration-1500': hasScrolled,
            }"
            class="space-y-4 pt-12 md:pt-24 p-4 lg:pt-24 text-lg w-full md:w-1/2"
          >
            <h6
              class="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold mb-4 text-left font-sans"
            >
              {{ content.title }}
            </h6>

            <li
              v-for="(feature, featureIndex) in content.features"
              :key="featureIndex"
              class="flex items-center cursor-pointer relative p-6 bg-gray-800 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg"
              :class="{ active: activeFeatureIndex === featureIndex }"
              @click="startProgressFromFeature(featureIndex)"
              @mouseenter="pauseProgress(featureIndex)"
              @mouseleave="resumeProgress(featureIndex)"
            >
              <svg
                class="w-6 h-6 text-green-300 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div class="flex flex-col">
                <span
                  class="text-xs sm:text-sm md:text-base lg:text-base xl:text-sm text-gray-200 mt-1"
                >
                  {{ feature.text }}
                </span>
              </div>
              <div
                class="progress-bar"
                :style="progressStyle(featureIndex)"
                :data-index="featureIndex"
              ></div>
            </li>

            <li class="flex items-start">
              <h6 class="text-base font-semibold mb-4 text-start">
                {{ content.downloadText }}
              </h6>
            </li>
            <li class="flex items-start">
              <div class="flex space-x-4 justify-start">
                <a
                  v-for="(store, idx) in content.stores"
                  :key="idx"
                  :href="store.link"
                  target="_blank"
                >
                  <img
                    :src="store.imgSrc"
                    :alt="store.altText"
                    class="motion-preset-seesaw"
                  />
                </a>
              </div>
            </li>
          </ul>
          <div
            :class="{
              'motion-preset-slide-left motion-duration-1500': hasScrolled,
            }"
            class="w-full md:w-1/2 flex items-center justify-center"
          >
            <img
              v-if="
                activeFeatureIndex >= 0 && content.features[activeFeatureIndex]
              "
              :key="activeFeatureIndex"
              :src="content.features[activeFeatureIndex].imageSrc"
              :alt="`Feature ${activeFeatureIndex + 1} Image`"
              class="rounded-lg shadow-lg w-full object-cover transition-all duration-300"
            />
            <img
              v-else
              :src="content.imageSrc"
              alt="App Image"
              class="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watchEffect } from "vue";

const props = defineProps({
  tabs: Array,
  tabContent: Array,
});

const activeTradeTab = ref(props.tabs[0]?.id || "");
const hasScrolled = ref(false);
const activeFeatureIndex = ref(-1);
const progressTimers = ref({});
const remainingTimes = ref({});
const isPaused = ref({});
const pausedAt = ref({});
const progressValues = ref({});
const startTimes = ref({});
const progressDuration = 5400; // Default progress duration

// Compute filtered content based on active tab
const filteredContent = computed(() =>
  props.tabContent.filter((item) => item.id === activeTradeTab.value)
);

// Handle tab changes
const setActiveTab = (tabId) => {
  activeTradeTab.value = tabId;
  resetProgressLoop();
  startProgressSequence();
};

// Handle scrolling
const onScroll = () => {
  hasScrolled.value = window.scrollY > 200;
};

// Start feature progress loop
const startProgressSequence = (startIndex = 0) => {
  const features =
    props.tabContent.find((tab) => tab.id === activeTradeTab.value)?.features ||
    [];

  if (features.length === 0) return;

  activeFeatureIndex.value = -1;

  setTimeout(() => {
    loopProgress(startIndex, features.length);
  }, 50);
};

const loopProgress = (index, total) => {
  if (index >= total) {
    setTimeout(() => loopProgress(0, total), 200);
    return;
  }

  activeFeatureIndex.value = index;
  remainingTimes.value[index] = progressDuration;
  isPaused.value[index] = false;
  progressValues.value[index] = 0;
  startTimes.value[index] = performance.now();

  progressTimers.value[index] = setTimeout(() => {
    activeFeatureIndex.value = -1;
    setTimeout(() => {
      loopProgress(index + 1, total);
    }, 200);
  }, progressDuration);
};

const resetProgressLoop = () => {
  Object.values(progressTimers.value).forEach((timer) => clearTimeout(timer));
  progressTimers.value = {};
  remainingTimes.value = {};
  isPaused.value = {};
  progressValues.value = {};
  pausedAt.value = {};
  startTimes.value = {};
  activeFeatureIndex.value = -1;
};

// Start progress from a specific feature

const startProgressFromFeature = (featureIndex) => {
  resetProgressLoop();
  startProgressSequence(featureIndex);
};

// Pause progress for a feature
const pauseProgress = (featureIndex) => {
  if (activeFeatureIndex.value !== featureIndex || isPaused.value[featureIndex])
    return;

  clearTimeout(progressTimers.value[featureIndex]);

  const elapsedTime = performance.now() - startTimes.value[featureIndex];
  remainingTimes.value[featureIndex] = Math.max(
    0,
    progressDuration - elapsedTime
  );

  progressValues.value[featureIndex] = Math.min(
    100,
    (elapsedTime / progressDuration) * 100
  );

  isPaused.value[featureIndex] = true;
  pausedAt.value[featureIndex] = performance.now();
};

// Resume progress after pausing
const resumeProgress = (featureIndex) => {
  if (
    activeFeatureIndex.value !== featureIndex ||
    !isPaused.value[featureIndex]
  )
    return;

  const adjustedStartTime =
    performance.now() -
    progressDuration * (progressValues.value[featureIndex] / 100);
  startTimes.value[featureIndex] = adjustedStartTime;

  isPaused.value[featureIndex] = false;

  progressTimers.value[featureIndex] = setTimeout(() => {
    activeFeatureIndex.value = -1;
    setTimeout(() => {
      loopProgress(
        featureIndex + 1,
        filteredContent.value[0]?.features.length || 0
      );
    }, 200);
  }, remainingTimes.value[featureIndex]);
};

// Compute progress bar styles dynamically
const progressStyle = (featureIndex) => {
  if (activeFeatureIndex.value === featureIndex) {
    if (isPaused.value[featureIndex]) {
      return `width: ${progressValues.value[featureIndex]}%; transition: none;`;
    } else {
      const elapsedSinceStart =
        performance.now() - startTimes.value[featureIndex];
      const remainingPercentage =
        100 - (elapsedSinceStart / progressDuration) * 100;

      return `width: ${100 - remainingPercentage}%; transition: width ${
        remainingTimes.value[featureIndex]
      }ms linear; width: 100%;`;
    }
  }
  return "width: 0%; transition: none;";
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("scroll", onScroll);
  startProgressSequence();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  resetProgressLoop();
});
</script>

<style scoped>
.progress-bar {
  content: "";
  display: block;
  height: 4px;
  width: 0%;
  background-color: #1f7ae0;
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom-left-radius: 8px;
  will-change: width;
  transform: translateZ(0);
}
</style>
