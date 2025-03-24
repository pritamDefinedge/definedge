<template>
  <div class="max-w-screen-xl mx-auto px-4">
    <!-- Section Title -->
    <h2
      class="text-blue-700 text-center text-[15px] tracking-[5px] font-normal"
      :class="{
        'motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate':
          hasScrolled,
      }"
    >
      TRADE & INVEST
    </h2>

    <h5
      class="text-[#2A394E] text-center text-3xl tracking-[0.5px] font-bold md:text-lg lg:text-3xl xl:text-3xl mt-4"
      :class="{
        'motion-preset-bounce motion-duration-1000': hasScrolled,
      }"
    >
      Ecosystem of Effortless Trading
    </h5>

    <!-- Tabs Container -->
    <div class="flex flex-wrap justify-center mt-8 mb-6 gap-4">
      <!-- Tab Buttons -->
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="setActiveTab(tab.id)"
        :class="{
          'border-b-2 border-blue-500 bg-white text-gray-800':
            activeTradeTab === tab.id,
          'bg-[#FFFFFF47] border-2 border-white text-gray-700':
            activeTradeTab !== tab.id,
        }"
        class="group relative inline-block overflow-hidden border-double px-2 sm:px-2 md:px-4 lg:px-8 py-3 text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg tab-btn text-md rounded-lg font-semibold cursor-pointer focus:outline-none transition duration-300 ease-in-out"
      >
        <span
          class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-[#fcf7f7] opacity-25 transition-all duration-300 ease-out group-hover:w-full"
        ></span>
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="flex items-center justify-center space-x-12">
      <!-- Loop through tab content -->
      <div
        v-for="(content, index) in tabContent.filter(
          (item) => item.id === activeTradeTab
        )"
        :key="content.id"
        class="w-full md:w-full px-6"
        ref="contentSection"
      >
        <div class="flex flex-wrap justify-between">
          <!-- Content Details -->
          <ul
            :class="{
              'motion-preset-slide-right motion-duration-1500': hasScrolled,
            }"
            class="space-y-4 text-lg w-full md:w-1/2 py-16"
          >
            <h6
              class="text-2xl font-bold mb-6 text-left font-sans text-[#2A394E]"
            >
              <span class="flex items-center font-bold tracking-[0.5px]">
                <div v-html="content.icon" class="motion-preset-seesaw"></div>
                {{ content.title }}
              </span>
            </h6>
            <li class="flex items-center pb-6 text-black">
              {{ content.description }}
            </li>
            <li
              v-for="(feature, featureIndex) in content.features"
              :key="featureIndex"
              class="flex items-center cursor-pointer relative p-6 bg-[#b2e5e5] text-black shadow-md rounded-lg transition-all duration-300 hover:shadow-lg"
              :class="{ active: activeFeatureIndex === featureIndex }"
              @click="startProgressFromFeature(featureIndex)"
              @mouseenter="pauseProgress(featureIndex)"
              @mouseleave="resumeProgress(featureIndex)"
            >
              <svg
                class="w-6 h-6 text-black mr-3"
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
                  class="text-xs sm:text-sm md:text-base lg:text-base xl:text-sm text-black mt-1"
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
            <!-- Explore More Link -->
            <li class="flex items-center text-sm">
              <a
                :href="content.exploreLink"
                class="text-[#0065DA] font-semibold flex items-center motion-preset-seesaw"
              >
                <span
                  class="flex items-center text-sm text-[#0065DA] hover:text-blue-800 hover:underline tracking-wide"
                >
                  Explore More
                  <svg
                    class="ml-2"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19px"
                  >
                    <path
                      d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                      style="fill: #0065da"
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>

          <!-- Content Image -->
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
              :src="content.features[activeFeatureIndex].image"
              :alt="`Feature ${activeFeatureIndex + 1} Image`"
              class="rounded-lg w-full object-cover transition-all duration-300"
            />
            <img
              v-else
              :src="content.image"
              alt="App Image"
              class="rounded-lg w-full object-cover"
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
const scrollThreshold = ref(1400); // Default threshold


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
  const windowWidth = window.innerWidth;

  // Adjust scroll threshold based on screen size
  if (windowWidth <= 768) {
    scrollThreshold.value = 1400; // Small devices
  } else {
    scrollThreshold.value = 1200; // Medium and large devices
  }

  const scrollPosition = window.scrollY;
  hasScrolled.value = scrollPosition > scrollThreshold.value;
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
