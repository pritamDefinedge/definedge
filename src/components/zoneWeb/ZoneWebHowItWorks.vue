<template>
  <section
    class="relative py-20 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -left-20 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/10 rounded-full filter blur-3xl">
      </div>
      <div
        class="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/10 rounded-full filter blur-3xl">
      </div>
    </div>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
      <!-- Left Column (Image Gallery) -->
  <div class="space-y-6">
    <div class="relative group">
      <!-- Main image with arrows -->
      <div
        class="relative overflow-hidden rounded-2xl shadow-xl border-4 border-white dark:border-gray-800"
      >
        <img
          :src="currentImage"
          :alt="'Zone Card ' + (currentIndex + 1)"
          class="w-full h-auto transition-opacity duration-500"
          loading="lazy"
          decoding="async"
        />

        <!-- Prev Button -->
        <button
          @click="prevImage"
          class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-all z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Next Button -->
        <button
          @click="nextImage"
          class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition-all z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Thumbnails -->
      <div class="flex justify-center gap-3 mt-4">
        <button
          v-for="(img, index) in images"
          :key="index"
          @click="currentIndex = index"
          class="w-16 h-16 rounded-lg overflow-hidden border-2 transition-all"
          :class="currentIndex === index ? 'border-blue-500 scale-110' : 'border-transparent hover:border-gray-300'"
        >
          <img :src="img" :alt="'Thumbnail ' + (index + 1)" class="w-full h-full object-cover" />
        </button>
      </div>
    </div>
  </div>

      <!-- Right Column (Content) -->
      <div class="space-y-8">
        <div
          class="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium shadow-sm">
          <span class="relative flex items-center justify-center w-5 h-5 mr-2">
            <span
              class="absolute inline-flex w-full h-full rounded-full bg-purple-400 opacity-75 blur-sm animate-ping"></span>
            <span class="relative z-10">🧠</span>
          </span>
          Innovative Trading Terminal
        </div>

        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
          Master the Markets with <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Zone
            Web Trading</span>
        </h2>

        <div class="space-y-5">
          <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Our web-based trading terminal is designed for traders of all
            levels, providing powerful technical analysis tools and seamless
            execution in one intuitive platform.
          </p>

          <div class="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"
              viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-gray-700 dark:text-gray-300">
              Access advanced charting and trading tools from any device,
              anywhere
            </p>
          </div>

          <div class="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"
              viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-gray-700 dark:text-gray-300">
              No software installation required - works directly in your browser
            </p>
          </div>

          <div class="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"
              viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <p class="text-gray-700 dark:text-gray-300">
              Real-time data and analysis for all market segments
            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 pt-2">
          <a href="https://zone.definedgesecurities.com/" target="_blank"
            class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] transform text-center">
            Login to Zone Web
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

import Zone1Img from '@/assets/products/zoneweb/ZONE-f1.webp'
import Zone2Img from '@/assets/products/zoneweb/ZONE-2nd.webp'
import Zone3Img from '@/assets/products/zoneweb/ZONE-3rd.webp'

const images = [Zone1Img, Zone2Img, Zone3Img]
const currentIndex = ref(0)

const currentImage = computed(() => images[currentIndex.value])

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length
}
</script>
