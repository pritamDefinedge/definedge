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
        class="w-full md:w-full px-6"
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

<script>
export default {
  props: {
    tabs: Array,
    tabContent: Array,
  },
  data() {
    return {
      activeTradeTab: this.tabs[0].id,
      hasScrolled: false,
      activeFeatureIndex: -1,
      progressLoop: null,
      progressTimers: {},
      remainingTimes: {},
      isPaused: {},
      pausedAt: {}, // Store the exact timestamp when paused
      progressValues: {}, // Store the exact progress percentage when paused
      progressDuration: 5400, // Default duration for progress animation
      startTimes: {}, // Store when each progress started
    };
  },
  computed: {
    filteredContent() {
      return this.tabContent.filter((item) => item.id === this.activeTradeTab);
    },
  },
  methods: {
    setActiveTab(tabId) {
      this.activeTradeTab = tabId;
      this.resetProgressLoop();
      this.startProgressSequence();
    },
    onScroll() {
      this.hasScrolled = window.scrollY > 200;
    },
    startProgressSequence(startIndex = 0) {
      const features =
        this.tabContent.find((tab) => tab.id === this.activeTradeTab)
          ?.features || [];
      if (features.length === 0) return;

      this.activeFeatureIndex = -1;

      // Delay the start to ensure proper DOM update
      setTimeout(() => {
        this.loopProgress(startIndex, features.length);
      }, 50);
    },
    loopProgress(index, total) {
      if (index >= total) {
        setTimeout(() => this.loopProgress(0, total), 200);
        return;
      }

      // Set active index and reset state for this feature
      this.activeFeatureIndex = index;
      this.remainingTimes[index] = this.progressDuration;
      this.isPaused[index] = false;
      this.progressValues[index] = 0;
      this.startTimes[index] = performance.now();

      // Schedule the end of this progress
      this.progressTimers[index] = setTimeout(() => {
        // Move to next item after current progress completes
        this.activeFeatureIndex = -1;
        setTimeout(() => {
          this.loopProgress(index + 1, total);
        }, 200);
      }, this.progressDuration);
    },
    resetProgressLoop() {
      // Clear all timers
      Object.values(this.progressTimers).forEach((timer) =>
        clearTimeout(timer)
      );
      this.progressTimers = {};
      this.remainingTimes = {};
      this.isPaused = {};
      this.progressValues = {};
      this.pausedAt = {};
      this.startTimes = {};
      this.activeFeatureIndex = -1;
    },
    startProgressFromFeature(featureIndex) {
      this.resetProgressLoop();
      this.startProgressSequence(featureIndex);
    },
    pauseProgress(featureIndex) {
      // Only pause active and non-paused items
      if (
        this.activeFeatureIndex !== featureIndex ||
        this.isPaused[featureIndex]
      )
        return;

      // Clear the timer for this feature
      clearTimeout(this.progressTimers[featureIndex]);

      // Calculate progress values
      const elapsedTime = performance.now() - this.startTimes[featureIndex];
      this.remainingTimes[featureIndex] = Math.max(
        0,
        this.progressDuration - elapsedTime
      );

      // Calculate and store progress percentage
      this.progressValues[featureIndex] = Math.min(
        100,
        (elapsedTime / this.progressDuration) * 100
      );

      // Mark as paused and store pause time
      this.isPaused[featureIndex] = true;
      this.pausedAt[featureIndex] = performance.now();
    },
    resumeProgress(featureIndex) {
      // Only resume active and paused items
      if (
        this.activeFeatureIndex !== featureIndex ||
        !this.isPaused[featureIndex]
      )
        return;

      // Update start time based on current progress
      const adjustedStartTime =
        performance.now() -
        this.progressDuration * (this.progressValues[featureIndex] / 100);
      this.startTimes[featureIndex] = adjustedStartTime;

      // Mark as no longer paused
      this.isPaused[featureIndex] = false;

      // Set timer for remaining time
      this.progressTimers[featureIndex] = setTimeout(() => {
        // Move to next item
        this.activeFeatureIndex = -1;
        setTimeout(() => {
          this.loopProgress(
            featureIndex + 1,
            this.filteredContent[0]?.features.length || 0
          );
        }, 200);
      }, this.remainingTimes[featureIndex]);
    },
    progressStyle(featureIndex) {
      if (this.activeFeatureIndex === featureIndex) {
        if (this.isPaused[featureIndex]) {
          // When paused, show the exact progress percentage
          return `width: ${this.progressValues[featureIndex]}%; transition: none;`;
        } else {
          // Calculate how much time has passed and adjust animation duration
          const currentTimePosition = performance.now();
          const elapsedSinceStart =
            currentTimePosition - this.startTimes[featureIndex];
          const remainingPercentage =
            100 - (elapsedSinceStart / this.progressDuration) * 100;

          // Start from current width and animate to 100% in remaining time
          return `width: ${100 - remainingPercentage}%; transition: width ${
            this.remainingTimes[featureIndex]
          }ms linear; width: 100%;`;
        }
      }
      // Inactive items
      return "width: 0%; transition: none;";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.startProgressSequence();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
    this.resetProgressLoop();
  },
};
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
