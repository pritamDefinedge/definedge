<template>
  <div class="max-w-screen-xl mx-auto px-4">
    <!-- Section Title -->
    <h2
      class="text-[#005BDF] text-center text-[15px] md:text-lg lg:text-xl xl:text-[15px] font-normal tracking-[5px] motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate"
    >
      ANALYSIS
    </h2>
    <h5
      class="text-[#2A394E] text-center text-xl font-bold tracking-wider md:text-lg lg:text-2xl xl:text-3xl mt-4 hover:motion-preset-bounce hover:motion-duration-1000 motion-preset-bounce motion-duration-1000"
    >
      Ecosystem of Actionable Analysis
    </h5>

    <!-- Tabs Container -->
    <div class="flex flex-wrap justify-center mt-8 mb-6 gap-4">
      <!-- Tab Buttons -->
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeAnalysisTab = tab.id"
        :class="{
          'border-2 active-shadow border-[#0E9CE5] bg-[#FFFFFF] text-[#000000]':
            activeAnalysisTab === tab.id,
          'bg-[#FFFFFF6E] border-2 custom-shadow border-[#EBEBEB] text-[#817E7E]':
            activeAnalysisTab !== tab.id,
        }"
        class="flex min-w-[150px] px-6 py-3 text-[13px] sm:text-sm md:text-sm text-sm font-medium lg:text-lg motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur tab-btn text-md rounded-lg cursor-pointer focus:outline-none transition duration-300 motion-scale-in-[0.5] ease-in-out"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="flex items-center justify-center space-x-12">
      <!-- technical Analysis Tab  -->
      <div
        v-for="(content, index) in tabContent.filter(
          (item) => item.id === activeAnalysisTab
        )"
        :key="content.id"
        class="w-full md:w-full px-6"
      >
        <div class="flex flex-wrap justify-between">
          <div
            class="w-full md:w-1/2 motion-preset-slide-right motion-duration-2000"
          >
            <img
              :src="content.image"
              :alt="content.title"
              class="w-full rounded-lg mb-6 object-cover object-top"
            />
          </div>
          <ul
            class="space-y-4 text-lg w-full md:w-1/2 py-16 my-4 lg:pl-5 motion-preset-slide-left motion-duration-2000"
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
            <li class="flex items-center pb-6 text-black">
              {{ content.description }}
            </li>
            <li
              v-for="(feature, featureIndex) in content.features"
              :key="featureIndex"
              class="flex items-center text-[#111111] text-sm font-sans font-semibold"
            >
              <svg
                class="w-6 h-6 text-[#111111] mr-3"
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
              {{ feature.text }}
              <!-- Fix to access feature.text -->
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
      activeAnalysisTab: this.tabs[0].id,
    };
  },
};
</script>

<style scoped>
.custom-shadow {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.03),
    inset 0 4px 3px -2px rgba(0, 0, 0, 0.07);
}
.active-shadow {
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
}
</style>
