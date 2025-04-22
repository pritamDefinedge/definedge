<template>
    <section class="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 py-20 px-4">
      <!-- Background elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/10 rounded-full filter blur-3xl"></div>
        <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-300/20 dark:bg-blue-800/10 rounded-full filter blur-3xl"></div>
        <div class="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200/20 dark:bg-purple-900/10 rounded-full filter blur-2xl"></div>
      </div>
  
      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Header section -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
            Exclusive Trading Platform
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Supercharge Your Trading With <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Zone Web Terminal</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Our comprehensive web trading platform offers unique technical analysis tools for all market segments and time frames.
          </p>
          <div class="bg-blue-50 dark:bg-gray-800/50 inline-flex items-center px-6 py-3 rounded-full border border-blue-100 dark:border-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-blue-600 dark:text-blue-400 font-medium">
              All <a href="https://signup.definedgesecurities.com/" class="underline hover:text-blue-700 dark:hover:text-blue-300">Definedge Securities Demat Account</a> holders get free access
            </span>
          </div>
        </div>
  
        <!-- Features grid -->
        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/70 dark:border-gray-700/50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden relative"
          >
            <!-- Hover effect background -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            
            <div class="relative z-10">
              <div class="flex items-center gap-5 mb-5">
                <div class="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                  <img :src="feature.icon" :alt="feature.title" class="w-10 h-10 object-contain" />
                </div>
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white">{{ feature.title }}</h3>
              </div>
              <p class="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed relative z-10" v-html="feature.description"></p>
              
              <!-- Learn more link that appears on hover -->
              <div class="mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a href="#" class="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
  
        
      </div>
    </section>
  </template>
  
  <script setup>
  const features = [
    {
      title: "Innovative Trading Terminal",
      icon: "https://www.definedgesecurities.com/wp-content/uploads/2023/06/TRADING-TERMINAL@288x.png",
      description: `Enhance your web trading experience by analyzing the market movement to make informed decisions and trading on the same platform with ease.`,
    },
    {
      title: "Customize Your Workspace",
      icon: "https://www.definedgesecurities.com/wp-content/uploads/2023/06/CUSTOMIZE-ZONE-WEB@288x.png",
      description: `Save your preferred <a href="https://www.definedgesecurities.com/patterns-indicators/" class="text-blue-600 dark:text-blue-400 underline">patterns & indicators</a> or save charts for different timeframes and refer to them whenever you need.`,
    },
    {
      title: "Noiseless Charts",
      icon: "https://www.definedgesecurities.com/wp-content/uploads/2023/06/NOISLESS-CHARTS@288x.png",
      description: `Focus on trends with noiseless charts like <a href="https://www.definedgesecurities.com/products/tradepoint/" class="text-blue-600 dark:text-blue-400 underline">Point & Figure</a>, Renko, Line Break, Kagi, and more.`,
    },
    {
      title: "Advanced Analysis Tools",
      icon: "https://www.definedgesecurities.com/wp-content/uploads/2023/06/ADVANCED-FEATURES@288x.png",
      description: `Use advanced tools like breadth, relative strength, Straddle & Strangle charts with unique patterns across charting types.`,
    },
    {
      title: "Intuitive Interface",
      icon: "https://www.definedgesecurities.com/wp-content/uploads/2023/06/EASY-TO-USE@288x.png",
      description: `Monitor multiple timeframes, plot indicators, recognize patterns, and trade seamlessly in one place.`,
    },
    {
      title: "Multiple Charting Methods",
      icon: "https://www.definedgesecurities.com/wp-content/uploads/2023/06/CHARTING-METHODS@288x.png",
      description: `Explore various methods including bar, candlestick, P&F, <a href="https://www.definedgesecurities.com/library/weak-breakout-bullish-renko/" class="text-blue-600 dark:text-blue-400 underline">Renko</a>, Line-break, and more.`,
    },
  ];
  </script>