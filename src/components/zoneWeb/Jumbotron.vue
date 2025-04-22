<template>
    <div class="relative w-full min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center overflow-hidden">
      <!-- Floating blurred shapes -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 -left-20 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20 dark:opacity-10"></div>
        <div class="absolute bottom-1/3 -right-20 w-96 h-96 bg-purple-700 rounded-full filter blur-3xl opacity-20 dark:opacity-10"></div>
        <div class="absolute top-0 right-1/4 w-32 h-32 bg-indigo-500 rounded-full filter blur-2xl opacity-15 dark:opacity-5"></div>
        <div class="absolute bottom-0 left-1/3 w-40 h-40 bg-pink-500 rounded-full filter blur-2xl opacity-15 dark:opacity-5"></div>
      </div>
  
      <!-- Floating animated dots pattern -->
      <div class="absolute inset-0 pointer-events-none opacity-10 dark:opacity-5">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+')]"></div>
      </div>
  
      <!-- Content Container -->
      <div class="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-24 relative z-10 text-center">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-sm font-medium mb-6">
         
          🚀 New Feature Available
        </div>
  
        <h1 class="text-2xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          Need advanced features for analysis?
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 block mt-2">
            Try RZone Today
          </span>
        </h1>
  
        <p class="mt-6 md:mt-8 text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
          With our wallet feature, your RZone subscription amount will be added as wallet points to use against brokerage.
        </p>
  
        <!-- CTA Buttons -->
        <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://www.definedgesecurities.com/products/rzone/" class="relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] transform group overflow-hidden">
            <span class="relative z-10">Get RZone</span>
            <span class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </a>
          
          <button class="px-8 py-4 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white font-semibold text-lg shadow-sm hover:shadow-md transition-all hover:scale-[1.02] transform flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
            Watch Demo
          </button>
        </div>
  
        
      </div>
  
     
    </div>
  </template>