<template>
  <!-- Top Bar -->
  <div
    class="bg-gradient-to-r from-[#1a365d] to-[#2c5282] text-white py-2 dark:from-gray-900 dark:to-gray-800 hidden md:block"
  >
    <div class="container mx-auto px-4">
      <div
        class="flex flex-col sm:flex-row justify-between items-center text-sm gap-2 sm:gap-0"
      >
        <div class="flex items-center space-x-4">
          <a
            href="tel:02061923200"
            class="flex items-center hover:text-blue-200 transition"
          >
            Customer Support :
            <span>
              <PhoneIcon class="h-6 w-6 text-gray-800 mr-2" />
              020-61923200
            </span>
          </a>

          <a
            href="mailto:care@definedge.com"
            class="flex items-center hover:text-blue-200 transition"
          >
            Call and Trade :
            <span>
              <MailIcon class="h-6 w-6 text-gray-800" />
              care@definedge.com
            </span>
          </a>
        </div>
        <div class="flex items-center space-x-4">
          <a href="#" class="hover:text-blue-200 transition">Login</a>
          <span
            class="border-l border-gray-400 h-4 dark:border-gray-600"
          ></span>
          <a href="#" class="hover:text-blue-200 transition">Register</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Navigation -->
  <nav
    class="bg-white shadow-lg sticky top-0 z-40 dark:bg-gray-800 dark:shadow-gray-900/50"
  >
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <!-- Show on large (lg) and above -->
        <div class="hidden lg:block flex-shrink-0">
          <img
            src="https://www.definedgesecurities.com/wp-content/uploads/2022/05/Definedge-Logo-03.png"
            alt="Definedge Logo"
            class="h-12 w-auto dark:filter dark:brightness-0 dark:invert"
          />
        </div>

        <!-- Show on medium and below (hidden on lg and above) -->
        <router-link to="/" class="block md:block lg:hidden">
          <img
            src="https://www.definedgesecurities.com/wp-content/uploads/2022/05/Definedge-Logo-03.png"
            alt="logo"
            class=" w-28 dark:filter dark:brightness-0 dark:invert"
          />
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <router-link
            to="/"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-400"
            :class="{ 'text-blue-600 dark:text-blue-400': $route.path === '/' }"
            >Home</router-link
          >
          <router-link
            to="/about"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-400"
            :class="{
              'text-blue-600 dark:text-blue-400': $route.path === '/about',
            }"
            >About</router-link
          >

          <!-- Products Dropdown -->
          <div class="relative group">
            <button
              class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-400 flex items-center"
            >
              Products
              <svg
                class="ml-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
              </svg>
            </button>
            <div
              class="absolute left-1/2 mt-4 w-screen max-w-6xl bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-x-1/2 dark:bg-gray-800 dark:shadow-gray-900/50 dark:border dark:border-gray-700"
            >
              <div class="p-6">
                <div
                  v-for="(section, key) in productMenu"
                  :key="key"
                  class="mb-8 last:mb-0"
                >
                  <div class="flex items-center mb-4">
                    <div class="bg-[#3E8DA8] p-2 rounded-lg mr-3">
                      <svg
                        class="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          :d="section.icon"
                        ></path>
                      </svg>
                    </div>
                    <h3
                      class="text-lg font-bold text-gray-800 dark:text-gray-200"
                    >
                      {{ section.title }}
                    </h3>
                  </div>
                  <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
                  >
                    <router-link
                      v-for="item in section.items"
                      :key="item.name"
                      :to="item.link"
                      class="flex items-start p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:shadow-md dark:hover:shadow-gray-700/30 group"
                    >
                      <div
                        class="bg-blue-100 p-2 rounded-lg mr-4 dark:bg-gray-700 group-hover:bg-blue-200 dark:group-hover:bg-gray-600 transition-colors"
                      >
                        <img
                          :src="item.icon"
                          :alt="item.name"
                          class="w-5 h-5"
                        />
                      </div>
                      <div>
                        <h4
                          class="font-semibold text-sm text-gray-800 dark:text-gray-200"
                        >
                          {{ item.name }}
                        </h4>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          {{ item.description }}
                        </p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <router-link
            to="/api"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-400"
            :class="{
              'text-blue-600 dark:text-blue-400': $route.path === '/api',
            }"
            >API</router-link
          >
          <router-link
            to="/pricing"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-400"
            :class="{
              'text-blue-600 dark:text-blue-400': $route.path === '/pricing',
            }"
            >Pricing</router-link
          >
          <router-link
            to="/associate"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-400"
            :class="{
              'text-blue-600 dark:text-blue-400': $route.path === '/associate',
            }"
            >Associate</router-link
          >
        </div>

        <!-- Right Side Actions -->
        <div class="flex items-center space-x-3 sm:space-x-4">
          <!-- Search -->
          <!-- Search Container -->
          <div class="relative search-container">
            <!-- Search Button -->
            <button
              class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition"
              @click.stop="toggleSearch"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-600 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <!-- Mobile/Responsive Search Modal -->
            <div
              v-show="isSearchOpen"
              class="fixed md:absolute inset-0 md:inset-auto md:right-0 md:top-14 flex md:block justify-center items-start md:items-start z-50"
            >
              <div
                class="w-[90vw] md:w-80 max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 mt-20 md:mt-0 transform transition-all duration-300"
                :class="{
                  'opacity-100 translate-y-0': isSearchOpen,
                  'opacity-0 -translate-y-2 pointer-events-none': !isSearchOpen,
                }"
              >
                <div
                  class="flex items-center border-b border-gray-200 dark:border-gray-700 pb-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400 mr-2 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search resources..."
                    class="w-full outline-none text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent"
                    v-model="searchQuery"
                    @keyup.enter="performSearch"
                  />
                </div>
                <div
                  v-if="searchQuery"
                  class="mt-2 text-xs text-gray-500 dark:text-gray-400"
                >
                  Press Enter to search
                </div>
              </div>
            </div>
          </div>

          <!-- Open Account Button - Hidden on mobile -->
          <router-link to="/mobile-verification" class="hidden md:block">
            <button
              class=" shine shine-anim  relative overflow-hidden px-4 py-2 text-sm font-semibold text-white dark:text-white rounded-md bg-[#1d294f] dark:bg-[#1d294f] border border-[#1d294f] hover:text-[#1d294f] dark:hover:text-[#1d294f] transition-all duration-300 group"
            >
              <!-- Background Hover Fill -->
              <span
                class="absolute top-1/2 left-0 h-0 w-full bg-white opacity-0 transition-all duration-300 transform -translate-y-1/2 group-hover:h-full group-hover:opacity-100"
              >
              </span>

              <!-- Button Content -->
              <span class="relative z-10 flex items-center">
                <span class="mr-1">Open Demat Account</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </router-link>

          <!-- Dark Mode Toggle -->
          <button
            @click="toggleDarkMode"
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
            aria-label="Toggle dark mode"
          >
            <svg
              v-if="isDarkMode"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-yellow-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-600 dark:text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
          </button>

          <!-- Mobile Menu Button -->
          <button
            class="block lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
            @click="toggleMenu"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-600 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <!-- Mobile Overlay -->
    <div
      v-if="isMenuOpen"
      class="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300"
      @click="toggleMenu"
      aria-hidden="true"
    >
      <!-- Mobile Drawer -->
      <div
        class="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl p-6 overflow-y-auto transition-transform duration-300 transform translate-x-0 mobile-menu-scrollbar"
        role="dialog"
        aria-modal="true"
        @click.stop
      >
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <img
            src="https://www.definedgesecurities.com/wp-content/uploads/2022/05/Definedge-Logo-03.png"
            alt="Definedge Logo"
            class="h-8 dark:filter dark:brightness-0 dark:invert"
          />
          <button
            @click="toggleMenu"
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-600 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Navigation -->
        <nav class="space-y-4">
          <router-link
            to="/"
            class="flex py-3 px-4 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg dark:text-gray-300 dark:hover:text-blue-400"
            :class="{
              'bg-gray-100 text-blue-600 dark:bg-gray-700 dark:text-blue-400':
                $route.path === '/',
            }"
            @click="toggleMenu"
            >Home</router-link
          >
          <router-link
            to="/about"
            class="flex py-3 px-4 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg dark:text-gray-300 dark:hover:text-blue-400"
            :class="{
              'bg-gray-100 text-blue-600 dark:bg-gray-700 dark:text-blue-400':
                $route.path === '/about',
            }"
            @click="toggleMenu"
            >About</router-link
          >

          <!-- Products Dropdown -->
          <div>
            <button
              class="flex py-3 px-4 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg dark:text-gray-300 dark:hover:text-blue-400 w-full flex justify-between items-center"
              @click="toggleMobileProducts"
            >
              Products
              <svg
                class="w-5 h-5 transition-transform"
                :class="{ 'rotate-180': isMobileProductsOpen }"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
              </svg>
            </button>

            <!-- Submenu -->
            <div v-show="isMobileProductsOpen" class="pl-4 mt-2 space-y-4">
              <div
                v-for="(section, key) in productMenu"
                :key="key"
                class="mb-4"
              >
                <h3
                  class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2"
                >
                  {{ section.title }}
                </h3>
                <div class="space-y-2">
                  <router-link
                    v-for="item in section.items"
                    :key="item.name"
                    :to="item.link"
                    class="flex items-start gap-3 py-2 px-4 text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    @click="toggleMenu"
                  >
                    <div class="bg-blue-100 dark:bg-gray-700 p-2 rounded-lg">
                      <img :src="item.icon" :alt="item.name" class="w-4 h-4" />
                    </div>
                    <div>
                      <div
                        class="text-sm font-medium text-gray-800 dark:text-gray-200"
                      >
                        {{ item.name }}
                      </div>
                      <div class="text-xs text-gray-500 dark:text-gray-400">
                        {{ item.description }}
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <router-link
            to="/api"
            class="flex py-3 px-4 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg dark:text-gray-300 dark:hover:text-blue-400"
            :class="{
              'bg-gray-100 text-blue-600 dark:bg-gray-700 dark:text-blue-400':
                $route.path === '/api',
            }"
            @click="toggleMenu"
            >API</router-link
          >
          <router-link
            to="/pricing"
            class="flex py-3 px-4 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg dark:text-gray-300 dark:hover:text-blue-400"
            :class="{
              'bg-gray-100 text-blue-600 dark:bg-gray-700 dark:text-blue-400':
                $route.path === '/pricing',
            }"
            @click="toggleMenu"
            >Pricing</router-link
          >

          <!-- Call to Action -->
          <div class="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
            <router-link to="/mobile-verification" class="block w-full">
              <button
                class="w-full flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-[#1d294f] hover:bg-[#2a3b6e] rounded-md transition-colors duration-200"
              >
                <span>Open Demat Account</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </router-link>
          </div>

          <!-- Dark Mode Toggle -->
          <div class="flex justify-center pt-4">
            <button
              @click="toggleDarkMode"
              class="flex items-center text-sm text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                v-if="isDarkMode"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-1.5 text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-1.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                />
              </svg>
              {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
            </button>
          </div>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isMenuOpen = ref(false);
const isSearchOpen = ref(false);
const isMobileProductsOpen = ref(false);
const searchQuery = ref("");
const isDarkMode = ref(false);

// PRODUCT MENU
const productMenu = {
  tradingProducts: {
    title: "Trading Products",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",

    items: [
      {
        name: "Zone Web",
        description: "Web Trading Platform",
        icon: new URL("@/assets/products/zone-web-icon.svg", import.meta.url)
          .href,
        link: "#",
      },
      {
        name: "OPSTRA",
        description: "Options Analytics & Trading Terminal",
        icon: new URL("@/assets/products/opstra-icon.svg", import.meta.url)
          .href,
        link: "#",
      },
      {
        name: "TradePoint",
        description: "Desktop Trading Terminal",
        icon: new URL("@/assets/products/tradepoint-icon.svg", import.meta.url)
          .href,
        link: "#",
      },
      {
        name: "Zone Mobile",
        description: "Mobile Trading Platform",
        icon: new URL("@/assets/products/zone-web-icon.svg", import.meta.url)
          .href,
        link: "#",
      },
      {
        name: "OPSTRA Mobile",
        description: "Options Analysis Application",
        icon: new URL("@/assets/products/zone-mobile-icon.svg", import.meta.url)
          .href,
        link: "#",
      },
      {
        name: "RZone",
        description: "Scanners and Backtesting",
        icon: new URL("@/assets/products/rzone-icon.svg", import.meta.url).href,
        link: "#",
      },
      {
        name: "Radar",
        description: "Fundamental Analysis & Scanners",
        icon: new URL("@/assets/products/radar-icon.svg", import.meta.url).href,
        link: "#",
      },
      {
        name: "Buzzar",
        description: "Unique Alert System",
        icon: new URL("@/assets/products/buzzer-icon.svg", import.meta.url)
          .href,
        link: "#",
      },
      {
        name: "MFZone",
        description: "Mutual Fund Analysis & Investments",
        icon: new URL("@/assets/products/MZ-60.png", import.meta.url).href,
        link: "#",
      },
      {
        name: "Trading API, Integrate",
        description: "Application Programming Interface",
        icon: new URL(
          "@/assets/products/integrate-traders-api.svg",
          import.meta.url
        ).href,
        link: "#",
      },
    ],
  },
  educationResources: {
    title: "Education Resources",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",

    items: [
      {
        name: "Shelf",
        description: "Free Online Library",
        icon: new URL("@/assets/products/shelf-icon.svg", import.meta.url).href,
        link: "#",
      },
      {
        name: "Moneyable",
        description: "Gamified Financial Education Platform for Children",
        icon: new URL("@/assets/products/Moneyable-Logo.svg", import.meta.url)
          .href,
        link: "#",
      },
      {
        name: "Insight",
        description: "Video Learning Platform",
        icon: new URL("@/assets/products/insight-icon.svg", import.meta.url)
          .href,
        link: "#",
      },
      {
        name: "Market Pathshala",
        description: "7 Days Training Program",
        icon: new URL(
          "@/assets/products/market-pathshala-icon.svg",
          import.meta.url
        ).href,
        link: "#",
      },
      {
        name: "Forum",
        description: "Online Learning Community",
        icon: new URL("@/assets/products/forum-icon.svg", import.meta.url).href,
        link: "#",
      },
      {
        name: "Conference",
        description: "DECMA & DECNOCH",
        icon: new URL("@/assets/products/conference-icon.svg", import.meta.url)
          .href,
        link: "#",
      },
      {
        name: "Gurukul",
        description: "Online Courses",
        icon: new URL("@/assets/products/Gurukul-Favicon.svg", import.meta.url)
          .href,
        link: "#",
      },
      {
        name: "Events",
        description: "Online / Offline Events",
        icon: new URL(
          "@/assets/products/definedge-event-icon.svg",
          import.meta.url
        ).href,
        link: "#",
      },
    ],
  },
};

const toggleMenu = () => {
  console.log("Toggle menu clicked, current state:", isMenuOpen.value);
  isMenuOpen.value = !isMenuOpen.value;
  console.log("New menu state:", isMenuOpen.value);
  isMobileProductsOpen.value = false;
  isSearchOpen.value = false;
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
};

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (isSearchOpen.value) {
    isMenuOpen.value = false;
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
  }
};

