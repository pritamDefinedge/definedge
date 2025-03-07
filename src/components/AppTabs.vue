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
      class="text-white text-center text-xl font-bold tracking-wider md:text-lg lg:text-2xl xl:text-3xl mt-4"
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
        class="group relative inline-block overflow-hidden border-double px-4 py-4 sm:px-4 md:px-8 lg:px-8 text-base lg:text-lg tab-btn text-md rounded-lg font-semibold cursor-pointer focus:outline-none transition duration-300 ease-in-out"
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
            <h6 class="text-xl font-semibold mb-4 text-left font-sans">
              {{ content.title }}
            </h6>

            <li
              v-for="(feature, featureIndex) in content.features"
              :key="featureIndex"
              class="flex items-center cursor-pointer relative p-6 bg-gray-800 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg"
              :class="{ active: activeFeatureIndex === featureIndex }"
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
                <span class="text-sm text-gray-200 mt-1">
                  {{ feature.text }}
                </span>
              </div>
              <div class="progress-bar"></div>
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
            class="w-full md:w-1/2"
          >
            <img
              :src="content.imageSrc"
              alt="App Image"
              class="rounded-lg shadow-lg"
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
    };
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
    startProgressSequence() {
      const features =
        this.tabContent.find((tab) => tab.id === this.activeTradeTab)
          ?.features || [];
      if (features.length === 0) return;

      this.activeFeatureIndex = -1;
      this.loopProgress(0, features.length);
    },
    loopProgress(index, total) {
      if (index >= total) {
        setTimeout(() => this.loopProgress(0, total), 200); // Restart loop after last
        return;
      }

      this.activeFeatureIndex = index;
      this.progressLoop = setTimeout(() => {
        this.activeFeatureIndex = -1;
        setTimeout(() => {
          this.loopProgress(index + 1, total);
        }, 200);
      }, 5400); // Match animation duration
    },
    resetProgressLoop() {
      clearTimeout(this.progressLoop);
      this.activeFeatureIndex = -1;
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
@keyframes progressing {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
.progress-bar {
  content: "";
  display: block;
  height: 4px;
  width: 100%;
  background-color: transparent;
  position: absolute;
  left: 0;
  bottom: 0;
}
.active .progress-bar {
  background-color: #1f7ae0;
  animation: progressing 5.4s linear;
  border-bottom-left-radius: 8px;
}
</style>
