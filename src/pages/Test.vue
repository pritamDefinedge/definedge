<template>
  <section
    class="relative bg-gray-900 text-white pt-16 pb-8 sm:px-4 lg:px-0 px-4"
  >
    <div class="w-full max-w-screen-lg mx-auto px-6 text-center">
      <h4 class="text-blue-600 text-lg font-semibold tracking-wide uppercase">
        APPS
      </h4>
      <h5 class="text-white font-bold tracking-wider text-3xl mt-2">
        Ecosystem That Brings Markets to Your Fingertips
      </h5>
    </div>
  </section>

  <!-- Sticky Navigation Tabs -->
  <div
    :class="{
      'sticky top-0 z-50 ': isSticky,
      relative: !isSticky,
    }"
    class="bg-gray-900 text-white sm:px-4 lg:px-0 px-4 transition-all duration-300"
  >
    <!-- class="sticky top-0 z-50 bg-gray-900 text-white sm:px-4 lg:px-0 px-4" -->
    <div class="max-w-screen-lg mx-auto flex justify-center space-x-4 p-4">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{
          'border-b-2 border-blue-500 bg-white text-gray-800':
            activeTradeTab === tab.id,
          'bg-[#FFFFFF10] border-2 border-white hover:bg-[fcf7f7] hover:text-[#fff] text-gray-400':
            activeTradeTab !== tab.id,
        }"
        class="group relative inline-block overflow-hidden border-double px-4 py-3 sm:py-4 md:py-4 lg:py-4 xl:py-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 text-base sm:text-base md:text-base lg:text-lg xl:text-lg tab-btn text-md rounded-lg font-semibold cursor-pointer focus:outline-none transition duration-300 ease-in-out"
        @click="scrollToSection(tab.id)"
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
  </div>

  <!-- Scrollable Horizontal Content -->
  <div
    ref="scrollContainer"
    class="scroll-container opacity-0.1 w-full text-white bg-gray-900 overflow-hidden"
  >
    <div ref="scrollContent" class="scroll-content flex w-max">
      <section
        v-for="tab in tabContent"
        :key="tab.id"
        :id="tab.id"
        class="scroll-section h-screen w-screen flex justify-center items-center p-6"
      >
        <div
          class="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center"
        >
          <ul
            :class="{
              'motion-preset-slide-right motion-duration-1500': hasScrolled,
            }"
            class="space-y-4 pt-12 md:pt-24 p-4 lg:pt-24 text-lg w-full md:w-1/2"
          >
            <h6
              class="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold mb-4 text-left font-sans"
            >
              {{ tab.title }}
            </h6>
            <li
              v-for="(feature, featureIndex) in tab.features"
              :key="featureIndex"
              class="flex items-center cursor-pointer relative p-6 bg-gray-800 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg"
              :class="{ active: activeFeatureIndex === featureIndex }"
              @click="startProgressFromFeature(featureIndex)"
              @mouseenter="pauseProgress(featureIndex)"
              @mouseleave="resumeProgress(featureIndex)"
            >
              <svg
                class="w-5 md:w-6 h-5 md:h-6 text-green-300 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div class="flex flex-col w-full break-words whitespace-normal">
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
                {{ tab.downloadText }}
              </h6>
            </li>
            <li class="flex items-start">
              <div class="flex space-x-4 justify-start">
                <a
                  v-for="(store, idx) in tab.stores"
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

          <!-- Image Section -->
          <div
            :class="{
              'motion-preset-slide-left motion-duration-1500': hasScrolled,
            }"
            class="w-full md:w-1/2 flex items-center justify-center"
          >
            <img
              v-if="activeFeatureIndex >= 0 && tab.features[activeFeatureIndex]"
              :key="activeFeatureIndex"
              :src="tab.features[activeFeatureIndex].imageSrc"
              :alt="`Feature ${activeFeatureIndex + 1} Image`"
              class="rounded-lg shadow-lg w-full object-cover transition-all duration-300"
            />
            <img
              v-else
              :src="tab.imageSrc"
              alt="App Image"
              class="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // ✅ Register Plugins