const toggleMobileProducts = () => {
  isMobileProductsOpen.value = !isMobileProductsOpen.value;
};

const performSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: "/search", query: { q: searchQuery.value } });
    searchQuery.value = "";
    isSearchOpen.value = false;
  }
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  updateDarkMode();
};

const updateDarkMode = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("dark-mode", "true");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("dark-mode", "false");
  }
};

// Click Outside to Close Search and Menu
const handleClickOutside = (event) => {
  const searchElement = document.querySelector(".search-container");
  const menuButton = document.querySelector("[aria-label='Toggle menu']");
  
  if (searchElement && !searchElement.contains(event.target) && !event.target.closest("[aria-label='Search']")) {
    isSearchOpen.value = false;
  }
  
  if (menuButton && !menuButton.contains(event.target) && !event.target.closest(".mobile-menu-scrollbar")) {
    isMenuOpen.value = false;
  }
  
  // Update body overflow based on menu and search state
  document.body.style.overflow = (isMenuOpen.value || isSearchOpen.value) ? "hidden" : "";
};

// Watch both menu and search for body overflow
watch([isMenuOpen, isSearchOpen], ([menuOpen, searchOpen]) => {
  document.body.style.overflow = (menuOpen || searchOpen) ? "hidden" : "";
});

onMounted(() => {
  const savedDarkMode = localStorage.getItem("dark-mode");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  isDarkMode.value =
    savedDarkMode !== null ? savedDarkMode === "true" : prefersDark;
  updateDarkMode();

  // Add transition class to html element
  document.documentElement.classList.add("transition-colors", "duration-200");

  const darkModeMedia = window.matchMedia("(prefers-color-scheme: dark)");
  const systemDarkListener = (e) => {
    if (localStorage.getItem("dark-mode") === null) {
      isDarkMode.value = e.matches;
      updateDarkMode();
    }
  };
  darkModeMedia.addEventListener("change", systemDarkListener);

  document.addEventListener("click", handleClickOutside);

  onUnmounted(() => {
    darkModeMedia.removeEventListener("change", systemDarkListener);
    document.removeEventListener("click", handleClickOutside);
  });
});
</script>

<style>
@tailwind utilities;

@layer utilities {
  /* Custom scrollbar for mobile menu */
  .mobile-menu-scrollbar::-webkit-scrollbar {
    width: 6px;
  }

  .mobile-menu-scrollbar::-webkit-scrollbar-track {
    @apply bg-gray-100 dark:bg-gray-700;
  }

  .mobile-menu-scrollbar::-webkit-scrollbar-thumb {
    @apply bg-gray-300 rounded-full dark:bg-gray-600;
  }

  .mobile-menu-scrollbar::-webkit-scrollbar-thumb:hover {
    @apply bg-gray-400 dark:bg-gray-500;
  }

  /* Fix for search modal and mobile menu transitions */
  .search-modal-enter-active,
  .search-modal-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .search-modal-enter-from,
  .search-modal-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }

  /* Ensure proper stacking context */
  .nav-container {
    isolation: isolate;
  }

  /* Fix for dark mode transitions */
  .dark-mode-transition {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
}
</style>
