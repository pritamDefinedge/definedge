<template>
  <section class="w-full py-16 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white">
          Features of <span class="text-blue-600 dark:text-blue-400">Zone Web</span> Trading Terminal
        </h2>

      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="(feature, index) in features" :key="index"
          class="group bg-transparent border border-gray-200 dark:border-gray-700 rounded-xl p-6 transition-all hover:border-blue-500 hover:shadow-lg hover:bg-white/50 dark:hover:bg-gray-800/50">
          <!-- Icon + Title Row -->
          <div class="flex items-center space-x-4 mb-3">
            <div :class="`w-12 h-12 rounded-lg flex items-center justify-center ${feature.bg}`">
              <img :src="feature.icon" :alt="feature.title" class="w-6 h-6 object-contain" />
            </div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              {{ feature.title }}
            </h3>
          </div>

          <!-- Description -->
          <p class="text-gray-600 dark:text-gray-300 text-sm" v-html="feature.description"></p>
        </div>
      </div>

    </div>
  </section>
</template>


<script>
export default {
  name: "FeaturesSection",
  data() {
    return {
      features: [
        {
          title: "Noiseless Charts",
          icon: "https://www.definedgesecurities.com/wp-content/uploads/2023/06/NOSELESS-CHARTS@288x.png",
          bg: "bg-blue-200 dark:bg-blue-900",
          description:
            `Make informed decisions with real-time and EOD noiseless charts such as P&F, Renko, Line Break, Kagi, and <a href="https://www.definedgesecurities.com/library/hammer-hanging-man-heikin-ashi/" class="text-blue-600 dark:text-blue-400 hover:underline">Heikin-Ashi</a> on Zone Web.`
        },
        {
          title: "Straddle & Strangle Charts",
          icon: "https://www.definedgesecurities.com/wp-content/uploads/2023/06/STRADDLE.svg",
          bg: "bg-green-200 dark:bg-green-900",
          description:
            `Become a smart Options trader with Options charts and Straddle/Strangle charts in various <a href="https://www.definedgesecurities.com/products/zone-mobile/" class="text-blue-600 dark:text-blue-400 hover:underline">charting methods</a>.`
        },
        {
          title: "Real-time Charts",
          icon: "https://www.definedgesecurities.com/wp-content/uploads/2023/06/REAL-TIME@288x.png",
          bg: "bg-purple-200 dark:bg-purple-900",
          description:
            "Stay updated on the market movement with real-time data for Equities, Futures, Options, Commodities and Currency Segments and multi-leg real-time charts in various charting methods."
        },
        {
          title: "Ratio & RS Charts",
          icon: "https://www.definedgesecurities.com/wp-content/uploads/2023/06/RATIO-CHARTS@288x.png",
          bg: "bg-yellow-200 dark:bg-yellow-900",
          description:
            `Enhance your trading with real-time & EOD Ratio Charts and <a href="https://www.definedgesecurities.com/library/relative-strength-alpha/" class="text-blue-600 dark:text-blue-400 hover:underline">Relative Strength</a> charts across charting methods.`
        },
        {
          title: "Auto-tool Section",
          icon: "https://www.definedgesecurities.com/wp-content/uploads/2023/06/AUTO-TOOL@288x.png",
          bg: "bg-red-200 dark:bg-red-900",
          description:
            `Use auto-tools like Intraday lines, <a href="https://www.definedgesecurities.com/library/camarilla/" class="text-blue-600 dark:text-blue-400 hover:underline">intra-camarilla levels</a>, Fibonacci levels, D-Pivot, and more for multiple charting types.`
        },
        {
          title: "350+ Tools & Indicators",
          icon: "https://www.definedgesecurities.com/wp-content/uploads/2023/06/350-TOOLS@288x.png",
          bg: "bg-indigo-200 dark:bg-indigo-900",
          description:
            "Predict market movement better with over 350 advanced tools, patterns and indicators, available for all charting types. You can plot unlimited tools & indicators for free."
        },
        {
          title: "Technical Analysis for Mutual Funds",
          icon: "https://www.definedgesecurities.com/wp-content/uploads/2023/06/MUTUAL-FUNDS@288x.png",
          bg: "bg-pink-200 dark:bg-pink-900",
          description:
            "Zone web trading platform offers you the ease to perform a comprehensive technical analysis of Mutual Funds to choose the one that fits your requirements."
        },
        {
          title: "Comprehensive Analysis & Trading",
          icon: "https://www.definedgesecurities.com/wp-content/uploads/2023/06/COMP-ANALYSIS@288x.png",
          bg: "bg-teal-200 dark:bg-teal-900",
          description:
            "Use our extensive technical analysis tools to analyze your trades, recognize opportunities and make smarter trading & investment decisions."
        }
      ]
    };
  }
};
</script>