export default {
  props: {
    tabs: Array,
    tabContent: Array,
  },
  data() {
    return {
      activeTradeTab: this.tabs[0]?.id || "zoneApp",
      hasScrolled: false,
      gsapInstance: null,
      isSticky: true,
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
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.initializeGSAP();
    this.startProgressSequence();
    this.resetProgressLoop();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
    this.cleanupGSAP();
    this.resetProgressLoop();
  },
  computed: {
    filteredContent() {
      return this.tabContent.filter((item) => item.id === this.activeTradeTab);
    },
  },
  methods: {
    onScroll() {
      this.hasScrolled = window.scrollY > 200;
      console.log("y", window.scrollY);
      const lastTab = document.getElementById(
        this.tabs[this.tabs.length - 1].id
      );
      const tradeInvest = document.querySelector(".trade-invest");

      if (lastTab && tradeInvest) {
        const lastTabRect = lastTab.getBoundingClientRect();
        const tradeInvestRect = tradeInvest.getBoundingClientRect();

        // ✅ Remove sticky 200px before trade-invest enters
        this.isSticky = tradeInvestRect.top > 400;
      }
    },
    initializeGSAP() {
      if (this.$refs.scrollContainer && this.$refs.scrollContent) {
        const sections = Array.from(this.$refs.scrollContent.children);

        this.gsapInstance = gsap.to(this.$refs.scrollContent, {
          x: () => -(this.$refs.scrollContent.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: this.$refs.scrollContainer,
            pin: true,
            scrub: 1,
            snap: sections.length > 1 ? 1 / (sections.length - 1) : 1,
            start: "top top",
            end: () =>
              `+=${this.$refs.scrollContent.scrollWidth - window.innerWidth}`,
            onUpdate: (self) => {
              const index = Math.round(self.progress * (this.tabs.length - 1));
              const newTab = this.tabs[index]?.id || this.activeTradeTab;

              if (newTab !== this.activeTradeTab) {
                this.resetProgressLoop();
                this.startProgressSequence();
                this.activeTradeTab = newTab;
              }
            },
            onLeaveBack: () => {
              this.isSticky = true;
            },
          },
        });
      }
    },

    cleanupGSAP() {
      if (this.gsapInstance) {
        this.gsapInstance.kill();
        this.gsapInstance = null;
      }
    },

    scrollToSection(targetId) {
      this.updateVerticalScroll(targetId);
      const targetSection = document.getElementById(targetId);
      const lastTabIndex = this.tabs.length - 1;
      const isLastTab = this.tabs[lastTabIndex]?.id === targetId;

      if (!targetSection) {
        console.error(`Target section '${targetId}' not found.`);
        return;
      }

      const scrollAmount = -targetSection.offsetLeft;

      this.resetProgressLoop();
      this.startProgressSequence();

      gsap.to(this.$refs.scrollContent, {
        x: scrollAmount,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          this.resetProgressLoop();
          this.startProgressSequence();
          this.activeTradeTab = targetId;
          console.log("Scrolled to:", targetId);
          // ✅ Update vertical scroll dynamically based on tab position
        },
      });
    },

    updateVerticalScroll(targetId) {
      const tabIndex = this.tabs.findIndex((tab) => tab.id === targetId);

      if (tabIndex === -1) {
        console.error(`Tab '${targetId}' not found in tab list.`);
        return;
      }

      // ✅ Dynamically calculate vertical scroll position per tab
      const verticalScrollPositions = [950, 2500]; // Adjust these values as needed

      const targetPosition = verticalScrollPositions[tabIndex] || 0;

      console.log("Scrolling window to:", targetPosition);

      gsap.to(window, {
        scrollTo: { y: targetPosition, autoKill: false },
        duration: 0,
        ease: "power2.inOut",
        onComplete: () => {
          ScrollTrigger.refresh(); // 🔄 Ensure ScrollTrigger updates
          console.log("Vertical scroll updated:", targetPosition);
        },
      });
    },

    forceUpdateScrollTrigger() {
      if (this.gsapInstance && ScrollTrigger) {
        ScrollTrigger.refresh();
        ScrollTrigger.update();

        console.log("ScrollTrigger updated on tab click");
      }
    },

    // scrollToSection(targetId) {
    //   const targetSection = document.getElementById(targetId);
    //   this.resetProgressLoop();
    //   this.startProgressSequence();
    //   if (targetSection && this.$refs.scrollContainer) {
    //     gsap.to(this.$refs.scrollContainer, {
    //       scrollLeft: targetSection.offsetLeft,
    //       duration: 1.2,
    //       ease: "power2.inOut",
    //     });
    //     this.activeTradeTab = targetId;
    //   }
    // },

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
      // console.log("featureIndex", featureIndex);
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
};
</script>

<style scoped>
.scroll-container {
  overflow-x: hidden;
  position: relative;
}

.scroll-content {
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
}

.scroll-section {
  flex: 0 0 100vw;
  scroll-snap-align: start;
}
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
