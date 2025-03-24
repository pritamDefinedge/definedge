<template>
  <div class="max-w-screen-xl mx-auto">
    <!-- EDUCATION Title -->
    <h2
      class="text-[#005BDF] text-center text-base md:text-base lg:text-base xl:text-base font-normal tracking-[5px]"
      :class="{
        'motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate':
          hasScrolled,
      }"
    >
      EDUCATION
    </h2>
    <h5
      class="text-[#2A394E] text-center text-xl font-bold tracking-wider md:text-lg lg:text-2xl xl:text-3xl mt-4"
      :class="{
        'motion-preset-bounce motion-duration-1000': hasScrolled,
      }"
    >
      Ecosystem of Transformative Education
    </h5>

    <!-- Tabs Container -->
    <div class="flex flex-wrap justify-center mt-8 mb-6 gap-4">
      <!-- Tab Buttons -->
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="setActiveTab(tab.id)"
        :class="{
          'border-2 border-[#0E9CE5] bg-[#FFFFFF] text-black ':
            activeEducationTab === tab.id,
          'bg-[#FFFFFF47] border-2 border-[#EBEBEB] text-[#817E7E] hover:text-black':
            activeEducationTab !== tab.id,
        }"
        class="group relative overflow-hidden flex min-w-[150px] text-center rounded-[10px] justify-center px-6 py-3 text-base sm:text-sm md:text-sm lg:text-lg tab-btn text-md cursor-pointer focus:outline-none transition duration-300 motion-scale-in-[0.5] ease-in-out"
      >
        <span
          class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-[#fcf7f7] opacity-25 transition-all duration-300 ease-out group-hover:w-full"
        ></span>
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="flex items-center justify-center space-x-12">
      <!-- Current Books Tab Content -->
      <div
        v-for="(content, index) in tabContent.filter(
          (item) => item.id === activeEducationTab
        )"
        :key="content.id"
        class="w-full md:w-full px-6"
        ref="contentSection"
      >
        <div class="flex flex-wrap justify-between">
          <ul
            class="space-y-4 text-lg w-full md:w-1/2 py-16"
            :class="{
              'motion-preset-slide-right motion-duration-1500': hasScrolled,
            }"
          >
            <h6
              class="text-2xl font-bold mb-6 text-left font-sans text-[#2A394E]"
            >
              <span class="flex items-center">
                <div
                  v-html="content.icon"
                  class="-motion-translate-x-in-100 motion-translate-y-in-75 motion-preset-seesaw"
                ></div>
                {{ content.title }}
              </span>
            </h6>
            <li class="flex items-center text-base">
              {{ content.description }}
            </li>
            <li
              v-for="(feature, featureIndex) in content.features"
              :key="featureIndex"
              class="flex items-center cursor-pointer relative p-6 bg-[#b2e5e5] text-black  shadow-md rounded-lg transition-all duration-300 hover:shadow-lg"
              :class="{ active: activeEducationIndex === featureIndex }"
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

            <li class="flex items-center font-bold text-black text-sm">
              {{ content.notes }}
            </li>
            <!-- Explore More Link -->
            <li class="flex items-center text-base">
              <a
                :href="content.exploreLink"
                class="text-blue-500 font-bold flex items-center motion-preset-seesaw"
              >
                <span
                  class="flex items-center font-semibold text-sm text-[#0065DA] hover:text-blue-800 hover:underline tracking-wide"
                >
                  Explore More
                  <svg
                    class="ml-2"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                  >
                    <path
                      d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                      style="fill: #3498db"
                    ></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>

          <div
            class="w-full md:w-1/2"
            :class="{
              'motion-preset-slide-left motion-duration-1500': hasScrolled,
            }"
          >
            <img
              v-if="
                activeEducationIndex >= 0 &&
                content.features[activeEducationIndex]
              "
              :key="activeEducationIndex"
              :src="content.features[activeEducationIndex].image"
              :alt="`Feature ${activeEducationIndex + 1} Image`"
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

const activeEducationTab = ref(props.tabs[0]?.id || "");
const scrollThreshold = ref(3000); // Default threshold
const hasScrolled = ref(false);

const activeEducationIndex = ref(-1);
const progressTimers = ref({});
const remainingTimes = ref({});
const isPaused = ref({});
const pausedAt = ref({});
const progressValues = ref({});
const startTimes = ref({});
const progressDuration = 5400; // Default progress duration

// Compute filtered content based on active tab
const filteredContent = computed(() =>
  props.tabContent.filter((item) => item.id === activeEducationTab.value)
);

// Handle tab changes
const setActiveTab = (tabId) => {
  activeEducationTab.value = tabId;
  resetProgressLoop();
  startProgressSequence();
};

// Handle scrolling
const onScroll = () => {
  const windowWidth = window.innerWidth;
  scrollThreshold.value = windowWidth <= 768 ? 4500 : 3000;

  const scrollPosition = window.scrollY;
  hasScrolled.value = scrollPosition > scrollThreshold.value;
};

// Start feature progress loop
const startProgressSequence = (startIndex = 0) => {
  const features =
    props.tabContent.find((tab) => tab.id === activeEducationTab.value)
      ?.features || [];

  if (features.length === 0) return;

  activeEducationIndex.value = -1;

  setTimeout(() => {
    loopProgress(startIndex, features.length);
  }, 50);
};

const loopProgress = (index, total) => {
  if (index >= total) {
    setTimeout(() => loopProgress(0, total), 200);
    return;
  }

  activeEducationIndex.value = index;
  remainingTimes.value[index] = progressDuration;
  isPaused.value[index] = false;
  progressValues.value[index] = 0;
  startTimes.value[index] = performance.now();

  progressTimers.value[index] = setTimeout(() => {
    activeEducationIndex.value = -1;
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
  activeEducationIndex.value = -1;
};

// Start progress from a specific feature

const startProgressFromFeature = (featureIndex) => {
  resetProgressLoop();
  startProgressSequence(featureIndex);
};

// Pause progress for a feature
const pauseProgress = (featureIndex) => {
  if (
    activeEducationIndex.value !== featureIndex ||
    isPaused.value[featureIndex]
  )
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
    activeEducationIndex.value !== featureIndex ||
    !isPaused.value[featureIndex]
  )
    return;

  const adjustedStartTime =
    performance.now() -
    progressDuration * (progressValues.value[featureIndex] / 100);
  startTimes.value[featureIndex] = adjustedStartTime;

  isPaused.value[featureIndex] = false;

  progressTimers.value[featureIndex] = setTimeout(() => {
    activeEducationIndex.value = -1;
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
  if (activeEducationIndex.value === featureIndex) {
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

// Lifecycle hooks for Education
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
  background-color: #00000047;
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom-left-radius: 8px;
  will-change: width;
  transform: translateZ(0);
}
</style>
