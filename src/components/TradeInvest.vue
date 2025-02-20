<template>
    <div class="max-w-screen-xl mx-auto px-4">
      <!-- Section Title -->
      <h2
        class="text-[#005BDF] text-center text-sm md:text-lg lg:text-xl xl:text-2xl"
      >
        TRADE & INVEST
      </h2>
      <h5 class="text-gray-700 text-center text-3xl font-extrabold mt-4">
        Ecosystem of Effortless Trading
      </h5>
  
      <!-- Tabs Container -->
      <div class="flex flex-wrap justify-center mt-8 mb-6 gap-4">
        <!-- Tab Buttons -->
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTradeTab = tab.id"
          :class="{
            'border-b-2 border-blue-500 bg-white text-gray-800':
              activeTradeTab === tab.id,
            'bg-gray-100 border-blue-500 text-gray-700':
              activeTradeTab !== tab.id,
          }"
          class="tab-btn flex-1 min-w-[150px] px-4 py-2 text-[13px] sm:text-sm md:text-sm lg:text-xl rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
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
        >
          <div class="flex flex-wrap justify-between">
            <!-- Content Details -->
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                <span class="flex items-center">
                    <div v-html="content.icon"></div>
                  {{ content.title }}
                </span>
              </h6>
              <li class="flex items-center">
                <span>{{ content.description }}</span>
              </li>
              <li
                v-for="(feature, featureIndex) in content.features"
                :key="featureIndex"
                class="flex items-center"
              >
                <svg
                  class="w-6 h-6 text-green-500 mr-3"
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
                <span>{{ feature.text }}</span>
                <!-- Fix to access feature.text -->
              </li>
              <!-- Explore More Link -->
              <li class="flex items-center text-base">
                <a
                  :href="content.exploreLink"
                  class="text-blue-500 font-bold flex items-center"
                >
                  <span class="flex items-center">
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
  
            <!-- Content Image -->
            <div class="w-full md:w-1/2">
              <img
                :src="content.image"
                :alt="content.title"
                class="w-full rounded-lg"
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
      tabContent: Array
    },
    data() {
      return {
        activeTradeTab: this.tabs[0].id,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  