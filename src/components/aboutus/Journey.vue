<template>
  <div class="font-sans p-4 py-12 md:py-24 rounded-lg bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
    <!-- Section Title with decorative elements -->
    <div class="relative mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white relative z-10">
        Our Journey
      </h2>
      <div class="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-24 h-1 bg-blue-600 rounded-full"></div>
      <div class="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-16 h-1 bg-blue-400 rounded-full opacity-70"></div>
    </div>

    <!-- Timeline Navigation -->
    <div class="relative">
      <!-- Animated line -->
      <div class="hidden sm:block absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-600 dark:to-blue-900 top-1/2 transform -translate-y-1/2 z-0"></div>
      
      <!-- Tabs Container -->
      <div class="container mx-auto px-4">
        <ul class="flex flex-wrap justify-center gap-2 sm:gap-4 relative z-10">
          <li
            v-for="year in years"
            :key="year"
            @click="setActiveTab(year)"
            @mouseenter="setActiveTab(year)"
            :class="[
              activeTab === year
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600',
              'text-sm sm:text-base md:text-lg font-medium rounded-full px-4 py-2 sm:px-6 sm:py-3 cursor-pointer transition-all duration-300 whitespace-nowrap',
              'flex items-center justify-center border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800'
            ]"
          >
            <span v-if="activeTab === year" class="mr-2 text-blue-200">•</span>
            {{ year }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-6xl mx-auto mt-8 sm:mt-16">
      <transition 
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform translate-y-4 opacity-0"
        mode="out-in"
      >
        <div 
          v-if="activeTab" 
          :key="activeTab"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl"
        >
          <!-- Year Badge -->
          <div class="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 flex items-center">
            <span class="text-lg font-bold">{{ currentContent.year }}</span>
            <span class="ml-2 text-sm opacity-90">{{ currentContent.title }}</span>
          </div>
          
          <!-- Content -->
          <div class="p-6 md:p-8">
            <p class="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed md:leading-loose">
              {{ currentContent.description }}
            </p>
          </div>
          
          <!-- Milestone Indicator -->
          <div class="px-6 pb-4 flex items-center">
            <div class="w-3 h-3 rounded-full bg-blue-600 mr-2 animate-pulse"></div>
            <span class="text-sm text-gray-500 dark:text-gray-400">Key Milestone</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";

export default {
  setup() {
    const state = reactive({
      activeTab: "2015", 
      years: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
      timelineContent: [
        {
          year: "2015",
          title: "First Version of a Product Launched",
          description: "After years of research and dedication, we launched the first version of 'End of day' software for charts, scanners, and trading systems. We named it TradePoint. Just 2-3 members in the team, but we were nervous yet confident about the utility of tools. The idea was to share knowledge & empower fellow traders with more tools.",
        },
        {
          year: "2016",
          title: "Dream of Making a Product Work Real-time",
          description: "We were energized by the response from traders & seeing them execute knowledge efficiently. We further associated with several data vendors for the real-time version. We never thought we would be able to make it a real-time software. We took a small office and added a couple of members. We achieved 1000 subscribers.",
        },
        {
          year: "2017",
          title: "Market Conferences",
          description: "We started conducting annual conferences to provide a learning platform for market participants, which gained huge popularity. We also started conducting webinars and events to educate people.",
        },
        {
          year: "2018",
          title: "Authorized Data Vendors",
          description: "We became authorized data vendors of NSE. It was a dream come true year. We could reduce the price of the product by achieving this. It gave us the liberty to provide more tools with custom features. More members got added, and we shifted to a new office.",
        },
        {
          year: "2019",
          title: "Web Version Launched",
          description: "Launched the web version of TradePoint. Parallelly, we also launched OPSTRA – an innovative and unique solution for options traders. We reached 1 lakh subscribers.",
        },
        {
          year: "2020",
          title: "Education Initiative & Associations",
          description: "We designed special training programs like Traders Nest and Market Pathshala to educate our traders & investors. Our aim was to enhance their trading and investing skills, which were equally well-received by novices as well as experienced market professionals. In an attempt to reduce the price of the software, we attempted association with some brokers.",
        },
        {
          year: "2021",
          title: "International Expansion",
          description: "We launched our products in Brazil; this was the first step towards going global. Further, we introduced our education initiative in Portuguese in the region, which again gained huge popularity. We reached 1 Mn+ subscribers. A 100-member team with a presence in Mumbai and Ahmedabad.",
        },
        {
          year: "2022",
          title: "Entered Securities Business",
          description: "We launched Definedge Securities Broking to offer our traders and investors a single platform for analysis and order placement. TradePoint & OPSTRA became trading terminals. Many features were made available for free, and subscription costs were reduced for premium versions. Launched new products such as Zone Web, Zone Mobile, Rzone, Shelf, Radar, Insight & Buzzar.",
        },
      ],
    });

    const setActiveTab = (tab) => {
      state.activeTab = tab;
    };

    const currentContent = computed(() => {
      return state.timelineContent.find(content => content.year === state.activeTab) || {};
    });

    return {
      ...toRefs(state),
      setActiveTab,
      currentContent,
    };
  },
};
</script>