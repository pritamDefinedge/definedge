<template>
  <div class="font-sans p-4 py-24">
    <!-- Tabs -->
    <ul class="flex flex-wrap justify-center pb-2">
      <li
        v-for="year in years"
        :key="year"
        @click="setActiveTab(year)"
        @mouseenter="setActiveTab(year)"
        :class="[
          'tab',
          activeTab === year
            ? 'text-white font-bold border-b-2 border-white'
            : 'text-white font-semibold hover:text-gray-300 hover:border-b-2 hover:border-gray-300',
          'text-xl sm:text-2xl text-center py-3 px-6 cursor-pointer transition-all whitespace-nowrap',
        ]"
      >
        {{ year }}
      </li>
    </ul>

    <!-- Content Section -->
    <div
      class="max-w-4xl mx-auto mt-8 px-4 p-6 sm:p-20 border-2 border-white rounded-lg"
    >
      <transition name="fade" mode="out-in">
        <div v-if="activeTab" class="tab-content">
          <h4 class="text-xl sm:text-2xl font-bold text-white">
            {{ currentContent.title }}
          </h4>
          <p class="text-base sm:text-lg text-gray-200 mt-4 leading-relaxed">
            {{ currentContent.description }}
          </p>
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
      activeTab: "2015", // Set the default active tab
      years: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"], // List of years
      timelineContent: [
        {
          year: "2015",
          title: "First Version of a Product Launched",
          description:
            "After years of research and dedication, we launched the first version of ‘End of day’ software for charts, scanners, and trading systems. We named it TradePoint. Just 2-3 members in the team, but we were nervous yet confident about the utility of tools. The idea was to share knowledge & empower fellow traders with more tools.",
        },
        {
          year: "2016",
          title: "Dream of Making a Product Work Real-time",
          description:
            "We were energized by the response from traders & seeing them execute knowledge efficiently. We further associated with several data vendors for the real-time version. We never thought we would be able to make it a real-time software. We took a small office and added a couple of members. We achieved 1000 subscribers.",
        },
        {
          year: "2017",
          title: "Market Conferences",
          description:
            "We started conducting annual conferences to provide a learning platform for market participants, which gained huge popularity. We also started conducting webinars and events to educate people.",
        },
        {
          year: "2018",
          title: "Authorized Data Vendors",
          description:
            "We became authorized data vendors of NSE. It was a dream come true year. We could reduce the price of the product by achieving this. It gave us the liberty to provide more tools with custom features. More members got added, and we shifted to a new office.",
        },
        {
          year: "2019",
          title: "Web Version Launched",
          description:
            "Launched the web version of TradePoint. Parallelly, we also launched OPSTRA – an innovative and unique solution for options traders. We reached 1 lakh subscribers.",
        },
        {
          year: "2020",
          title: "Education Initiative & Associations",
          description:
            "We designed special training programs like Traders Nest and Market Pathshala to educate our traders & investors. Our aim was to enhance their trading and investing skills, which were equally well-received by novices as well as experienced market professionals. In an attempt to reduce the price of the software, we attempted association with some brokers.",
        },
        {
          year: "2021",
          title: "International Expansion",
          description:
            "We launched our products in Brazil; this was the first step towards going global. Further, we introduced our education initiative in Portuguese in the region, which again gained huge popularity. We reached 1 Mn+ subscribers. A 100-member team with a presence in Mumbai and Ahmedabad.",
        },
        {
          year: "2022",
          title: "Entered Securities Business",
          description:
            "We launched Definedge Securities Broking to offer our traders and investors a single platform for analysis and order placement. TradePoint & OPSTRA became trading terminals. Many features were made available for free, and subscription costs were reduced for premium versions. Launched new products such as Zone Web, Zone Mobile, Rzone, Shelf, Radar, Insight & Buzzar.",
        },
      ],
    });

    const setActiveTab = (tab) => {
      state.activeTab = tab; // Update the active tab
    };

    const currentContent = computed(() => {
      return (
        state.timelineContent.find(
          (content) => content.year === state.activeTab
        ) || {}
      );
    });

    return {
      ...toRefs(state),
      setActiveTab,
      currentContent,
    };
  },
};
</script>

<style scoped>
/* Add any additional styles here */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
  .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Add custom styles for tabs */
.tab:hover {
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab:hover,
.tab-active {
  border-bottom: 2px solid #ffffff; /* Active tab effect */
}
</style>
