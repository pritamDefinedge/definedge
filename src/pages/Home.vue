<template>
  <section
    class="bg-white dark:bg-gray-900 bg-cover bg-center h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh]"
    style="
      background-image: url('https://www.definedgesecurities.com/wp-content/uploads/2025/02/definedge-banner-scaled.webp');
    "
  >
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10"
    >
      <!-- Flex container for centering content vertically and horizontally -->
      <div
        class="mr-auto place-self-center py-16 lg:col-span-7 text-white px-4 flex flex-col"
      >
        <!-- Title with responsive text sizes -->
        <h1
          class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl xl:text-6xl"
        >
          All-in-One Investing & Trading Ecosystem
        </h1>
        <!-- Paragraph with responsive text sizes -->
        <p
          class="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl xl:text-2xl"
        >
          Open <span class="text-yellow-500"> Free </span> Super Demat account
        </p>
        <!-- Form section -->
        <div class="flex justify-center">
          <form
            action="/#wpcf7-f29499-p30911-o1"
            method="post"
            class="w-full mx-auto"
          >
            <div class="flex items-center gap-3">
              <!-- Phone number input -->
              <div class="flex w-full lg:w-auto sm:w-auto md:w-auto">
                <input
                  type="text"
                  name="text-million-2"
                  id="text-million-2"
                  class="w-12 p-2 border border-gray-300 rounded-l-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value="+91"
                  readonly="readonly"
                  aria-invalid="false"
                  style="
                    background: linear-gradient(
                      180deg,
                      #ffffff20 0%,
                      #ffffff10 100%
                    );
                  "
                />
                <input
                  type="tel"
                  name="million-number"
                  id="million-number"
                  class="w-full p-2 border rounded-r-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter Mobile Number"
                  value=""
                  required
                  aria-required="true"
                  aria-invalid="false"
                  style="
                    background: linear-gradient(
                      180deg,
                      #ffffff20 0%,
                      #ffffff10 100%
                    );
                  "
                />
              </div>
              <!-- Submit Button -->
              <div>
                <button
                  type="submit"
                  class="p-2 w-28 bg-primary-700 text-white rounded-[5px] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gray-800">
    <div class="max-w-screen-xl mx-auto px-4">
      <!-- Flex container for both sections -->
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-4 py-3"
      >
        <!-- Trusted by section -->
        <div class="text-center">
          <p class="text-base md:text-lg text-gray-300">
            Trusted by
            <strong class="text-white text-lg md:text-xl">2.3 million</strong>
            Users &amp; Counting
          </p>
        </div>

        <!-- Coming Soon Announcement Section -->
        <div class="text-center py-4 px-4 rounded-md">
          <div class="text-lg md:text-xl font-semibold text-white">
            <span>Coming Soon : </span>
            <span class="text-primary-500 blink-text"> Super Algo Trader </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Ecosystem That Brings Markets to Your Fingertips -->
  <section
    class="relative bg-gray-900 text-white flex justify-center items-center pt-12"
    style="background-image: linear-gradient(100deg, #26282c 0%, #131416 100%)"
  >
    <div class="max-w-screen-xl mx-auto px-4">
      <!-- Section Title -->
      <h4
        class="text-blue-700 text-center text-[25px] md:text-lg lg:text-xl xl:text-2xl font-bold"
      >
        APPS
      </h4>
      <h5
        class="text-white text-center text-3xl font-extrabold md:text-lg lg:text-xl xl:text-2xl mt-4"
      >
        Ecosystem That Brings Markets to Your Fingertips
      </h5>

      <!-- Tabs Container -->
      <div class="flex justify-center mt-8 mb-6 gap-x-6">
        <!-- Tab Buttons -->
        <button
          @click="activeAppTab = 'ZoneApp'"
          :class="{
            'border-b-2 border-blue-500 bg-white text-gray-800':
              activeAppTab === 'ZoneApp',
            'bg-gray-100 border-blue-500 text-gray-700':
              activeAppTab !== 'ZoneApp',
          }"
          class="tab-btn px-6 py-2 text-md rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
          Zone App
        </button>
        <button
          @click="activeAppTab = 'OPSTRAApp'"
          :class="{
            'border-b-2 border-blue-500 bg-white text-gray-800':
              activeAppTab === 'OPSTRAApp',
            'bg-gray-100 border-blue-500 text-gray-700':
              activeAppTab !== 'OPSTRAApp',
          }"
          class="tab-btn px-6 py-2 text-md rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
          OPSTRA App
        </button>
      </div>

      <!-- Tab Content -->
      <div class="flex items-center justify-center space-x-12">
        <!-- Zone App Content -->
        <div v-if="activeAppTab === 'ZoneApp'" class="w-full md:w-full px-6">
          <div class="flex flex-wrap justify-between">
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                Learn, Analyze & Trade Effortlessly Anytime, Anywhere
              </h6>
              <li class="flex items-center">
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
                <span
                  >Powerful Technical & Fundamental Scanners for smarter stock
                  selection</span
                >
              </li>
              <li class="flex items-center">
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
                <span
                  >Comprehensive Stock Reports with in-depth technical and
                  fundamental insights</span
                >
              </li>
              <li class="flex items-center">
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
                <span
                  >Instant Analysis & Lightning-Fast Order Execution across all
                  order types</span
                >
              </li>
              <li class="flex items-center">
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
                <span
                  >Education, Mutual Fund Analysis, IPO Insights, Smart Alerts &
                  More</span
                >
              </li>
              <li class="flex items-center">
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
                <span
                  >Strategy-Based Orders, Holding Insights & Tools for
                  Disciplined Investing</span
                >
              </li>
              <li class="flex items-start">
                <h6 class="text-xl font-extrabold mb-4 text-start">
                  Download the App Now
                </h6>
              </li>
              <li class="flex items-start">
                <div class="flex space-x-4 justify-start">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.definedge.zone"
                    target="_blank"
                    class=""
                  >
                    <img
                      class=""
                      src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/Google-Play-Store.png"
                      alt="Google Play Store"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/in/app/zone-definedge-trading-app/id1659365110"
                    target="_blank"
                    class=""
                  >
                    <img
                      class=""
                      src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/App-Store-Apple.png"
                      alt="Apple App Store"
                    />
                  </a>
                </div>
              </li>
            </ul>

            <div class="w-full md:w-1/2 mt-8">
              <img
                src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Zone.webp"
                alt="App Image"
                class="w-[80%] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <!-- OPSTRA App Content -->
        <div v-if="activeAppTab === 'OPSTRAApp'" class="w-full md:w-full px-6">
          <div class="flex flex-wrap justify-between">
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                India’s Most Loved Options Platform, Now in An App
              </h6>
              <li class="flex items-center">
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
                <span>Trade Directly from Strategy Builder</span>
              </li>
              <li class="flex items-center">
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
                <span>Get PayOff Charts for all your Live positions</span>
              </li>
              <li class="flex items-center">
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
                <span>Ease of adjustments directly from Positions</span>
              </li>
              <li class="flex items-center">
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
                <span>Find more opportunities. Trade in MCX & BFO too</span>
              </li>
              <li class="flex items-center">
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
                <span>Analyze unlimited Open positions</span>
              </li>
              <li class="flex items-start">
                <h6 class="text-xl font-extrabold mb-4 text-start">
                  Download the App Now
                </h6>
              </li>
              <li class="flex items-start">
                <div class="flex space-x-4 justify-start">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.definedge.zone"
                    target="_blank"
                    class=""
                  >
                    <img
                      class=""
                      src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/Google-Play-Store.png"
                      alt="Google Play Store"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/in/app/zone-definedge-trading-app/id1659365110"
                    target="_blank"
                    class=""
                  >
                    <img
                      class=""
                      src="https://www.definedgesecurities.com/wp-content/uploads/2022/12/App-Store-Apple.png"
                      alt="Apple App Store"
                    />
                  </a>
                </div>
              </li>
            </ul>
            <div class="w-full md:w-1/2 mt-8">
              <img
                src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Opstra-1024x1024.webp"
                alt="App Image"
                class="w-[80%] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TRADE & INVEST -->
  <section
    class="relative text-blace flex justify-center items-center pt-12"
    style="
      background-image: linear-gradient(312deg, #1e50d14d 0%, #31c19d4d 100%);
      background-color: transparent;
    "
  >
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
          @click="activeTradeTab = 'optionsTab'"
          :class="{
            'border-b-2 border-blue-500 bg-white text-gray-800':
              activeTradeTab === 'optionsTab',
            'bg-gray-100 border-blue-500 text-gray-700':
              activeTradeTab !== 'optionsTab',
          }"
          class="tab-btn flex-1 min-w-[150px] px-4 py-2 text-[13px] sm:text-sm md:text-sm lg:text-xl rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
          Options Trading Platform
        </button>
        <button
          @click="activeTradeTab = 'webPlatformTab'"
          :class="{
            'border-b-2 border-blue-500 bg-white text-gray-800':
              activeTradeTab === 'webPlatformTab',
            'bg-gray-100 border-blue-500 text-gray-700':
              activeTradeTab !== 'webPlatformTab',
          }"
          class="tab-btn flex-1 min-w-[150px] px-4 py-2 text-[13px] sm:text-sm md:text-sm lg:text-xl rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
          Web Platform
        </button>
        <button
          @click="activeTradeTab = 'DesktopApplication'"
          :class="{
            'border-b-2 border-blue-500 bg-white text-gray-800':
              activeTradeTab === 'DesktopApplication',
            'bg-gray-100 border-blue-500 text-gray-700':
              activeTradeTab !== 'DesktopApplication',
          }"
          class="tab-btn flex-1 min-w-[150px] px-4 py-2 text-[13px] sm:text-sm md:text-sm lg:text-xl rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
          Desktop Application
        </button>
        <button
          @click="activeTradeTab = 'UniqueAlertSystem'"
          :class="{
            'border-b-2 border-blue-500 bg-white text-gray-800':
              activeTradeTab === 'UniqueAlertSystem',
            'bg-gray-100 border-blue-500 text-gray-700':
              activeTradeTab !== 'UniqueAlertSystem',
          }"
          class="tab-btn flex-1 min-w-[150px] px-4 py-2 text-[13px] sm:text-sm md:text-sm lg:text-xl rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
          Unique Alert System
        </button>
      </div>

      <!-- Tab Content -->
      <div class="flex items-center justify-center space-x-12">
        <!-- Options Trading Platform Content -->
        <div
          v-if="activeTradeTab === 'optionsTab'"
          class="w-full md:w-full px-6"
        >
          <div class="flex flex-wrap justify-between">
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 58.73 60"
                    width="40px"
                    class="mr-4"
                  >
                    <path
                      d="M58.73,20.43C58.73,9.16,49.57,0,38.3,0s-19.79,8.57-20.37,19.32c-.02.37-.05.74-.05,1.11v20.43h19.09c.03-.42.06-.84.06-1.28v-2.55h-15.32v-16.6c0-.43.03-.85.06-1.28.65-8.56,7.81-15.32,16.53-15.32,9.15,0,16.59,7.45,16.59,16.59,0,7.6-5.14,14-12.13,15.96v3.96c9.12-2.04,15.96-10.19,15.96-19.91Z"
                      style="fill: #0195aa"
                    ></path>
                    <path
                      d="M21.77,19.15c-.03.42-.06.84-.06,1.28v2.55h15.32v16.6c0,.43-.03.85-.06,1.28-.65,8.56-7.81,15.32-16.53,15.32-9.15,0-16.59-7.45-16.59-16.59,0-7.6,5.14-14,12.13-15.96v-3.97C6.84,21.7,0,29.85,0,39.57c0,11.26,9.16,20.43,20.43,20.43s19.79-8.57,20.37-19.32c.02-.37.05-.74.05-1.11v-20.42h-19.09Z"
                      style="fill: #606060"
                    ></path>
                  </svg>
                  OPSTRA
                </span>
              </h6>
              <li class="flex items-center">
                <span
                  >You deserve India’s most popular options trading terminal.
                  Create, analyze and directly trade your strategies while
                  seamlessly managing your positions and tracking your PNL. Talk
                  about doing everything at once!</span
                >
              </li>
              <li class="flex items-center text-base">
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
                <span>35+ Pre-defined Strategies</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-green-500 mr-3 text-base"
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
                <span>Payoff Charts for Risk-Reward Assessment</span>
              </li>
              <li class="flex items-center text-base">
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
                <span>Options Algorithm to Streamline Strategy Selection</span>
              </li>
              <li class="flex items-center text-base">
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
                <span>TOI & Historical TOI to Guage Market Sentiment</span>
              </li>
              <li class="flex items-center text-base">
                <a
                  href="https://www.definedgesecurities.com/products/opstra/"
                  class="text-blue-500 font-bold flex items-center"
                  id="ts-otp"
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

            <div class="w-full md:w-1/2">
              <img
                src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/OPSTRA-2-1-1024x1024.webp"
                alt="App Image"
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <!-- Web Platform Content -->
        <div
          v-if="activeTradeTab === 'webPlatformTab'"
          class="w-full md:w-full px-6"
        >
          <div class="flex flex-wrap justify-between">
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 50 50"
                    width="40px"
                    class="mr-4"
                  >
                    <polygon
                      points="0 0 0 8.69 24.75 8.62 0 50 7.49 50 37.4 0 0 0"
                      style="fill: #2070d8"
                    ></polygon>
                    <polygon
                      points="50 0 42.76 0 12.85 50 50 50 50 41.31 25.25 41.38 50 0"
                      style="fill: #2070d8"
                    ></polygon>
                  </svg>
                  Zone Web
                </span>
              </h6>
              <li class="flex items-center">
                <span
                  >One web trading terminal that does it all from analysis with
                  chart-specific patterns and indicators to effortless trading
                  across segments. Explore tools designed to make your journey
                  easier so you focus on your process-based approach.</span
                >
              </li>
              <li class="flex items-center">
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
                <span>All Charting Types, Conventional & Noiseless</span>
              </li>
              <li class="flex items-center">
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
                <span>Unique and innovative patterns and indicators</span>
              </li>
              <li class="flex items-center">
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
                <span>Ratio, RS, Straddle, Multi-leg Options Charts</span>
              </li>
              <li class="flex items-center">
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
                <span>Chart-specific Auto Tools for Faster Analysis</span>
              </li>

              <li class="flex items-center text-base">
                <a
                  href="https://www.definedgesecurities.com/products/zone-web-trading-terminal/"
                  class="text-blue-500 font-bold flex items-center"
                  id="ts-otp"
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
            <div class="w-full md:w-1/2">
              <img
                src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Zone-Web-1-1-1024x1024.webp"
                alt="App Image"
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <!-- Desktop Application Content -->
        <div
          v-if="activeTradeTab === 'DesktopApplication'"
          class="w-full md:w-full px-6"
        >
          <div class="flex flex-wrap justify-between">
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    style="enable-background: new 0 0 60 60"
                    xml:space="preserve"
                    width="40px"
                    class="mr-4"
                  >
                    <g>
                      <path
                        class="st19"
                        d="M46.28,10H28.41c-2.05,0-3.72,1.67-3.72,3.72c0,2.05,1.67,3.72,3.72,3.72h11.17h2.99v2.99v11.41  c0,2.05,1.67,3.72,3.72,3.72c2.05,0,3.72-1.67,3.72-3.72V13.72C50,11.67,48.33,10,46.28,10z"
                        fill="#0000FF"
                      ></path>
                      <path
                        class="st19"
                        d="M31.59,42.57H20.42h-2.99v-2.99V28.17c0-2.05-1.67-3.72-3.72-3.72c-2.05,0-3.72,1.67-3.72,3.72v18.11  c0,2.05,1.67,3.72,3.72,3.72h17.87c2.05,0,3.72-1.67,3.72-3.72C35.3,44.24,33.64,42.57,31.59,42.57z"
                        fill="#0000FF"
                      ></path>
                      <circle
                        class="st20"
                        cx="30"
                        cy="30"
                        r="3.72"
                        fill="#0000FF"
                      ></circle>
                      <!-- Change this to your desired blue color -->
                    </g>
                  </svg>

                  Desktop Application
                </span>
              </h6>

              <li class="flex items-center">
                <span
                  >A Unique Desktop Trading & Analysis Platform. Experience
                  seamless analysis like never before! With a comprehensive set
                  of patterns, indicators, and noiseless charts, we make trading
                  objective and efficient for you.</span
                >
              </li>

              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span
                  >Create & test your own strategies with real-time stock
                  scanning</span
                >
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span
                  >Unlimited stocks & groups for scanning—no restrictions</span
                >
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span
                  >Real-time stock, options, straddle & strangle scanners</span
                >
              </li>

              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span
                  >Pre-built & customized strategies scanners to fit your unique
                  trading needs</span
                >
              </li>
              <li class="flex items-center text-base">
                <a
                  href="https://www.definedgesecurities.com/products/tradepoint/"
                  class="text-blue-500 font-bold flex items-center"
                  id="ts-otp"
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
            <div class="w-full md:w-1/2">
              <img
                src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Tradepoint-1-1-1024x1024.webp"
                alt="App Image"
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <!-- Unique Alert System Content -->
        <div
          v-if="activeTradeTab === 'UniqueAlertSystem'"
          class="w-full md:w-full px-6"
        >
          <div class="flex flex-wrap justify-between">
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 20 20"
                    width="40px"
                    class="mr-4"
                  >
                    <polygon
                      class="cls-1"
                      points="9.53 8.86 11.16 4.43 11.19 4.35 11.19 4.34 11.56 3.34 11.19 3.34 9.11 3.34 4.13 3.34 4.13 5 8.72 5 5.24 14.47 5.24 14.47 3.21 20 3.82 20 5.89 20 11.19 20 11.19 18.33 6.03 18.33 9.52 8.86 9.53 8.86"
                      fill="#0000FF"
                    ></polygon>
                    <polygon
                      class="cls-1"
                      points="14.76 5.53 16.39 1.09 16.42 1.01 16.42 1.01 16.79 0 16.42 0 14.33 0 9.36 0 9.36 1.67 13.95 1.67 10.47 11.14 10.47 11.14 8.44 16.66 9.05 16.66 11.12 16.66 16.42 16.66 16.42 15 11.26 15 14.75 5.53 14.76 5.53"
                      fill="#0000FF"
                    ></polygon>
                  </svg>
                  Buzzar
                </span>
              </h6>
              <li class="flex items-center">
                <span
                  >Get every opportunity with updates for price, volume or
                  strategy for individual or a group of stocks. Set updates on
                  the go with the Zone Mobile App and choose the notification
                  most convenient for you, to make sure you never miss
                  out.</span
                >
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span
                  >300 Simultaneous Alerts to keep you informed in real
                  time</span
                >
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span
                  >Price, Volume, and Strategy Alerts for precise tracking</span
                >
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span>Custom Alerts for your technical strategies</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span>Seamless Strategy-Based Orders</span>
              </li>
              <li class="flex items-center text-base">
                <a
                  href="https://www.definedgesecurities.com/products/buzzar/"
                  class="text-blue-500 font-bold flex items-center"
                  id="ts-otp"
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
            <div class="w-full md:w-1/2 mt-8">
              <img
                src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Buzzar-1-1-1024x1024.webp"
                alt="App Image"
                class="w-[80%] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--ANALYSIS -->
  <section
    class="relative bg-white text-black flex justify-center items-center pt-12 sm:py-12 py-12"
  >
    <div class="max-w-screen-xl mx-auto px-4">
      <!-- Section Title -->
      <h2
        class="text-[#005BDF] text-center font-liter text-[24px] md:text-lg lg:text-xl xl:text-2xl"
      >
        ANALYSIS
      </h2>
      <h5 class="text-gray-700 text-center text-3xl font-extrabold mt-4">
        Ecosystem of Actionable Analysis
      </h5>

      <!-- Tabs Container -->
      <div class="flex flex-wrap justify-center mt-8 mb-6 gap-4">
        <!-- Tab Buttons -->
        <button
          @click="activeAnalysisTab = 'technicalAnalysisTab'"
          :class="{
            'border-b-2 border-blue-500 bg-gray-50 text-gray-800':
              activeAnalysisTab === 'technicalAnalysisTab',
            'bg-gray-100 border-blue-500 text-gray-700':
              activeAnalysisTab !== 'technicalAnalysisTab',
          }"
          class="tab-btn flex-1 min-w-[150px] px-4 py-2 text-[13px] sm:text-sm md:text-sm lg:text-xl rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
          Technical Analysis
        </button>
        <button
          @click="activeAnalysisTab = 'fundamentalAnalysisTab'"
          :class="{
            'border-b-2 border-blue-500 bg-gray-50 text-gray-800':
              activeAnalysisTab === 'fundamentalAnalysisTab',
            'bg-gray-100 border-blue-500 text-gray-700':
              activeAnalysisTab !== 'fundamentalAnalysisTab',
          }"
          class="tab-btn flex-1 min-w-[150px] px-4 py-2 text-[13px] sm:text-sm md:text-sm lg:text-xl rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
          Fundamental Analysis
        </button>
        <button
          @click="activeAnalysisTab = 'optionsStrategiesAnalysisTab'"
          :class="{
            'border-b-2 border-blue-500 bg-gray-50 text-gray-800':
              activeAnalysisTab === 'optionsStrategiesAnalysisTab',
            'bg-gray-100 border-blue-500 text-gray-700':
              activeAnalysisTab !== 'optionsStrategiesAnalysisTab',
          }"
          class="tab-btn flex-1 min-w-[150px] px-4 py-2 text-[13px] sm:text-sm md:text-sm lg:text-xl rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
          Options Strategies
        </button>
        <button
          @click="activeAnalysisTab = 'mutualFundAnalysisTab'"
          :class="{
            'border-b-2 border-blue-500 bg-gray-50 text-gray-800':
              activeAnalysisTab === 'mutualFundAnalysisTab',
            'bg-gray-100 border-blue-500 text-gray-700':
              activeAnalysisTab !== 'mutualFundAnalysisTab',
          }"
          class="tab-btn flex-1 min-w-[150px] px-4 py-2 text-[13px] sm:text-sm md:text-sm lg:text-xl rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
          Mutual Fund Analysis
        </button>
      </div>

      <!-- Tab Content -->
      <div class="flex items-center justify-center space-x-12">
        <!-- technical Analysis Tab  -->
        <div
          v-if="activeAnalysisTab === 'technicalAnalysisTab'"
          class="w-full md:w-full px-6"
        >
          <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-1/2">
              <img
                src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Rzone-1-1-1024x1024.webp"
                alt="App Image"
                class="w-full rounded-lg"
              />
            </div>
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 20 21"
                    fill="none"
                    class="mr-4"
                  >
                    <g clip-path="url(#clip0_817_5321)">
                      <path
                        d="M17.6506 2.64713C17.507 2.5155 17.3554 2.39185 17.1998 2.27218C15.72 1.09548 13.8373 0.493164 11.5796 0.493164C8.19705 0.493164 5.42481 1.63796 3.24292 3.9076C1.09294 6.17326 0 9.02528 0 12.4078C0 14.8968 0.781811 16.8554 2.3215 18.2834C3.33466 19.2048 4.55126 19.831 5.95533 20.1621C6.72118 20.3416 7.54288 20.4373 8.42042 20.4373C9.38173 20.4373 10.2952 20.3456 11.1568 20.1621C11.5955 20.0703 12.0223 19.9507 12.4332 19.8151C12.4132 19.7871 12.3973 19.7632 12.3773 19.7353L12.3694 19.7393L12.3494 19.6914C12.3095 19.6196 12.2816 19.5438 12.2577 19.464L11.8987 18.5466H11.8907L10.9693 16.0735C10.375 16.261 9.73674 16.3607 9.05864 16.3607C6.26247 16.3607 4.52732 14.4301 4.52732 11.606C4.52732 9.67545 5.11368 7.99616 6.31831 6.57214C7.52294 5.11622 9.08656 4.39025 10.9613 4.39025C13.7575 4.39025 15.5205 6.32085 15.5205 9.14494C15.5205 11.0755 14.9063 12.7548 13.7016 14.2068C13.4304 14.5299 13.1392 14.8131 12.8321 15.0644H12.856L14.3438 18.4868C14.4475 18.6623 14.4595 18.7899 14.4595 18.8099C14.4675 18.8298 14.4715 18.8498 14.4755 18.8737C15.2852 18.3831 16.0311 17.7808 16.7172 17.0628C16.8807 16.8913 17.0403 16.7157 17.1919 16.5402C19.0586 14.3623 19.992 11.6898 19.992 8.56257C20 6.06157 19.2182 4.07513 17.6506 2.64713Z"
                        fill="#002D67"
                      ></path>
                      <path
                        d="M10.6217 6.56836C9.433 6.56836 8.43579 7.03106 7.67393 7.95248C6.91206 8.85795 6.53711 9.92297 6.53711 11.1475C6.53711 12.9425 7.63803 14.1671 9.41306 14.1671C10.6017 14.1671 11.5989 13.7044 12.3608 12.7989C13.1227 11.8735 13.5136 10.8085 13.5136 9.58392C13.5176 7.79293 12.3967 6.56836 10.6217 6.56836Z"
                        fill="#1BCEC1"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_817_5321">
                        <rect
                          width="20"
                          height="19.9442"
                          fill="white"
                          transform="translate(0 0.493164)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  RZone
                </span>
              </h6>
              <li class="flex items-center text-base">
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
                <span
                  >Unlock a one-of-a-kind trading platform that covers every
                  aspect of technical analysis—from candlestick patterns to
                  noiseless charts, relative strength, breadth reports, sector
                  analysis, and beyond. Designed with cutting-edge innovation,
                  this all-in-one platform empowers traders with deep insights
                  and advanced tools.
                </span>
              </li>
              <li class="flex items-center text-base">
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
                <span
                  >Pre-defined, Custom, Public & Popular Strategy Scanners</span
                >
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-green-500 mr-3 text-base"
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
                <span
                  >Build & Backtest your own strategies - all types of charting
                  methods</span
                >
              </li>
              <li class="flex items-center text-base">
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
                <span
                  >Price, RS, Breadth, Momentum, Reversal, Matrix, Volumes &
                  much more</span
                >
              </li>
              <li class="flex items-center text-base">
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
                <span
                  >Comprehensive Stock Reports, Momentum Scores, DeMAP Charts, &
                  in-depth insights</span
                >
              </li>
              <li class="flex items-center text-base">
                <a
                  href="https://www.definedgesecurities.com/products/rzone/"
                  class="text-blue-500 font-bold flex items-center"
                  id="ts-otp"
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
          </div>
        </div>

        <!-- fundamental Analysis Tab Content -->
        <div
          v-if="activeAnalysisTab === 'fundamentalAnalysisTab'"
          class="w-full md:w-full"
        >
          <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-1/2">
              <img
                src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Radar-1-1-1024x1024.webp"
                alt="App Image"
                class="w-full rounded-lg"
              />
            </div>
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 21 21"
                    fill="none"
                    class="mr-4"
                  >
                    <g clip-path="url(#clip0_817_5309)">
                      <path
                        d="M13.6238 16.9664H11.8875V20.9237H9.71289V10.1182H13.6364C14.8839 10.1182 15.849 10.4005 16.5232 10.9695C17.2018 11.5384 17.5389 12.3433 17.5389 13.3801C17.5389 14.1176 17.383 14.7329 17.0711 15.2259C16.7592 15.719 16.2872 16.1109 15.6509 16.4017L17.935 20.8183V20.9237H15.6003L13.6238 16.9664ZM11.8917 15.1627H13.6491C14.1969 15.1627 14.6184 15.0194 14.9176 14.7371C15.2168 14.4547 15.3685 14.0586 15.3685 13.5613C15.3685 13.0513 15.2252 12.651 14.9429 12.3602C14.6605 12.0694 14.2264 11.9219 13.6406 11.9219H11.8917V15.1627Z"
                        fill="#002D67"
                      ></path>
                      <path
                        d="M1.71074 19.643C1.51688 19.643 1.42838 19.6135 1.40309 19.6008C1.30616 19.407 1.25138 18.3028 2.61682 15.8712C3.90641 13.5828 5.98407 10.953 8.47052 8.46659C13.0852 3.8519 17.4934 1.35701 19.2929 1.35701C19.4868 1.35701 19.5753 1.38651 19.6006 1.39916C19.6975 1.59302 19.7523 2.69717 18.3868 5.12884C17.6704 6.39735 16.7138 7.77544 15.5759 9.17038C16.0521 9.30524 16.482 9.49488 16.8613 9.73931C20.2327 5.51234 21.8426 1.71945 20.5614 0.43829C20.2664 0.143287 19.8324 0 19.2929 0C16.8191 0 12.0696 2.95003 7.50966 7.50993C1.95096 13.0644 -1.214 18.9097 0.438013 20.5617C0.733016 20.8567 1.16709 21 1.71074 21C3.27426 21 5.7565 19.8158 8.5211 17.7929V16.0861C5.51628 18.4124 2.97082 19.643 1.71074 19.643Z"
                        fill="#47C9F3"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_817_5309">
                        <rect width="21" height="21" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Radar
                </span>
              </h6>
              <li class="flex items-center">
                <span
                  >Our comprehensive fundamental analysis tool that offers
                  complete analysis with company valuations, financial ratios,
                  performance metrics and more, all at your fingertips. Access
                  pre-defined and public scanners to find the right investment
                  opportunities as per your needs.</span
                >
              </li>
              <li class="flex items-center">
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
                <span>All Charting Types, Conventional & Noiseless</span>
              </li>
              <li class="flex items-center">
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
                <span>Unique and innovative patterns and indicators</span>
              </li>
              <li class="flex items-center">
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
                <span>Ratio, RS, Straddle, Multi-leg Options Charts</span>
              </li>
              <li class="flex items-center">
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
                <span>Chart-specific Auto Tools for Faster Analysis</span>
              </li>

              <li class="flex items-center text-base">
                <a
                  href="https://www.definedgesecurities.com/products/zone-web-trading-terminal/"
                  class="text-blue-500 font-bold flex items-center"
                  id="ts-otp"
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
          </div>
        </div>

        <!-- options Strategies Analysis Tab  Content -->
        <div
          v-if="activeAnalysisTab === 'optionsStrategiesAnalysisTab'"
          class="w-full md:w-full"
        >
          <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-1/2">
              <img
                src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Optest-2-1-1024x1024.webp"
                alt="App Image"
                class="w-full rounded-lg"
              />
            </div>
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    class="mr-4"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_817_5322)">
                      <path
                        d="M2.61108 14.7185C3.06028 9.41646 7.65735 5.27313 11.8885 4.31613C13.7216 3.9018 15.5727 4.10346 17.4202 4.05213C18.0723 4.0338 18.094 4.01913 17.7789 3.45446C16.6305 1.40846 14.8083 0.352464 12.5768 0.0994638C7.88195 -0.432203 3.79204 1.1738 1.41562 5.28046C-0.931816 9.34313 -0.200053 13.6038 2.40821 17.4941C2.52051 17.6591 2.61108 17.8571 2.8719 17.9451C2.98421 17.7031 2.90089 17.5125 2.85017 17.3108C2.63281 16.4638 2.535 15.5985 2.61108 14.7185Z"
                        fill="#582D82"
                      ></path>
                      <path
                        d="M19.699 4.2166C19.5686 4.04794 19.4853 3.79127 19.1194 3.8426C19.5613 4.8876 19.7388 5.9436 19.6736 7.02894C19.3295 12.7453 13.7398 17.9629 8.05961 17.8823C7.32784 17.8713 7.33146 17.8713 7.51984 17.1563C8.25885 14.3659 8.98699 11.5756 9.74773 8.7926C9.76222 8.74127 9.77309 8.7266 9.78396 8.64594H6.40046C5.35715 9.84127 4.55294 11.0953 4.04577 12.5729C2.80322 16.1883 4.01679 19.4846 7.21554 21.1089C9.38547 22.2089 11.6605 22.1906 13.9536 21.5783C21.4378 19.5799 24.4808 10.3693 19.699 4.2166Z"
                        fill="#582D82"
                      ></path>
                      <path
                        d="M12.4182 15.8725C12.9906 15.5938 13.5412 15.2675 14.0556 14.8862C16.1314 13.3682 17.6275 11.4212 18.3484 8.90217C18.3774 8.80317 18.3991 8.72984 18.4172 8.64551H13.9144C13.3058 10.9922 12.6899 13.2765 12.0813 15.5938C11.9871 15.9422 12.1139 16.0192 12.4182 15.8725Z"
                        fill="#582D82"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_817_5322">
                        <rect width="22" height="22" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  OPTEST
                </span>
              </h6>
              <li class="flex items-center">
                <span
                  >Your options trading journey deserves a product that lets you
                  backtest all your strategies using pre-defined or
                  adjustment-based parameters. Make informed decisions based on
                  real-time data and always stay a step ahead.</span
                >
              </li>
              <li class="flex items-center">
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
                <span>Trade Simulation for Easy Analysis</span>
              </li>
              <li class="flex items-center">
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
                <span
                  >Strategy Backtesting for Intraday, Positional & BTST</span
                >
              </li>
              <li class="flex items-center">
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
                <span>Market Movements Visualization with Price Chart</span>
              </li>
              <li class="flex items-center">
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
                <span>Strategy Optimization with Leg Selection</span>
              </li>

              <li class="flex items-center text-base">
                <a
                  href="https://optest.definedge.com/"
                  class="text-blue-500 font-bold flex items-center"
                  id="ts-otp"
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
          </div>
        </div>

        <!-- Mutual Fund Analysis Tab  Content -->
        <div
          v-if="activeAnalysisTab === 'mutualFundAnalysisTab'"
          class="w-full md:w-full"
        >
          <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-1/2">
              <img
                src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/MFZone-2-1-1024x1024.webp"
                alt="App Image"
                class="w-full rounded-lg"
              />
            </div>
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    class="mr-4"
                    viewBox="0 0 26 12"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_817_5337)">
                      <path
                        d="M10.0018 0H14.7168L13.5205 12H9.89918L10.8082 5.27007L8.35096 12H5.1695L4.78245 5.27007L3.62129 12H0L2.49239 0H7.2074L7.61204 6.45129L10.0018 0Z"
                        fill="#47C9F3"
                      ></path>
                      <path
                        d="M16.6052 0H26.0001L25.5954 2.71378L19.8366 8.76527H24.9034L24.4138 12H14.5996L15.0218 9.20141L20.7807 3.14992H16.1156L16.6052 0Z"
                        fill="#002D67"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_817_5337">
                        <rect width="26" height="12" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  MFZone
                </span>
              </h6>
              <li class="flex items-center">
                <span
                  >Mutual fund investing just got smarter with in-depth analysis
                  of schemes and fund performance. Compare performance of funds
                  and fund managers to dig deep and find investments that fit
                  your financial goals.</span
                >
              </li>
              <li class="flex items-center">
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
                <span>Comprehensive Mutual Fund Analysis</span>
              </li>
              <li class="flex items-center">
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
                <span>Invest Lumpsum or via SIP</span>
              </li>
              <li class="flex items-center">
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
                <span>Track which Sectors witnessing Buying/Selling</span>
              </li>
              <li class="flex items-center">
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
                <span>Stocks Attracting Mutual Fund Managers</span>
              </li>
              <li class="flex items-center">
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
                <span>Common Held Companies</span>
              </li>

              <li class="flex items-center text-base">
                <a
                  href="https://www.definedgesecurities.com/products/mfzone/"
                  class="text-blue-500 font-bold flex items-center"
                  id="ts-otp"
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
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- EDUCATION -->
  <section
    class="relative text-black flex justify-center items-center pt-12"
    style="
      background-color: transparent;
      background-image: linear-gradient(312deg, #1e50d14d 0%, #31c19d4d 100%);
    "
  >
    <div class="max-w-screen-xl mx-auto px-4">
      <!-- EDUCATION Title -->
      <h2
        class="text-[#005BDF] text-center font-liter text-[24px] md:text-lg lg:text-xl xl:text-2xl"
      >
        EDUCATION
      </h2>
      <h5 class="text-gray-700 text-center text-3xl font-extrabold mt-4">
        Ecosystem of Transformative Education
      </h5>

      <!-- Tabs Container -->
      <div class="flex flex-wrap justify-center mt-8 mb-6 gap-4">
        <!-- Tab Buttons -->
        <button
          @click="activeEducationTab = 'currentBooksTab'"
          :class="{
            'border-b-2 border-blue-500 bg-white text-gray-800':
              activeEducationTab === 'currentBooksTab',
            'bg-gray-100 border-blue-500 text-gray-700':
              activeEducationTab !== 'currentBooksTab',
          }"
          class="tab-btn flex-1 min-w-[150px] px-4 py-2 text-[13px] sm:text-sm md:text-sm lg:text-xl rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
          Curated Books
        </button>
        <button
          @click="activeEducationTab = 'educationalVideoTab'"
          :class="{
            'border-b-2 border-blue-500 bg-white text-gray-800':
              activeEducationTab === 'educationalVideoTab',
            'bg-gray-100 border-blue-500 text-gray-700':
              activeEducationTab !== 'educationalVideoTab',
          }"
          class="tab-btn flex-1 min-w-[150px] px-4 py-2 text-[13px] sm:text-sm md:text-sm lg:text-xl rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
          Educational Videos
        </button>
        <button
          @click="activeEducationTab = 'LibraryTab'"
          :class="{
            'border-b-2 border-blue-500 bg-white text-gray-800':
              activeEducationTab === 'LibraryTab',
            'bg-gray-100 border-blue-500 text-gray-700':
              activeEducationTab !== 'LibraryTab',
          }"
          class="tab-btn flex-1 min-w-[150px] px-4 py-2 text-[13px] sm:text-sm md:text-sm lg:text-xl rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
          Library
        </button>
        <button
          @click="activeEducationTab = 'GurukulTab'"
          :class="{
            'border-b-2 border-blue-500 bg-white text-gray-800':
              activeEducationTab === 'GurukulTab',
            'bg-gray-100 border-blue-500 text-gray-700':
              activeEducationTab !== 'GurukulTab',
          }"
          class="tab-btn flex-1 min-w-[150px] px-4 py-2 text-[13px] sm:text-sm md:text-sm lg:text-xl rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
        >
          Online Courses
        </button>
      </div>

      <!-- Tab Content -->
      <div class="flex items-center justify-center space-x-12">
        <!-- Current Books Tab Content -->
        <div
          v-if="activeEducationTab === 'currentBooksTab'"
          class="w-full md:w-full px-6"
        >
          <div class="flex flex-wrap justify-between">
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    class="mr-4"
                    viewBox="0 0 19 15"
                    fill="none"
                  >
                    <path
                      d="M13.0678 6.86837L0.1875 5.03443L5.92893 0L18.8092 1.83394L13.0678 6.86837Z"
                      fill="#00D9A4"
                    ></path>
                    <path
                      d="M13.0718 9.13942C13.0623 9.13942 13.0528 9.13942 13.0457 9.13705L0.165465 7.30311C0.0610752 7.28888 -0.0124721 7.1916 0.00176289 7.08484C0.0159979 6.98045 0.11327 6.9069 0.220032 6.92114L13.0125 8.74321L18.6875 3.76572C18.7682 3.69455 18.8892 3.70404 18.958 3.7847C19.0292 3.86537 19.0197 3.98636 18.939 4.05517L13.1976 9.0896C13.1644 9.12281 13.1193 9.13942 13.0718 9.13942Z"
                      fill="#00D9A4"
                    ></path>
                    <path
                      d="M13.0718 11.6873C13.0623 11.6873 13.0528 11.6873 13.0457 11.6849L0.165465 9.85096C0.0610752 9.83673 -0.0124721 9.73945 0.00176289 9.63269C0.0159979 9.5283 0.11327 9.45476 0.220032 9.46899L13.0125 11.2911L18.6875 6.31357C18.7682 6.2424 18.8892 6.25189 18.958 6.33255C19.0292 6.41322 19.0197 6.53422 18.939 6.60302L13.1976 11.6374C13.1644 11.6707 13.1193 11.6873 13.0718 11.6873Z"
                      fill="#00D9A4"
                    ></path>
                    <path
                      d="M13.0718 14.2361C13.0623 14.2361 13.0528 14.2361 13.0457 14.2337L0.165465 12.3998C0.0610752 12.3856 -0.0124721 12.2883 0.00176289 12.1815C0.0159979 12.0771 0.11327 12.0012 0.220032 12.0178L13.0125 13.8399L18.6875 8.8624C18.7682 8.79123 18.8892 8.80072 18.958 8.88138C19.0292 8.96205 19.0197 9.08304 18.939 9.15185L13.1999 14.1886C13.1644 14.2195 13.1193 14.2361 13.0718 14.2361Z"
                      fill="#00D9A4"
                    ></path>
                  </svg>
                  Shelf
                </span>
              </h6>
              <li class="flex items-center text-base">
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
                <span
                  >Explore our treasure trove of free eBooks covering a wide
                  range of trading and investing concepts—basics to advanced
                  strategies.</span
                >
              </li>
              <li class="flex items-center text-base">
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
                <span>Master Investing & Trading from the ground up</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-green-500 mr-3 text-base"
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
                <span>Gain Practical Insights to sharpen your skills</span>
              </li>
              <li class="flex items-center text-base">
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
                <span>Discover Proven Technical Strategies</span>
              </li>
              <li class="flex items-center text-base">
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
                <span>Explore Unique & Innovative Concepts</span>
              </li>
              <li class="flex items-center text-base">
                <span>Start your learning journey today—absolutely free! </span>
              </li>
              <li class="flex items-center text-base">
                <a
                  href="https://www.definedgesecurities.com/products/shelf/"
                  class="text-blue-500 font-bold flex items-center"
                  id="ts-otp"
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

            <div class="w-full md:w-1/2">
              <img
                src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/SHELF-1-1024x1024.webp"
                alt="App Image"
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <!-- Educational Video Tab Content -->
        <div
          v-if="activeEducationTab === 'educationalVideoTab'"
          class="w-full md:w-full px-6"
        >
          <div class="flex flex-wrap justify-between">
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    class="mr-4"
                    viewBox="0 0 19 21"
                    fill="none"
                  >
                    <path
                      d="M5.62529 20.8483C5.36672 20.8483 5.1582 20.6398 5.1582 20.3812V4.8423C5.1582 4.67131 5.24995 4.51701 5.39592 4.4336C5.54188 4.35019 5.72538 4.35436 5.86717 4.44611L18.3784 12.2156C18.516 12.299 18.5994 12.4491 18.5994 12.6118C18.5994 12.7744 18.516 12.9204 18.3825 13.0079L8.86986 19.005C8.72806 19.0967 8.54457 19.1009 8.39443 19.0175C8.2443 18.9341 8.15255 18.7798 8.15255 18.6088V10.5808C8.15255 10.3222 8.36107 10.1137 8.61963 10.1137C8.8782 10.1137 9.08672 10.3222 9.08672 10.5808V17.7664L17.2565 12.6159L6.0882 5.68055V20.3812C6.0882 20.6398 5.87968 20.8483 5.62529 20.8483Z"
                      fill="#0547DB"
                    ></path>
                    <path
                      d="M3.01937 5.20825C3.29044 5.19991 3.51148 5.4126 3.52399 5.6795C3.51565 5.95058 3.29044 6.1591 3.01937 6.15493H0.504618C0.233542 6.1591 0.0083408 5.95058 0 5.6795C0.0083408 5.40843 0.233542 5.19991 0.504618 5.20825H3.01937Z"
                      fill="#0547DB"
                    ></path>
                    <path
                      d="M5.53906 0.471497C5.5474 0.200421 5.7726 -0.00809909 6.04368 0.000241709C6.31476 -0.00809909 6.53579 0.204591 6.5483 0.471497V2.84028C6.53996 3.11136 6.31476 3.31988 6.04368 3.31154C5.7726 3.31988 5.55157 3.10719 5.53906 2.84028V0.471497Z"
                      fill="#0547DB"
                    ></path>
                    <path
                      d="M1.76938 2.33145C1.58588 2.1563 1.57754 1.8602 1.75687 1.6767C1.76104 1.67253 1.76521 1.66836 1.76938 1.66419C1.96956 1.47652 2.28234 1.47652 2.48252 1.66419L4.26328 3.33652C4.44678 3.51585 4.45512 3.80777 4.27579 3.99127C4.27162 3.99544 4.26745 3.99961 4.26328 4.00378C4.0631 4.18728 3.75032 4.18728 3.55014 4.00378L1.76938 2.33145Z"
                      fill="#0547DB"
                    ></path>
                    <path
                      d="M8.5373 4.00802C8.33712 4.19152 8.02851 4.19152 7.82416 4.00802C7.64067 3.83703 7.62815 3.54927 7.79497 3.36578C7.80331 3.35744 7.81165 3.3491 7.82416 3.33658L9.60492 1.66008C9.8051 1.47659 10.1137 1.47659 10.3181 1.66008C10.5016 1.83107 10.5141 2.11883 10.3473 2.30233C10.3389 2.31067 10.3306 2.31901 10.3181 2.33152L8.5373 4.00802Z"
                      fill="#0547DB"
                    ></path>
                    <path
                      d="M2.48252 9.70111C2.28234 9.88461 1.96956 9.88461 1.76938 9.70111C1.58588 9.52179 1.57754 9.22986 1.75687 9.04636C1.76104 9.04219 1.76521 9.03802 1.76938 9.03385L3.55848 7.35735C3.75866 7.17385 4.06727 7.17385 4.27162 7.35735C4.45512 7.52834 4.46763 7.81609 4.30081 7.99959C4.29247 8.00793 4.28413 8.01627 4.27162 8.02878L2.48252 9.70111Z"
                      fill="#0547DB"
                    ></path>
                  </svg>
                  Insight
                </span>
              </h6>
              <li class="flex items-center">
                <span
                  >If you learn best through videos, our free video library is
                  perfect for you! Gain access to expert-led sessions covering
                  various trading styles, effective strategies, market insights,
                  and trading psychology.</span
                >
              </li>
              <li class="flex items-center">
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
                <span>Comprehensive Video Library – Absolutely free</span>
              </li>
              <li class="flex items-center">
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
                <span
                  >20+ Categories covering all aspects of trading &
                  investing</span
                >
              </li>
              <li class="flex items-center">
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
                <span>Innovative Concepts Explained Simply</span>
              </li>
              <li class="flex items-center">
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
                <span>Exclusive Research-Backed Weekly Newsletters</span>
              </li>
              <li class="flex items-center">
                <span
                  >Start watching and enhance your investing and trading today!
                  🚀</span
                >
              </li>

              <li class="flex items-center text-base">
                <a
                  href="https://www.definedgesecurities.com/products/insight/"
                  class="text-blue-500 font-bold flex items-center"
                  id="ts-otp"
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
            <div class="w-full md:w-1/2">
              <img
                src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/INSIGHT-1024x1024.webp"
                alt="App Image"
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <!-- Library Tab Content -->
        <div
          v-if="activeEducationTab === 'LibraryTab'"
          class="w-full md:w-full px-6"
        >
          <div class="flex flex-wrap justify-between">
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 50 50"
                    width="45"
                    height="45"
                    class="mr-4"
                  >
                    <path
                      class="st0"
                      d="M7.28,43.63v-3.23h2.51v-18.22h-2.51v-7.74h-1.85v7.74h-2.51v18.22h2.51v3.23h1.85ZM4.79,38.54v-14.49h3.14v14.48h-3.14Z"
                    ></path>
                    <path
                      class="st0"
                      d="M25.79,20.48v-2.33h2.51V5.03h-2.51v-1.38h-1.85v1.39h-2.51v13.11h2.51v2.34h1.85ZM23.3,16.27V6.91h3.14v9.37h-3.14Z"
                    ></path>
                    <polygon
                      class="st0"
                      points="35.05 33.63 35.05 28.99 37.56 28.99 37.56 10.55 35.05 10.55 35.05 6.73 33.2 6.73 33.2 10.55 30.69 10.55 30.69 28.99 33.2 28.99 33.2 33.63 35.05 33.63"
                    ></polygon>
                    <polygon
                      class="st0"
                      points="14.69 8.26 14.69 15.25 12.18 15.25 12.18 33.47 19.06 33.47 19.06 15.25 16.55 15.25 16.55 8.26 14.69 8.26"
                    ></polygon>
                    <path
                      class="st0"
                      d="M6.66,11.29c3.01,0,5.57-1.86,8.28-3.82,3.05-2.2,6.2-4.48,10.31-4.48,6.32,0,9.57,3.11,12.71,6.13,2.77,2.65,5.39,5.16,9.69,5.16h.35v-1.87h-.35c-3.55,0-5.79-2.15-8.39-4.63-3.26-3.12-6.95-6.65-14.01-6.65-4.7,0-8.26,2.57-11.41,4.84-2.47,1.78-4.8,3.46-7.19,3.46-1.19,0-2.9-1.69-3.69-2.76l-.2-.3-1.51,1.12.22.29c.63.82,2.86,3.51,5.19,3.51Z"
                    ></path>
                    <path
                      class="st0"
                      d="M48.24,32.12l-.19-.29-.31.17c-.08.04-.4.22-.91.47v-7.27h-6.88v9.77c-.56.12-1.11.21-1.64.27-1.22.14-2.31-.15-3.72-.53-1.76-.48-3.94-1.07-7.26-.98-5.18.16-9.05,4.52-12.47,8.37-2.15,2.42-4.37,4.93-6.02,4.93-3.13,0-6.11-3-6.24-3.12l-.25-.25-1.35,1.28.24.25s3.54,3.69,7.59,3.69c2.49,0,4.77-2.57,7.43-5.56,3.16-3.56,6.75-7.6,11.12-7.73,3.02-.1,4.97.44,6.74.92,1.51.41,2.82.76,4.4.58.44-.05.9-.12,1.44-.22v2.96h6.88v-5.28c.9-.42,1.54-.77,1.83-.92l.33-.17-.76-1.34ZM44.96,35.36v2.6h-3.14v-1.53c1.01-.28,2.06-.64,3.14-1.07ZM41.83,34.48v-7.4h3.14v6.26c-1.09.46-2.15.84-3.14,1.14Z"
                    ></path>
                  </svg>
                  Library
                </span>
              </h6>

              <li class="flex items-center">
                <span
                  >Dive into a comprehensive collection of technical and
                  fundamental concepts. The Definedge Library is your go-to
                  resource for mastering technical patterns, indicators, and
                  fundamental analysis.</span
                >
              </li>

              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span>Discover Rare & Hidden Patterns explained in detail</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span>Quick Reference Guide for instant insights</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span
                  >Concise, Actionable Write-ups with real-world
                  applications</span
                >
              </li>

              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span>Innovative Research & Cutting-Edge Concepts</span>
              </li>
              <li class="flex items-center">
                <span>Elevate your investing and trading knowledge today!</span>
              </li>
              <li class="flex items-center text-base">
                <a
                  href="https://www.definedgesecurities.com/patterns-indicators/"
                  class="text-blue-500 font-bold flex items-center"
                  id="ts-otp"
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
            <div class="w-full md:w-1/2">
              <img
                src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/LIBRARY-1024x1024.webp"
                alt="App Image"
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <!-- Gurukul Tab Content -->
        <div
          v-if="activeEducationTab === 'GurukulTab'"
          class="w-full md:w-full px-6"
        >
          <div class="flex flex-wrap justify-between">
            <ul class="space-y-4 text-lg w-full md:w-1/2">
              <h6 class="text-xl font-extrabold mb-4 text-left">
                <span class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    class="mr-4"
                    viewBox="0 0 16 21"
                    fill="none"
                  >
                    <path
                      d="M5.77869 0.0245902C5.55328 0.00819672 5.31557 0 5.05738 0C4.80328 0 4.56557 0.00819672 4.34016 0.0245902L4.14754 0.0368852V5.42623H5.97131V1.86885C9.83197 2.2541 13.0123 5.01639 13.9262 8.81147C14.0943 9.5041 14.1803 10.2213 14.1803 10.9467C14.1803 11.541 14.123 12.127 14.0082 12.7049C13.9877 12.8279 13.959 12.9467 13.9262 13.0779C13.7541 13.8074 13.4877 14.5164 13.127 15.1967C12.8443 15.8197 12.459 16.3893 11.9754 16.8811L11.9426 16.918L11.9385 16.9262C10.8156 18.0574 9.32377 18.6803 7.7377 18.6803C6.38115 18.6803 5.11066 18.2336 4.05328 17.3893C2.63525 16.2623 1.82377 14.5738 1.82377 12.7664C1.82377 12.6639 1.82787 12.5656 1.83197 12.4467C1.83197 12.0697 1.88934 11.7008 2 11.3443L2.0123 11.3115C2.37705 10.168 3.27459 9.26229 4.42213 8.88934C4.79098 8.76639 5.18443 8.70492 5.57787 8.70492C5.63525 8.70492 5.70082 8.70902 5.7582 8.70902C7.40984 8.78689 8.79098 9.92213 9.20082 11.5082H4.14344V13.332H11.0656L11.0902 13.1557C11.123 12.9262 11.1352 12.6967 11.1352 12.4467C11.1352 12.1803 11.1189 11.9262 11.082 11.6844C10.7172 9.0041 8.48361 6.98361 5.77869 6.88934C5.66803 6.87705 5.53689 6.87705 5.44672 6.88525C5.05738 6.89344 4.67623 6.94262 4.30328 7.02869C2.38934 7.47131 0.840164 8.91393 0.258197 10.7869C0.25 10.8074 0.245902 10.832 0.237705 10.8648C0.110656 11.3566 0.0368852 11.8648 0.0122951 12.3811V12.4057C0.0122951 12.418 0.0122951 12.4344 0.0122951 12.4426C0.00409836 12.5369 0 12.6516 0 12.7582C0 16.5082 2.67623 19.709 6.35656 20.3689C6.80328 20.4508 7.26639 20.4918 7.7377 20.4918C9.86475 20.4918 11.8525 19.6475 13.332 18.0984C13.8934 17.4508 14.3811 16.7377 14.7705 15.9795C15.5738 14.4344 16 12.6885 16 10.9426C16 5.19262 11.5082 0.393443 5.77869 0.0245902Z"
                      fill="#1681C4"
                    ></path>
                  </svg>
                  Gurukul
                </span>
              </h6>
              <li class="flex items-center">
                <span
                  >Step into the world of expert-led, self-paced courses
                  designed to elevate your trading and investing skills. Got
                  questions? Our experts are here to guide you in live Q&A
                  sessions.</span
                >
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span
                  >Exclusive, Well-Researched Strategies to refine your
                  approach</span
                >
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span>Learn at Your Own Pace with structured courses</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span>Gain Practical Insights for real-world application</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 text-blue-900 mr-3"
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
                <span>Live Q&A Sessions to get expert guidance</span>
              </li>
              <li class="flex items-center">
                <span>Start your journey to smarter trading!</span>
              </li>
              <li class="flex items-center text-base">
                <a
                  href="https://gurukul.definedgesecurities.com/"
                  class="text-blue-500 font-bold flex items-center"
                  id="ts-otp"
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
            <div class="w-full md:w-1/2 mt-8">
              <img
                src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/GURUKUL-3-1024x1024.webp"
                alt="App Image"
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Invest & Trade with Ease -->
  <section class="container mx-auto px-4 py-24">
    <div class="flex lg:px-28 flex-col md:flex-row">
      <!-- Left Side Content -->
      <div class="flex-1 mb-8 md:mb-0">
        <h2 class="text-3xl font-bold mb-4">Invest & Trade with Ease</h2>
        <p class="text-base mb-6">
          A Definedge Securities demat and trading account opens endless
          possibilities for you. Make smarter decisions and invest or trade in
          any segment of your choice with our trading tools & education.
        </p>

        <div class="flex flex-wrap gap-4">
          <!-- Equity -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%]"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600"
                  width="35"
                  viewBox="0 0 64 64"
                >
                  <g id="Dypta">
                    <g>
                      <g>
                        <g>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M52.21,55.02H5.05c-2.79,0-5.05-2.27-5.05-5.05V14.04c0-2.79,2.27-5.05,5.05-5.05h30.32c.93,0,1.68.75,1.68,1.68s-.75,1.68-1.68,1.68H5.05c-.93,0-1.68.76-1.68,1.68v35.93c0,.93.76,1.68,1.68,1.68h47.16c.93,0,1.68-.76,1.68-1.68v-14.6c0-.93.75-1.68,1.68-1.68s1.68.75,1.68,1.68v14.6c0,2.79-2.27,5.05-5.05,5.05Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M36.49,64c-.85,0-1.58-.64-1.67-1.5l-.98-8.98c-.1-.92.57-1.76,1.49-1.86.91-.09,1.76.57,1.86,1.49l.98,8.98c.1.92-.57,1.76-1.49,1.86-.06,0-.12,0-.19,0Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M20.77,64c-.06,0-.12,0-.19,0-.92-.1-1.59-.93-1.49-1.86l.98-8.98c.1-.92.93-1.58,1.86-1.49.92.1,1.59.93,1.49,1.86l-.98,8.98c-.09.86-.82,1.5-1.67,1.5Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M44.35,64H12.91c-.93,0-1.68-.75-1.68-1.68s.75-1.68,1.68-1.68h31.44c.93,0,1.68.75,1.68,1.68s-.75,1.68-1.68,1.68Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M48.84,48.28H8.42c-.93,0-1.68-.75-1.68-1.68v-29.19c0-.93.75-1.68,1.68-1.68s1.68.75,1.68,1.68v27.51h38.74c.93,0,1.68.75,1.68,1.68s-.75,1.68-1.68,1.68Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M8.42,43.79c-.47,0-.95-.2-1.28-.59-.61-.71-.52-1.77.18-2.38l7.86-6.74c.59-.5,1.45-.54,2.08-.09l6.62,4.73,6.85-7.83c.58-.66,1.57-.77,2.28-.24l7.94,5.95,4.6-3.68c.73-.58,1.79-.46,2.37.26.58.73.46,1.79-.26,2.37l-5.61,4.49c-.6.48-1.45.49-2.06.03l-7.73-5.8-6.83,7.81c-.57.65-1.54.77-2.25.26l-6.79-4.85-6.86,5.88c-.32.27-.71.41-1.1.41Z"
                          ></path>
                        </g>
                        <path
                          fill="currentColor"
                          class="cls-1"
                          d="M58.95,0h-20.21c-2.79,0-5.05,2.27-5.05,5.05v13.09l7.3-6.49c.67-.59,1.68-.56,2.31.07l5.55,5.55,3.79-3.79h-1.55c-.93,0-1.68-.75-1.68-1.68s.75-1.68,1.68-1.68h5.61c.93,0,1.68.75,1.68,1.68v5.61c0,.93-.75,1.68-1.68,1.68s-1.68-.75-1.68-1.68v-1.55l-4.98,4.98c-.66.66-1.72.66-2.38,0l-5.61-5.61-8.35,7.43v2.61c0,2.79,2.27,5.05,5.05,5.05h20.21c2.79,0,5.05-2.27,5.05-5.05V5.05c0-2.79-2.27-5.05-5.05-5.05Z"
                        ></path>
                      </g>
                      <path
                        fill="currentColor"
                        class="cls-2"
                        d="M23.77,20.55l-.49,1.77h-1.43c-.14.88-.53,1.61-1.15,2.19-.63.57-1.55.93-2.77,1.08l-.08.02,4.23,5.2v.12h-2.76l-4.69-5.64-.02-1.48h2.34c.66,0,1.19-.13,1.6-.4.41-.26.69-.63.83-1.09h-4.96l.49-1.77h4.41c-.15-.4-.43-.71-.82-.94-.39-.23-.91-.34-1.55-.34h-2.53l.52-2.06h8.83l-.49,1.79h-2.03c.31.44.52.96.62,1.55h1.9Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </span>
            <h5 class="text-lg font-semibold">Equity</h5>
          </div>

          <!-- Commodities -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%]"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600"
                  width="35"
                  viewBox="0 0 64 64"
                >
                  <g id="Dypta">
                    <g>
                      <g>
                        <g>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M28.63,57.26C12.84,57.26,0,44.42,0,28.63S12.84,0,28.63,0c7.65,0,14.84,2.98,20.24,8.39.66.66.66,1.72,0,2.38s-1.72.66-2.38,0c-4.77-4.77-11.12-7.4-17.86-7.4C14.7,3.37,3.37,14.7,3.37,28.63s11.33,25.26,25.26,25.26c.71,0,1.42-.03,2.11-.09.91-.06,1.74.61,1.82,1.54.08.93-.61,1.74-1.54,1.82-.78.06-1.59.1-2.38.1Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M55.04,35.65c-.12,0-.23-.01-.35-.04-.91-.19-1.49-1.08-1.3-1.99.33-1.6.5-3.28.5-4.99,0-4.08-.94-7.97-2.8-11.58-.43-.83-.1-1.84.72-2.27.83-.42,1.84-.1,2.27.72,2.08,4.03,3.17,8.57,3.17,13.12,0,1.94-.19,3.86-.58,5.68-.17.79-.87,1.34-1.65,1.34Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M28.63,48.28c-10.83,0-19.65-8.81-19.65-19.65S17.8,8.98,28.63,8.98c8.51,0,16.02,5.43,18.67,13.51.29.88-.19,1.84-1.07,2.12-.88.29-1.84-.19-2.12-1.07-2.2-6.69-8.42-11.19-15.47-11.19-8.98,0-16.28,7.3-16.28,16.28s7.3,16.28,16.28,16.28c2.3,0,4.5-.46,6.56-1.38.85-.38,1.84,0,2.22.85.38.85,0,1.84-.85,2.22-2.49,1.11-5.15,1.67-7.93,1.67Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M47.69,11.26h-6.35c-.93,0-1.68-.75-1.68-1.68s.75-1.68,1.68-1.68h4.2l-1.06-4.26c-.23-.9.32-1.82,1.22-2.04.9-.23,1.82.32,2.04,1.22l1.59,6.35c.13.5.01,1.04-.31,1.45-.32.41-.81.65-1.33.65Z"
                          ></path>
                        </g>
                        <path
                          fill="currentColor"
                          class="cls-1"
                          d="M49.78,27.23c-.57-.38-1.3-.38-1.87,0-.58.39-14.22,9.62-14.22,21.61,0,8.36,6.8,15.16,15.16,15.16s15.16-6.8,15.16-15.16c0-11.99-13.64-21.23-14.22-21.61ZM55.9,44.72c-.25.13-.52.19-.78.19-.61,0-1.19-.33-1.49-.9-.88-1.67-2.15-3.43-3.79-5.22-.63-.69-.58-1.75.11-2.38.69-.62,1.75-.58,2.38.11,1.83,2.01,3.27,4,4.28,5.92.43.82.12,1.84-.71,2.27Z"
                        ></path>
                      </g>
                      <path
                        fill="currentColor"
                        class="cls-2"
                        d="M34.95,24.68l-.7,2.55h-2.06c-.2,1.28-.76,2.33-1.67,3.16-.91.83-2.25,1.35-4.01,1.56l-.12.03,6.12,7.51v.17h-3.99l-6.78-8.15-.03-2.14h3.38c.95,0,1.72-.19,2.31-.57.59-.38.99-.9,1.2-1.57h-7.17l.71-2.55h6.37c-.22-.58-.61-1.03-1.18-1.36-.56-.33-1.31-.49-2.24-.49h-3.66l.76-2.98h12.77l-.7,2.58h-2.94c.45.63.75,1.39.89,2.25h2.75Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </span>
            <h5 class="text-lg font-semibold">Commodities</h5>
          </div>

          <!-- ETFs -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%]"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600"
                  width="35"
                  viewBox="0 0 64 64"
                >
                  <g id="Dypta">
                    <g>
                      <g>
                        <g>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M55.58,64c-4.64,0-8.42-3.78-8.42-8.42V19.65c0-.93.75-1.68,1.68-1.68s1.68.75,1.68,1.68v30.88h1.68c.93,0,1.68-.76,1.68-1.68V11.79c0-2.79,2.27-5.05,5.05-5.05s5.05,2.27,5.05,5.05v43.79c0,4.64-3.78,8.42-8.42,8.42ZM50.53,53.89v1.68c0,2.79,2.27,5.05,5.05,5.05s5.05-2.27,5.05-5.05V11.79c0-.93-.76-1.68-1.68-1.68s-1.68.76-1.68,1.68v37.05c0,2.79-2.27,5.05-5.05,5.05h-1.68Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M55.58,64H8.42c-4.64,0-8.42-3.78-8.42-8.42v-29.19c0-.93.75-1.68,1.68-1.68s1.68.75,1.68,1.68v29.19c0,2.79,2.27,5.05,5.05,5.05h47.16c.93,0,1.68.75,1.68,1.68s-.75,1.68-1.68,1.68Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M58.95,10.11h-10.11c-.93,0-1.68-.75-1.68-1.68s.75-1.68,1.68-1.68h10.11c.93,0,1.68.75,1.68,1.68s-.75,1.68-1.68,1.68Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M43.23,29.19h-13.47c-.93,0-1.68-.75-1.68-1.68s.75-1.68,1.68-1.68h13.47c.93,0,1.68.75,1.68,1.68s-.75,1.68-1.68,1.68Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M43.23,35.93h-13.47c-.93,0-1.68-.75-1.68-1.68s.75-1.68,1.68-1.68h13.47c.93,0,1.68.75,1.68,1.68s-.75,1.68-1.68,1.68Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M43.23,42.67h-13.47c-.93,0-1.68-.75-1.68-1.68s.75-1.68,1.68-1.68h13.47c.93,0,1.68.75,1.68,1.68s-.75,1.68-1.68,1.68Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M43.23,56.14H7.3c-.93,0-1.68-.75-1.68-1.68v-6.74c0-.93.75-1.68,1.68-1.68h35.93c.93,0,1.68.75,1.68,1.68v6.74c0,.93-.75,1.68-1.68,1.68ZM8.98,52.77h32.56v-3.37H8.98v3.37Z"
                          ></path>
                        </g>
                        <path
                          fill="currentColor"
                          class="cls-1"
                          d="M45.47,0H5.05C2.27,0,0,2.27,0,5.05v14.6c0,.93.75,1.68,1.68,1.68h47.16c.45,0,.88-.18,1.19-.49s.49-.74.49-1.19V5.05c0-2.79-2.27-5.05-5.05-5.05ZM18.53,6.18h13.47c.93,0,1.68.75,1.68,1.68s-.75,1.68-1.68,1.68h-13.47c-.93,0-1.68-.75-1.68-1.68s.75-1.68,1.68-1.68ZM39.86,15.16H10.67c-.93,0-1.68-.75-1.68-1.68s.75-1.68,1.68-1.68h29.19c.93,0,1.68.75,1.68,1.68s-.75,1.68-1.68,1.68Z"
                        ></path>
                      </g>
                      <path
                        fill="currentColor"
                        class="cls-2"
                        d="M22.23,29.94l-.56,2.03h-1.64c-.16,1.01-.6,1.85-1.32,2.51-.72.66-1.78,1.07-3.18,1.24l-.1.02,4.85,5.96v.14h-3.16l-5.38-6.47-.02-1.7h2.68c.75,0,1.36-.15,1.84-.45.47-.3.79-.72.95-1.24h-5.69l.56-2.03h5.05c-.18-.46-.49-.82-.94-1.08-.45-.26-1.04-.39-1.78-.39h-2.9l.6-2.36h10.13l-.56,2.05h-2.33c.36.5.59,1.1.71,1.78h2.18Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </span>
            <h5 class="text-lg font-semibold">ETFs</h5>
          </div>

          <!--Mutual Funds -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%]"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600"
                  width="35"
                  viewBox="0 0 64 64"
                >
                  <g id="Dypta">
                    <g>
                      <g>
                        <g>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M55.58,37.05c-.93,0-1.68-.75-1.68-1.68V10.32c0-.74-.6-1.34-1.34-1.34h-26.45c-.93,0-1.68-.75-1.68-1.68s.75-1.68,1.68-1.68h26.45c2.59,0,4.71,2.11,4.71,4.71v25.05c0,.93-.75,1.68-1.68,1.68Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M28.63,57.26H10.32c-2.59,0-4.7-2.11-4.7-4.71v-26.45c0-.93.75-1.68,1.68-1.68s1.68.75,1.68,1.68v26.45c0,.74.6,1.34,1.34,1.34h18.31c.93,0,1.68.75,1.68,1.68s-.75,1.68-1.68,1.68Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M15.16,30.32C6.8,30.32,0,23.52,0,15.16S6.8,0,15.16,0s15.16,6.8,15.16,15.16-6.8,15.16-15.16,15.16ZM15.16,3.37c-6.5,0-11.79,5.29-11.79,11.79s5.29,11.79,11.79,11.79,11.79-5.29,11.79-11.79S21.66,3.37,15.16,3.37Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M12.91,48.28c-.24,0-.49-.05-.72-.16-.84-.4-1.2-1.4-.8-2.24.11-.22,10.87-22.3,37.45-22.3.93,0,1.68.75,1.68,1.68s-.75,1.68-1.68,1.68c-24.4,0-34.01,19.54-34.41,20.37-.29.61-.89.96-1.52.96Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M45.47,31.44c-.35,0-.71-.11-1.01-.34-.74-.56-.89-1.61-.34-2.36l2.36-3.14-3.14-2.36c-.74-.56-.89-1.61-.34-2.36.56-.74,1.61-.89,2.36-.34l4.49,3.37c.74.56.89,1.61.34,2.36l-3.37,4.49c-.33.44-.84.67-1.35.67Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M27.51,49.96c-.43,0-.86-.16-1.19-.49l-4.49-4.49c-.66-.66-.66-1.72,0-2.38s1.72-.66,2.38,0l4.49,4.49c.66.66.66,1.72,0,2.38-.33.33-.76.49-1.19.49Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M23.02,49.96c-.43,0-.86-.16-1.19-.49-.66-.66-.66-1.72,0-2.38l4.49-4.49c.66-.66,1.72-.66,2.38,0s.66,1.72,0,2.38l-4.49,4.49c-.33.33-.76.49-1.19.49Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M37.61,21.33c-2.79,0-5.05-2.27-5.05-5.05s2.27-5.05,5.05-5.05,5.05,2.27,5.05,5.05-2.27,5.05-5.05,5.05ZM37.61,14.6c-.93,0-1.68.76-1.68,1.68s.76,1.68,1.68,1.68,1.68-.76,1.68-1.68-.76-1.68-1.68-1.68Z"
                          ></path>
                        </g>
                        <path
                          fill="currentColor"
                          class="cls-1"
                          d="M58.95,33.68h-20.21c-2.79,0-5.05,2.27-5.05,5.05v13.09l7.3-6.49c.66-.59,1.68-.56,2.31.07l5.55,5.55,3.79-3.79h-1.55c-.93,0-1.68-.75-1.68-1.68s.75-1.68,1.68-1.68h5.61c.93,0,1.68.75,1.68,1.68v5.61c0,.93-.75,1.68-1.68,1.68s-1.68-.75-1.68-1.68v-1.55l-4.98,4.98c-.66.66-1.72.66-2.38,0l-5.61-5.61-8.35,7.43v2.61c0,2.79,2.27,5.05,5.05,5.05h20.21c2.79,0,5.05-2.27,5.05-5.05v-20.21c0-2.79-2.27-5.05-5.05-5.05Z"
                        ></path>
                      </g>
                      <path
                        fill="currentColor"
                        class="cls-2"
                        d="M20.52,11.13l-.56,2.03h-1.64c-.16,1.01-.6,1.85-1.32,2.51-.72.66-1.78,1.07-3.18,1.24l-.1.02,4.85,5.96v.14h-3.16l-5.38-6.47-.02-1.7h2.68c.75,0,1.36-.15,1.84-.45.47-.3.79-.72.95-1.24h-5.69l.56-2.03h5.05c-.18-.46-.49-.82-.94-1.08-.45-.26-1.04-.39-1.78-.39h-2.9l.6-2.36h10.13l-.56,2.05h-2.33c.36.5.59,1.1.71,1.78h2.18Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </span>
            <h5 class="text-lg font-semibold">Mutual Funds</h5>
          </div>
          <!-- F&O -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%]"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600"
                  width="35"
                  viewBox="0 0 64 64"
                >
                  <g id="Dypta">
                    <g>
                      <g>
                        <g>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M32,14.6c-.43,0-.86-.16-1.19-.49-.66-.66-.66-1.72,0-2.38l9.66-9.66c.66-.66,1.72-.66,2.38,0,.66.66.66,1.72,0,2.38l-9.66,9.66c-.33.33-.76.49-1.19.49Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M32,27.33c-.43,0-.86-.16-1.19-.49-.66-.66-.66-1.72,0-2.38L48.83,6.43c.66-.66,1.72-.66,2.38,0,.66.66.66,1.72,0,2.38l-18.02,18.02c-.33.33-.76.49-1.19.49Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M38.36,33.68c-.43,0-.86-.16-1.19-.49-.66-.66-.66-1.72,0-2.38l18.02-18.02c.66-.66,1.72-.66,2.38,0,.66.66.66,1.72,0,2.38l-18.02,18.02c-.33.33-.76.49-1.19.49Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M51.09,33.68c-.43,0-.86-.16-1.19-.49-.66-.66-.66-1.72,0-2.38l9.66-9.66c.66-.66,1.72-.66,2.38,0,.66.66.66,1.72,0,2.38l-9.66,9.66c-.33.33-.76.49-1.19.49Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M32,33.68H1.68c-.93,0-1.68-.75-1.68-1.68s.75-1.68,1.68-1.68h28.63V1.68c0-.93.75-1.68,1.68-1.68s1.68.75,1.68,1.68v30.32c0,.93-.75,1.68-1.68,1.68Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M25.26,63.25c-.12,0-.25-.01-.37-.04C10.23,59.88,0,47.05,0,32c0-7.32,2.53-14.46,7.11-20.1.58-.72,1.65-.83,2.37-.25.72.59.83,1.65.25,2.37-4.16,5.12-6.36,11.34-6.36,17.98,0,13.46,9.16,24.95,22.27,27.92.91.21,1.48,1.11,1.27,2.02-.18.78-.87,1.31-1.64,1.31Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M62.32,33.68c-.93,0-1.68-.75-1.68-1.68,0-15.79-12.84-28.63-28.63-28.63-6,0-11.75,1.84-16.61,5.32-.76.54-1.81.37-2.35-.39-.54-.76-.37-1.81.39-2.35C18.87,2.06,25.29,0,32,0c17.64,0,32,14.36,32,32,0,.93-.75,1.68-1.68,1.68Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M14.41,26.95h-5.99c-.93,0-1.68-.75-1.68-1.68V1.68c0-.93.75-1.68,1.68-1.68h5.99c.93,0,1.68.75,1.68,1.68v23.58c0,.93-.75,1.68-1.68,1.68ZM10.11,23.58h2.62V3.37h-2.62v20.21Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M20.4,26.95h-5.99c-.93,0-1.68-.75-1.68-1.68v-13.47c0-.93.75-1.68,1.68-1.68h5.99c.93,0,1.68.75,1.68,1.68v13.47c0,.93-.75,1.68-1.68,1.68ZM16.09,23.58h2.62v-10.11h-2.62v10.11Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M26.39,26.95h-5.99c-.93,0-1.68-.75-1.68-1.68v-8.98c0-.93.75-1.68,1.68-1.68h5.99c.93,0,1.68.75,1.68,1.68v8.98c0,.93-.75,1.68-1.68,1.68ZM22.08,23.58h2.62v-5.61h-2.62v5.61Z"
                          ></path>
                          <g>
                            <path
                              fill="currentColor"
                              class="cls-2"
                              d="M17.4,49.4c-.43,0-.86-.16-1.19-.49l-4.53-4.53-4.86,4.06c-.71.6-1.78.5-2.37-.21-.6-.71-.5-1.78.21-2.37l6.04-5.04c.67-.56,1.65-.51,2.27.1l4.42,4.42,6.67-6.67c.66-.66,1.72-.66,2.38,0,.66.66.66,1.72,0,2.38l-7.86,7.86c-.33.33-.76.49-1.19.49Z"
                            ></path>
                            <path
                              fill="currentColor"
                              class="cls-2"
                              d="M25.26,47.16c-.93,0-1.68-.75-1.68-1.68v-3.93h-3.93c-.93,0-1.68-.75-1.68-1.68s.75-1.68,1.68-1.68h5.61c.93,0,1.68.75,1.68,1.68v5.61c0,.93-.75,1.68-1.68,1.68Z"
                            ></path>
                          </g>
                        </g>
                        <path
                          fill="currentColor"
                          class="cls-1"
                          d="M62.32,30.32h-30.32c-.93,0-1.68.75-1.68,1.68v30.32c0,.93.75,1.68,1.68,1.68,17.64,0,32-14.36,32-32,0-.93-.75-1.68-1.68-1.68Z"
                        ></path>
                      </g>
                      <path
                        fill="currentColor"
                        class="cls-3"
                        d="M50.68,40.67l-.69,2.51h-2.02c-.2,1.25-.75,2.29-1.64,3.1-.89.81-2.2,1.32-3.94,1.53l-.12.03,6.01,7.38v.17h-3.92l-6.66-8-.03-2.1h3.32c.93,0,1.69-.19,2.27-.56.58-.37.97-.89,1.18-1.54h-7.04l.69-2.51h6.25c-.22-.57-.6-1.01-1.16-1.33-.55-.32-1.28-.48-2.2-.48h-3.59l.74-2.92h12.53l-.69,2.53h-2.89c.44.62.74,1.36.87,2.21h2.7Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </span>
            <h5 class="text-lg font-semibold">F&O</h5>
          </div>
          <!-- IPO -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%]"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600"
                  width="35"
                  id="Layer_2"
                  data-name="Layer 2"
                  viewBox="0 0 58.65 62.75"
                >
                  <defs></defs>
                  <g id="Dypta">
                    <g>
                      <g>
                        <path
                          fill="currentColor"
                          class="cls-2"
                          d="M31.45,61.75H5.15c-2.84,0-5.15-2.31-5.15-5.15V8.58C0,5.74,2.31,3.43,5.15,3.43h10.29c.95,0,1.72.77,1.72,1.72s-.77,1.72-1.72,1.72H5.15c-.95,0-1.72.77-1.72,1.72v48.03c0,.95.77,1.72,1.72,1.72h26.3c.95,0,1.72.77,1.72,1.72s-.77,1.72-1.72,1.72Z"
                        ></path>
                        <path
                          fill="currentColor"
                          class="cls-2"
                          d="M49.74,36.07c-.95,0-1.72-.77-1.72-1.72V8.58c0-.95-.77-1.72-1.72-1.72h-10.29c-.95,0-1.72-.77-1.72-1.72s.77-1.72,1.72-1.72h10.29c2.84,0,5.15,2.31,5.15,5.15v25.77c0,.95-.77,1.72-1.72,1.72Z"
                        ></path>
                        <path
                          fill="currentColor"
                          class="cls-2"
                          d="M33.73,10.29h-16.01c-2.21,0-4-1.8-4-4v-2.29c0-2.21,1.8-4,4-4h16.01c2.21,0,4,1.8,4,4v2.29c0,2.21-1.8,4-4,4ZM17.72,3.43c-.31,0-.57.26-.57.57v2.29c0,.31.26.57.57.57h16.01c.31,0,.57-.26.57-.57v-2.29c0-.31-.26-.57-.57-.57h-16.01Z"
                        ></path>
                        <path
                          fill="currentColor"
                          class="cls-2"
                          d="M40.87,18.3H11.6c-1.43,0-2.58-.77-2.58-1.72s1.16-1.72,2.58-1.72h29.27c1.43,0,2.58.77,2.58,1.72s-1.16,1.72-2.58,1.72Z"
                        ></path>
                        <path
                          fill="currentColor"
                          class="cls-2"
                          d="M40.87,25.16H11.6c-1.43,0-2.58-.77-2.58-1.72s1.16-1.72,2.58-1.72h29.27c1.43,0,2.58.77,2.58,1.72s-1.16,1.72-2.58,1.72Z"
                        ></path>
                        <path
                          fill="currentColor"
                          class="cls-2"
                          d="M40.87,32.02H11.6c-1.43,0-2.58-.77-2.58-1.72s1.16-1.72,2.58-1.72h29.27c1.43,0,2.58.77,2.58,1.72s-1.16,1.72-2.58,1.72Z"
                        ></path>
                        <path
                          fill="currentColor"
                          class="cls-2"
                          d="M28.02,54.89H8.58c-.95,0-1.72-.77-1.72-1.72v-16.01c0-.95.77-1.72,1.72-1.72s1.72.77,1.72,1.72v14.29h17.72c.95,0,1.72.77,1.72,1.72s-.77,1.72-1.72,1.72Z"
                        ></path>
                        <path
                          fill="currentColor"
                          class="cls-2"
                          d="M14.29,54.89c-.95,0-1.72-.77-1.72-1.72v-4.57c0-.95.77-1.72,1.72-1.72s1.72.77,1.72,1.72v4.57c0,.95-.77,1.72-1.72,1.72Z"
                        ></path>
                        <path
                          fill="currentColor"
                          class="cls-2"
                          d="M20.01,54.89c-.95,0-1.72-.77-1.72-1.72v-12.58c0-.95.77-1.72,1.72-1.72s1.72.77,1.72,1.72v12.58c0,.95-.77,1.72-1.72,1.72Z"
                        ></path>
                        <path
                          fill="currentColor"
                          class="cls-2"
                          d="M25.73,54.89c-.95,0-1.72-.77-1.72-1.72v-8c0-.95.77-1.72,1.72-1.72s1.72.77,1.72,1.72v8c0,.95-.77,1.72-1.72,1.72Z"
                        ></path>
                      </g>
                      <circle
                        class="cls-1"
                        cx="45.82"
                        cy="49.92"
                        r="12.83"
                      ></circle>
                      <path
                        fill="currentColor"
                        class="cls-3"
                        d="M51.59,46.56l-.6,2.18h-1.76c-.17,1.09-.65,1.98-1.42,2.69-.78.71-1.91,1.15-3.42,1.33l-.1.02,5.21,6.4v.15h-3.4l-5.78-6.95-.02-1.82h2.88c.81,0,1.47-.16,1.97-.49.51-.32.85-.77,1.02-1.34h-6.11l.6-2.18h5.43c-.19-.49-.52-.88-1-1.16-.48-.28-1.12-.42-1.91-.42h-3.12l.65-2.54h10.88l-.6,2.2h-2.51c.39.54.64,1.18.76,1.91h2.35Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </span>
            <h5 class="text-lg font-semibold">IPO</h5>
          </div>

          <!-- Debts/Bonds -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%]"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600"
                  width="35"
                  id="Layer_2"
                  data-name="Layer 2"
                  viewBox="0 0 63.28 63.28"
                >
                  <defs></defs>
                  <g id="Dypta">
                    <g>
                      <g>
                        <g>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M49.4,45.52c-.92,0-1.67-.75-1.67-1.67,0-4.02,2.87-7.39,6.66-8.16V15.38c-3.26-.66-5.83-3.24-6.49-6.49H15.38c-.66,3.26-3.24,5.83-6.49,6.49v20.32c3.26.66,5.83,3.24,6.49,6.49h5.67c.92,0,1.67.75,1.67,1.67s-.75,1.67-1.67,1.67h-7.17c-.92,0-1.67-.75-1.67-1.67,0-2.75-2.24-5-5-5-.92,0-1.67-.75-1.67-1.67V13.88c0-.92.75-1.67,1.67-1.67,2.75,0,5-2.24,5-5,0-.92.75-1.67,1.67-1.67h35.53c.92,0,1.67.75,1.67,1.67,0,2.75,2.24,5,5,5,.92,0,1.67.75,1.67,1.67v23.31c0,.92-.75,1.67-1.67,1.67-2.75,0-5,2.24-5,5,0,.92-.75,1.67-1.67,1.67Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M58.29,51.07h-12.21c-.92,0-1.67-.75-1.67-1.67s.75-1.67,1.67-1.67h12.21c.92,0,1.67-.75,1.67-1.67V5c0-.92-.75-1.67-1.67-1.67H5c-.92,0-1.67.75-1.67,1.67v41.08c0,.92.75,1.67,1.67,1.67h19.99c.92,0,1.67.75,1.67,1.67s-.75,1.67-1.67,1.67H5c-2.75,0-5-2.24-5-5V5C0,2.24,2.24,0,5,0h53.29c2.75,0,5,2.24,5,5v41.08c0,2.75-2.24,5-5,5Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M22.76,23.31h-8.88c-.92,0-1.67-.75-1.67-1.67s.75-1.67,1.67-1.67h8.88c.92,0,1.67.75,1.67,1.67s-.75,1.67-1.67,1.67Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M22.76,28.87h-8.88c-.92,0-1.67-.75-1.67-1.67s.75-1.67,1.67-1.67h8.88c.92,0,1.67.75,1.67,1.67s-.75,1.67-1.67,1.67Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M17.21,34.42h-3.33c-.92,0-1.67-.75-1.67-1.67s.75-1.67,1.67-1.67h3.33c.92,0,1.67.75,1.67,1.67s-.75,1.67-1.67,1.67Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M49.4,23.31h-8.88c-.92,0-1.67-.75-1.67-1.67s.75-1.67,1.67-1.67h8.88c.92,0,1.67.75,1.67,1.67s-.75,1.67-1.67,1.67Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M49.4,28.87h-8.88c-.92,0-1.67-.75-1.67-1.67s.75-1.67,1.67-1.67h8.88c.92,0,1.67.75,1.67,1.67s-.75,1.67-1.67,1.67Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M49.4,34.42h-3.33c-.92,0-1.67-.75-1.67-1.67s.75-1.67,1.67-1.67h3.33c.92,0,1.67.75,1.67,1.67s-.75,1.67-1.67,1.67Z"
                          ></path>
                        </g>
                        <path
                          fill="currentColor"
                          class="cls-1"
                          d="M31.64,27.76c-7.04,0-12.77,5.73-12.77,12.77,0,4.36,2.2,8.22,5.55,10.52v10.57c0,.58.3,1.11.79,1.42.49.3,1.1.33,1.62.07l4.81-2.4,4.81,2.4c.24.12.49.18.74.18.3,0,.61-.08.88-.25.49-.3.79-.84.79-1.42v-10.57c3.35-2.3,5.55-6.16,5.55-10.52,0-7.04-5.73-12.77-12.77-12.77ZM35.53,58.92l-3.14-1.57c-.47-.23-1.02-.23-1.49,0l-3.14,1.57v-6.24c1.23.39,2.53.61,3.89.61s2.66-.22,3.89-.61v6.24ZM37.1,39.09l-2.2,2.5.31,3.32c.03.28-.25.48-.51.37l-3.06-1.32-3.06,1.32c-.25.11-.53-.09-.51-.37l.31-3.32-2.2-2.5c-.18-.21-.08-.54.19-.6l3.25-.73,1.7-2.87c.14-.24.49-.24.63,0l1.7,2.87,3.25.73c.27.06.38.39.19.6Z"
                        ></path>
                      </g>
                      <path
                        fill="currentColor"
                        class="cls-2"
                        d="M36.35,15.91l-.43,1.56h-1.26c-.12.78-.47,1.42-1.02,1.93-.56.51-1.37.83-2.45.96l-.07.02,3.74,4.6v.11h-2.44l-4.15-4.99-.02-1.31h2.07c.58,0,1.05-.12,1.42-.35.36-.23.61-.55.73-.96h-4.38l.43-1.56h3.9c-.14-.35-.38-.63-.72-.83-.34-.2-.8-.3-1.37-.3h-2.24l.46-1.82h7.81l-.43,1.58h-1.8c.28.39.46.85.54,1.37h1.68Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </span>
            <h5 class="text-lg font-semibold">Debts/Bonds</h5>
          </div>

          <!--SIP -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%]"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600"
                  width="35"
                  id="Layer_2"
                  data-name="Layer 2"
                  viewBox="0 0 63.14 63.14"
                >
                  <defs></defs>
                  <g id="Dypta">
                    <g>
                      <g>
                        <g>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M28.24,56.49H1.66c-.92,0-1.66-.74-1.66-1.66V1.66C0,.74.74,0,1.66,0s1.66.74,1.66,1.66v51.51h24.92c.92,0,1.66.74,1.66,1.66s-.74,1.66-1.66,1.66Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M18.28,56.49c-.92,0-1.66-.74-1.66-1.66v-12.74h-6.65v12.74c0,.92-.74,1.66-1.66,1.66s-1.66-.74-1.66-1.66v-14.4c0-.92.74-1.66,1.66-1.66h9.97c.92,0,1.66.74,1.66,1.66v14.4c0,.92-.74,1.66-1.66,1.66Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M24.92,56.49c-.92,0-1.66-.74-1.66-1.66V22.71c0-.92.74-1.66,1.66-1.66h9.97c.92,0,1.66.74,1.66,1.66v6.65c0,.92-.74,1.66-1.66,1.66s-1.66-.74-1.66-1.66v-4.98h-6.65v30.46c0,.92-.74,1.66-1.66,1.66Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M41.54,36.55c-.92,0-1.66-.74-1.66-1.66V1.66C39.88.74,40.62,0,41.54,0h9.97c.92,0,1.66.74,1.66,1.66v26.58c0,.92-.74,1.66-1.66,1.66s-1.66-.74-1.66-1.66V3.32h-6.65v31.57c0,.92-.74,1.66-1.66,1.66Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M8.31,31.02c-.41,0-.83-.15-1.15-.46-.66-.63-.68-1.69-.05-2.35L33.69.51c.64-.66,1.69-.68,2.35-.05.66.63.68,1.69.05,2.35L9.51,30.5c-.33.34-.76.51-1.2.51Z"
                          ></path>
                          <path
                            fill="currentColor"
                            class="cls-2"
                            d="M34.89,8.86c-.92,0-1.66-.74-1.66-1.66v-3.88h-3.88c-.92,0-1.66-.74-1.66-1.66S28.44,0,29.35,0h5.54c.92,0,1.66.74,1.66,1.66v5.54c0,.92-.74,1.66-1.66,1.66Z"
                          ></path>
                        </g>
                        <path
                          fill="currentColor"
                          class="cls-1"
                          d="M58.15,33.23h-19.94c-2.75,0-4.98,2.24-4.98,4.98v12.92l7.2-6.4c.66-.58,1.66-.55,2.28.07l5.47,5.47,3.74-3.74h-1.53c-.92,0-1.66-.74-1.66-1.66s.74-1.66,1.66-1.66h5.54c.92,0,1.66.74,1.66,1.66v5.54c0,.92-.74,1.66-1.66,1.66s-1.66-.74-1.66-1.66v-1.53l-4.92,4.92c-.65.65-1.7.65-2.35,0l-5.54-5.54-8.24,7.33v2.58c0,2.75,2.24,4.98,4.98,4.98h19.94c2.75,0,4.98-2.24,4.98-4.98v-19.94c0-2.75-2.24-4.98-4.98-4.98Z"
                        ></path>
                      </g>
                      <path
                        fill="currentColor"
                        class="cls-2"
                        d="M16.51,4.92l-.46,1.66h-1.34c-.13.83-.5,1.52-1.09,2.06-.59.54-1.46.88-2.61,1.02l-.08.02,3.99,4.89v.11h-2.6l-4.42-5.31-.02-1.39h2.2c.62,0,1.12-.12,1.51-.37.39-.25.65-.59.78-1.02h-4.67l.46-1.66h4.15c-.15-.38-.4-.67-.77-.88-.37-.21-.85-.32-1.46-.32h-2.38l.49-1.94h8.32l-.46,1.68h-1.92c.3.41.49.9.58,1.46h1.79Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </span>
            <h5 class="text-lg font-semibold">SIP</h5>
          </div>
        </div>
      </div>

      <!-- Right Side Image -->
      <div class="flex-1">
        <img
          loading="lazy"
          decoding="async"
          src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/01-IPOS-IMAGE-02-1024x1024.webp"
          class="w-full h-auto"
          alt="Investment Image"
        />
      </div>
    </div>
  </section>

  <!-- FEATURES-->
  <section
    class="bg-[#E9F8FF] relative text-black flex justify-center items-center"
  >
    <div class="container mx-auto px-4 py-24">
      <div class="mb-8 md:mb-0 text-center">
        <h2
          class="text-[#005BDF] text-center font-liter text-[24px] md:text-lg lg:text-xl xl:text-2xl"
        >
          FEATURES
        </h2>
        <h5 class="text-gray-700 text-center text-3xl font-bold mt-4 mb-8">
          Innovative Features of Our Ecosystem
        </h5>
      </div>
      <div class="flex flex-wrap gap-4 justify-center">
        <!-- Innovative Strategies -->
        <div
          class="flex items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[30%]"
        >
          <span class="p-4 bg-[#075fe40d] m-4 rounded-lg">
            <div class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-blue-600"
                width="35"
                viewBox="0 0 20 20"
              >
                <defs></defs>
                <path
                  fill="currentColor"
                  class="st0"
                  d="M3.32,9.2c-.09,0-.19-.03-.28-.08-.23-.15-.29-.46-.14-.69.09-.13.18-.29.29-.46.96-1.54,2.94-4.74,6.12-3.95.63.16,1.12.55,1.6.94.85.69,1.41,1.14,2.54.3.67-.49,2.98-2.94,3.4-3.59.15-.23.46-.3.69-.15.23.15.3.46.15.69-.51.79-2.95,3.34-3.64,3.85-1.75,1.29-2.91.36-3.76-.33-.41-.33-.79-.64-1.21-.74-2.46-.62-4.13,2.07-5.03,3.51-.11.18-.22.35-.31.48-.1.15-.25.22-.42.22Z"
                ></path>
                <path
                  fill="currentColor"
                  class="st0"
                  d="M18.79,19.22H1.25c-.28,0-.5-.22-.5-.5V1.18c0-.28.22-.5.5-.5s.5.22.5.5v17.04h17.04c.28,0,.5.22.5.5s-.22.5-.5.5Z"
                ></path>
                <g>
                  <path
                    fill="currentColor"
                    class="st0"
                    d="M4.08,16.23c-.28,0-.5-.22-.5-.5v-4.12c0-.28.22-.5.5-.5s.5.22.5.5v4.12c0,.28-.22.5-.5.5Z"
                  ></path>
                  <path
                    fill="currentColor"
                    class="st0"
                    d="M8.03,16.23c-.28,0-.5-.22-.5-.5v-7.25c0-.28.22-.5.5-.5s.5.22.5.5v7.25c0,.28-.22.5-.5.5Z"
                  ></path>
                  <path
                    fill="currentColor"
                    class="st0"
                    d="M11.99,16.23c-.28,0-.5-.22-.5-.5v-5.16c0-.28.22-.5.5-.5s.5.22.5.5v5.16c0,.28-.22.5-.5.5Z"
                  ></path>
                  <path
                    fill="currentColor"
                    class="st0"
                    d="M15.94,16.23c-.28,0-.5-.22-.5-.5v-7.02c0-.28.22-.5.5-.5s.5.22.5.5v7.02c0,.28-.22.5-.5.5Z"
                  ></path>
                </g>
              </svg>
            </div>
          </span>
          <div class="flex flex-col py-4 p-2">
            <h5 class="text-lg font-semibold">Innovative Strategies</h5>
            <p>
              Unique & Innovative strategies on candlestick & noiseless charts
            </p>
          </div>
        </div>
        <!-- Smart Scanners -->
        <div
          class="flex items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[30%]"
        >
          <span class="p-4 bg-[#075fe40d] m-4 rounded-lg">
            <div class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-blue-600"
                width="35"
                viewBox="0 0 20 20"
              >
                <defs></defs>
                <path
                  fill="currentColor"
                  class="st0"
                  d="M1.38,7.08c.29,0,.52-.23.52-.52V1.9h4.66c.29,0,.52-.23.52-.52s-.23-.52-.52-.52H1.38c-.29,0-.52.23-.52.52v5.18c0,.29.23.52.52.52Z"
                ></path>
                <path
                  fill="currentColor"
                  class="st0"
                  d="M18.62.86h-5.18c-.29,0-.52.23-.52.52s.23.52.52.52h4.66v4.66c0,.29.23.52.52.52s.52-.23.52-.52V1.38c0-.29-.23-.52-.52-.52Z"
                ></path>
                <path
                  fill="currentColor"
                  class="st0"
                  d="M18.62,12.92c-.29,0-.52.23-.52.52v4.66h-4.66c-.29,0-.52.23-.52.52s.23.52.52.52h5.18c.29,0,.52-.23.52-.52v-5.18c0-.29-.23-.52-.52-.52Z"
                ></path>
                <path
                  fill="currentColor"
                  class="st0"
                  d="M6.56,18.1H1.9v-4.66c0-.29-.23-.52-.52-.52s-.52.23-.52.52v5.18c0,.29.23.52.52.52h5.18c.29,0,.52-.23.52-.52s-.23-.52-.52-.52Z"
                ></path>
                <path
                  fill="currentColor"
                  class="st0"
                  d="M14.11,8.6l.69.64c.1.09.22.14.35.14.05,0,.11,0,.16-.03.18-.06.31-.21.35-.39l.57-2.74c.04-.18-.02-.37-.16-.49-.14-.12-.33-.16-.51-.11l-2.63.85c-.16.05-.28.18-.33.34s-.02.33.08.47l.66.66s-.02.01-.03.02l-3.05,3.35-1.75-1.23c-.49-.22-1.04-.11-1.44.28l-3.16,3.15c-.2.2-.2.53,0,.73.1.1.23.15.37.15s.26-.05.37-.15l3.15-3.15c.13-.13.24-.09.21-.11l2.01,1.41c.09.06.23.09.34.1.14.03.29-.06.39-.17l3.33-3.67s.02-.03.03-.05Z"
                ></path>
              </svg>
            </div>
          </span>
          <div class="flex flex-col py-4 p-2">
            <h5 class="text-lg font-semibold">Smart Scanners</h5>
            <p>Unique Scanners for Technical Analysis</p>
          </div>
        </div>

        <!-- All Types of Orders-->
        <div
          class="flex items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[30%]"
        >
          <span class="p-4 bg-[#075fe40d] m-4 rounded-lg">
            <div class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-blue-600"
                width="35"
                viewBox="0 0 20 20"
              >
                <defs></defs>
                <path
                  fill="currentColor"
                  class="st0"
                  d="M17.77,8.15c-.17-.26-.52-.25-.85-.23-.12,0-.33.01-.42-.01l-1.23-1.92-2.04-.86-.89-2.52-2.36-2.09c-.17-.15-.39-.21-.62-.14h0c-.26.07-.48.44-1.25,1.84-.38.69-.94,1.72-1.18,1.96l-1.38.25-2.03,3.45c-.06.05-.32.04-.47.03-.32-.01-.65-.02-.82.23-.11.16-.1.36,0,.6l.08.18h1.63c-.07.05-.14.12-.18.21-.1.19-.1.42-.01.6l1.71,4.13,1.47.44,1.99,4.83c.09.27.23.43.43.5.05.02.11.03.16.03.14,0,.29-.06.45-.17l2.38-2.99.89-3.61,2.25-1.31.02-.14c.02-.14.19-.51.33-.81.35-.75.5-1.11.43-1.37-.04-.14-.14-.24-.24-.33h1.64l.08-.17c.11-.24.11-.44.01-.6ZM9.42,2.33c.15.42.37,1.07.41,1.21-.15.22-.6.69-1.01,1.12-1.12,1.18-1.45,1.57-1.45,1.86,0,.11.04.2.1.32l.08.23,2.26-.23c.13.22.28.43.43.62.12.16.24.31.34.47h-5.73l1.4-2.38,1.48-.34,1.7-2.87ZM14.49,6.93c.09.09.45.64.64.95h-3.15c-.19-.15-.55-.73-.77-1.08-.41-.65-.65-1.03-.91-1.15-.23-.11-.49-.09-.73-.05l1.54-1.8-.32-1,.58.5.87,2.55.05.09c.19.24.62.4,1.3.63.36.13.78.27.91.36ZM15.22,9.06c-.15.22-.25.54-.36.87-.11.33-.22.7-.37.87l-2.21,1.33-.04.09c-.25.55-.37,1.25-.48,1.93-.11.64-.22,1.3-.43,1.75-.15.33-.51.72-.86,1.1-.28.31-.57.62-.79.94l-1.79-4.45c-.21-.31-.63-.37-1.03-.43-.18-.03-.39-.06-.51-.11-.11-.22-.31-.73-.52-1.27-.73-1.86-1.03-2.52-1.26-2.76h10.79c-.06.04-.11.09-.14.14Z"
                ></path>
              </svg>
            </div>
          </span>
          <div class="flex flex-col py-4 p-2">
            <h5 class="text-lg font-semibold">All Types of Orders</h5>
            <p>From Iceberg to Bracket orders, all in one-click</p>
          </div>
        </div>

        <!-- Alert-based Orders-->
        <div
          class="flex items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[30%]"
        >
          <span class="p-4 bg-[#075fe40d] m-4 rounded-lg">
            <div class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-blue-600"
                width="35"
                viewBox="0 0 20 20"
              >
                <defs></defs>
                <g>
                  <g>
                    <path
                      fill="currentColor"
                      class="st0"
                      d="M4.73,14.87c-.12,0-.24-.04-.34-.12-1.54-1.3-1.8-3.65-.58-5.35.17-.23.49-.29.73-.12.23.17.29.49.12.73-.89,1.24-.71,3.02.4,3.95.22.19.25.51.06.73-.1.12-.25.19-.4.19Z"
                    ></path>
                    <path
                      fill="currentColor"
                      class="st0"
                      d="M2.84,16.77c-.1,0-.21-.03-.3-.1-.44-.31-1.12-1.39-1.25-1.63C-.02,12.6.33,9.48,2.14,7.45c.19-.22.52-.23.74-.04.21.19.23.52.04.74-1.5,1.68-1.8,4.37-.71,6.41.21.38.75,1.15.93,1.28.24.17.29.49.13.73-.1.14-.26.22-.43.22Z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="currentColor"
                      class="st0"
                      d="M15.27,14.87c-.15,0-.3-.06-.4-.19-.19-.22-.16-.55.06-.73,1.11-.94,1.29-2.71.4-3.95-.17-.23-.11-.56.12-.73.24-.17.56-.11.73.12,1.22,1.7.96,4.05-.58,5.35-.1.08-.22.12-.34.12Z"
                    ></path>
                    <path
                      fill="currentColor"
                      class="st0"
                      d="M17.16,16.77c-.16,0-.32-.08-.43-.22-.16-.24-.11-.56.13-.73.18-.13.72-.89.93-1.27,1.09-2.03.79-4.73-.71-6.41-.19-.21-.17-.54.04-.74.21-.19.54-.17.74.04,1.81,2.03,2.16,5.15.85,7.59-.14.26-.8,1.32-1.25,1.63-.09.06-.2.1-.3.1Z"
                    ></path>
                  </g>
                </g>
                <path
                  fill="currentColor"
                  class="st0"
                  d="M13.46,10.52v-3.31c-.13-1.31-1.01-2.44-2.25-2.92,0-.01-.01-.02-.02-.04.01-.05.04-.1.04-.16,0-.48-.55-.87-1.23-.87s-1.23.39-1.23.87c0,.06.03.1.04.16,0,.01-.01.02-.02.04-1.25.48-2.13,1.62-2.25,2.94v3.29c-.62.21-.94.83-.92,1.36.02.63.43,1.1,1.09,1.2h1.88s0,.03,0,.05c0,.5.63.91,1.41.91,0,0,0,0,0,0h0s.21,0,.21,0h0c.68-.08,1.2-.45,1.2-.91,0-.02,0-.03,0-.05h1.91c.63-.1,1.04-.58,1.06-1.2.01-.54-.3-1.15-.92-1.36ZM7.54,7.2c0-.43.45-1.19.82-1.52.44-.39,1-.59,1.63-.59.02,0,.04,0,.05,0,.62,0,1.19.2,1.62.59.37.32.82,1.09.82,1.52v3.24h-4.94v-3.24ZM13.35,12.04s-.03.02-.05.03c-.01,0-.02.01-.03.02h-3.26s-3.26,0-3.26,0c-.01,0-.02-.01-.03-.02-.02,0-.04-.02-.04-.02-.08-.08-.07-.24-.02-.36.05-.12.16-.26.3-.26h6.11c.15,0,.26.14.31.26.05.12.06.27-.02.36Z"
                ></path>
              </svg>
            </div>
          </span>
          <div class="flex flex-col py-4 p-2">
            <h5 class="text-lg font-semibold">Alert-based Orders</h5>
            <p>Alerts for price, volume or strategy with auto-execution</p>
          </div>
        </div>

        <!-- Options Orders-->
        <div
          class="flex items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[30%]"
        >
          <span class="p-4 bg-[#075fe40d] m-4 rounded-lg">
            <div class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-blue-600"
                width="35"
                viewBox="0 0 20 20"
              >
                <defs></defs>
                <g>
                  <path
                    fill="currentColor"
                    class="st0"
                    d="M3.78,11.43v2.56h.79l-1.72,2.4-1.72-2.4h.79v-2.56h1.85M3.78,10.43h-1.85c-.55,0-1,.45-1,1v1.58c-.29.06-.54.25-.68.52-.17.33-.14.73.08,1.04l1.72,2.4c.19.26.49.42.81.42s.62-.16.81-.42l1.72-2.4c.22-.3.25-.71.08-1.04-.14-.27-.39-.46-.68-.52v-1.58c0-.55-.45-1-1-1h0Z"
                  ></path>
                  <g>
                    <path
                      fill="currentColor"
                      class="st0"
                      d="M9.65,14.83c.06-.02.11,0,.16.03.05.04.07.08.07.15v.24c0,.08-.02.14-.07.2-.05.06-.11.09-.18.11-.2.04-.41.05-.64.05-.5,0-.89-.14-1.17-.43-.28-.28-.42-.7-.42-1.24s.14-.94.41-1.23c.27-.29.65-.43,1.14-.43.22,0,.44.02.64.05.07.01.13.05.18.11s.07.13.07.2v.25c0,.06-.02.11-.07.15-.05.04-.1.05-.16.03-.18-.05-.36-.08-.54-.08-.24,0-.42.08-.55.24-.13.16-.2.4-.2.71s.07.54.22.71c.15.17.34.25.58.25.19,0,.37-.02.54-.08Z"
                    ></path>
                    <path
                      fill="currentColor"
                      class="st0"
                      d="M12.25,12.57l.87,2.76c.02.06,0,.11-.03.16-.04.05-.09.08-.15.08h-.43c-.07,0-.14-.02-.2-.07-.06-.05-.09-.1-.11-.17l-.08-.34s-.02-.04-.04-.04h-.76s-.05.01-.05.04l-.08.34c-.01.07-.05.13-.11.17-.06.05-.12.07-.2.07h-.42c-.06,0-.11-.02-.15-.08s-.05-.1-.03-.16l.87-2.76c.02-.07.06-.13.12-.17s.13-.07.21-.07h.43c.07,0,.14.02.2.07s.1.1.13.17ZM11.47,14.28h.46s.02,0,.02-.01,0-.02,0-.02l-.26-1.16s0,0,0,0,0,0,0,0l-.26,1.16s0,.02,0,.02c0,0,.02.01.02.01Z"
                    ></path>
                    <path
                      fill="currentColor"
                      class="st0"
                      d="M15.47,14.83c.07,0,.13.02.18.08.05.05.08.11.08.18v.23c0,.07-.03.13-.08.18-.05.05-.11.08-.18.08h-1.71c-.07,0-.13-.02-.18-.08-.05-.05-.08-.11-.08-.18v-2.73c0-.07.03-.13.08-.18.05-.05.11-.08.18-.08h.4c.07,0,.13.02.18.08.05.05.08.11.08.18v2.21s.01.04.04.04h1.01Z"
                    ></path>
                    <path
                      fill="currentColor"
                      class="st0"
                      d="M18.22,14.83c.07,0,.13.02.18.08.05.05.08.11.08.18v.23c0,.07-.03.13-.08.18-.05.05-.11.08-.18.08h-1.71c-.07,0-.13-.02-.18-.08-.05-.05-.08-.11-.08-.18v-2.73c0-.07.03-.13.08-.18.05-.05.11-.08.18-.08h.4c.07,0,.13.02.18.08.05.05.08.11.08.18v2.21s.01.04.04.04h1.01Z"
                    ></path>
                  </g>
                  <path
                    fill="currentColor"
                    class="st0"
                    d="M18.87,11.43v4.94H6.96v-4.94h11.91M18.87,10.43H6.96c-.55,0-1,.45-1,1v4.94c0,.55.45,1,1,1h11.91c.55,0,1-.45,1-1v-4.94c0-.55-.45-1-1-1h0Z"
                  ></path>
                </g>
                <g>
                  <path
                    fill="currentColor"
                    class="st0"
                    d="M17.15,2.89l1.72,2.39h-.79v2.55h-1.85v-2.55h-.79l1.72-2.39M17.15,1.89c-.32,0-.62.15-.81.42l-1.72,2.39c-.22.3-.25.71-.08,1.04.14.27.39.46.68.52v1.57c0,.55.45,1,1,1h1.85c.55,0,1-.45,1-1v-1.57c.29-.06.54-.25.68-.52.17-.33.14-.74-.08-1.04l-1.72-2.39c-.19-.26-.49-.42-.81-.42h0Z"
                  ></path>
                  <g>
                    <g>
                      <path
                        fill="currentColor"
                        class="st0"
                        d="M3.94,3.74c1,0,1.51.36,1.51,1.09,0,.39-.11.69-.34.89-.23.2-.56.3-.99.3-.07,0-.15,0-.25,0-.03,0-.04.01-.04.04v.72c0,.07-.03.13-.08.18-.05.05-.11.08-.18.08h-.36c-.07,0-.13-.02-.18-.08-.05-.05-.08-.11-.08-.18v-2.71c0-.07.02-.13.07-.19.05-.06.11-.09.18-.09.25-.02.49-.04.73-.04ZM4.03,5.38c.19,0,.34-.04.44-.13.1-.09.16-.21.16-.38,0-.31-.2-.47-.6-.47-.06,0-.11,0-.16.01-.02,0-.04.02-.04.05v.86s.01.04.04.04c.07,0,.13,0,.16,0Z"
                      ></path>
                      <path
                        fill="currentColor"
                        class="st0"
                        d="M8.14,3.78c.07,0,.13.02.18.08.05.05.08.11.08.18v1.79c0,.41-.11.72-.33.93-.22.21-.54.31-.96.31s-.74-.1-.96-.31c-.22-.21-.33-.52-.33-.93v-1.79c0-.07.03-.13.08-.18s.11-.08.18-.08h.39c.07,0,.13.02.18.08.05.05.08.11.08.18v1.85c0,.17.03.29.09.36.06.07.16.1.31.1s.24-.03.31-.1c.06-.07.09-.19.09-.36v-1.85c0-.07.03-.13.08-.18.05-.05.11-.08.18-.08h.37Z"
                      ></path>
                      <path
                        fill="currentColor"
                        class="st0"
                        d="M11.21,3.78c.07,0,.13.02.18.08.05.05.08.11.08.18v.23c0,.07-.02.13-.08.18-.05.05-.11.08-.18.08h-.54s-.04.01-.04.04v2.21c0,.07-.02.13-.07.18-.05.05-.11.08-.17.08h-.41c-.07,0-.13-.02-.17-.08s-.07-.11-.07-.18v-2.21s-.01-.04-.04-.04h-.54c-.07,0-.13-.02-.18-.08-.05-.05-.08-.11-.08-.18v-.23c0-.07.02-.13.08-.18.05-.05.11-.08.18-.08h2.07Z"
                      ></path>
                    </g>
                    <path
                      fill="currentColor"
                      class="st0"
                      d="M13.04,2.89v4.94H1.13V2.89h11.91M13.04,1.89H1.13C.58,1.89.13,2.33.13,2.89v4.94c0,.55.45,1,1,1h11.91c.55,0,1-.45,1-1V2.89c0-.55-.45-1-1-1h0Z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </span>
          <div class="flex flex-col py-4 p-2">
            <h5 class="text-lg font-semibold">Options Orders</h5>
            <p>Place multiple options orders in one-click</p>
          </div>
        </div>

        <!-- Holding Insights-->
        <div
          class="flex items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[30%]"
        >
          <span class="p-4 bg-[#075fe40d] m-4 rounded-lg">
            <div class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-blue-600"
                width="35"
                viewBox="0 0 20 20"
              >
                <defs></defs>
                <path
                  fill="currentColor"
                  class="st0"
                  d="M18.68,13.05c-.44-.73-1.54-.94-2.45-.45-.47.26-.93.57-1.37.87-.44.3-.89.61-1.34.85-.24.13-.33.43-.2.68s.43.33.68.2c.5-.27.97-.59,1.43-.9.44-.3.86-.59,1.29-.82.44-.24.95-.19,1.12.09.09.15.08.36-.02.59-1.08.79-2.27,1.5-3.42,2.19-.73.44-1.46.88-2.17,1.34l-.31.09c-.84-.16-1.66-.42-2.52-.68-.77-.24-1.56-.49-2.37-.66-.07-.01-.14-.01-.21,0-.06.01-.13.03-.19.05l-1.31-2.53,2.12-1.23c.06-.01.16-.02.34,0,.56.11,1.18.35,1.79.6.55.22,1.12.44,1.63.56.15.07.23.2.21.36-.02.16-.13.27-.29.31-.28.05-.74-.12-1.16-.27-.26-.09-.54.04-.64.3-.09.26.04.55.3.64.46.16.94.33,1.38.33.11,0,.21,0,.31-.03.59-.12,1.02-.58,1.09-1.17.07-.59-.24-1.13-.78-1.38-.03-.01-.15-.06-.19-.06-.45-.1-.98-.31-1.51-.52-.64-.26-1.31-.52-1.96-.64-.28-.05-.52-.05-.74,0-.09.02-.18.06-.26.1l-2.1,1.22-.16-.3c-.12-.24-.41-.33-.65-.22l-2.52,1.15c-.1.04-.18.12-.23.21l-.1.18c-.08.15-.08.32,0,.47l2.33,4.62c.06.11.15.2.27.24l.26.1c.06.02.12.03.18.03.08,0,.15-.02.22-.05l2.48-1.22c.08-.04.15-.1.2-.18.13-.21.15-.41.12-.58.62.15,1.25.35,1.86.54.89.28,1.81.56,2.75.73.07.01.15,0,.22-.01l.49-.14s.1-.03.14-.06c.72-.47,1.47-.92,2.21-1.36,1.21-.72,2.45-1.47,3.6-2.32.06-.04.11-.1.14-.17.31-.59.32-1.2.04-1.67ZM4.26,18.46l-2.02-4,1.77-.81,2.04,3.93-1.79.88Z"
                ></path>
                <path
                  fill="currentColor"
                  class="st0"
                  d="M10.64,5.33c0,.22.18.4.4.4h1.77c-.11.2-.29.36-.45.38-.15.02-.31,0-.48,0-.27-.02-.54-.04-.79.02-.17.04-.3.16-.38.33-.1.24-.08.59.08.86.29.36.56.77.82,1.18.27.41.55.84.85,1.22.08.1.2.15.31.15.09,0,.18-.03.25-.09.17-.14.2-.39.06-.56-.28-.35-.54-.74-.81-1.16-.27-.42-.55-.85-.82-1.17.12,0,.24,0,.36.01.22.01.44.02.63,0,.57-.07,1.04-.57,1.18-1.17h.6c.22,0,.4-.18.4-.4s-.18-.4-.4-.4h-.58c-.02-.14-.06-.24-.08-.31-.01-.1-.06-.18-.1-.26h.75c.22,0,.4-.18.4-.4s-.18-.4-.4-.4h-3.2c-.22,0-.4.18-.4.4s.18.4.4.4h.15s0,0,.01,0c.19.02.38.01.58,0,.44-.02.71-.02.9.2.06.06.1.14.1.15,0,.05.01.1.03.15,0,0,0,.03.02.06h-1.8c-.22,0-.4.18-.4.4Z"
                ></path>
                <path
                  fill="currentColor"
                  class="st0"
                  d="M12.64,11.82c2.9,0,5.26-2.36,5.26-5.26S15.55,1.29,12.64,1.29s-5.26,2.36-5.26,5.26,2.36,5.26,5.26,5.26ZM12.64,2.29c2.35,0,4.26,1.91,4.26,4.26s-1.91,4.26-4.26,4.26-4.26-1.91-4.26-4.26,1.91-4.26,4.26-4.26Z"
                ></path>
              </svg>
            </div>
          </span>
          <div class="flex flex-col py-4 p-2">
            <h5 class="text-lg font-semibold">Holding Insights</h5>
            <p>Get fundamental & technical insights for holdings</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Get Your Super Demat in in 3 Simple steps -->
  <section class="container mx-auto px-4 py-24">
    <div class="flex flex-col md:flex-row items-center justify-center">
      <!-- Left Side Content (Image) -->
      <div class="flex-1 md:w-1/2 mb-8 md:mb-0">
        <div class="w-full flex justify-center md:justify-end">
          <img
            loading="lazy"
            decoding="async"
            src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/Super-Demat-in-3-steps.webp"
            class="w-[95] h-auto lg:mr-12"
            alt="Investment Image"
          />
        </div>
      </div>

      <!-- Right Side Content -->
      <div class="flex-1 md:w-1/2 text-center md:text-left">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
        >
          Get Your Super Demat in
          <span class="text-[#efa909]">3 Simple Steps</span>
        </h2>
        <h3
          class="flex font-bold text-md sm:text-lg md:text-xl lg:text-2xl mb-3 text-gray-700"
        >
          <span
            class="inline-flex items-center sm:items-start gap-x-1.5 py-2.5 px-8 rounded-full text-sm mr-4 font-bold bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white"
          >
            STEP 1
          </span>
          Fill Your Details
        </h3>
        <h3
          class="flex font-bold text-md sm:text-lg md:text-xl lg:text-2xl mb-3 text-gray-700"
        >
          <span
            class="inline-flex items-center gap-x-1.5 py-2.5 px-8 rounded-full text-sm mr-4 font-bold bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white"
          >
            STEP 2
          </span>
          Complete KYC Verification
        </h3>
        <h3
          class="flex font-bold text-md sm:text-lg md:text-xl lg:text-2xl mb-3 text-gray-700"
        >
          <span
            class="inline-flex items-center gap-x-1.5 py-2.5 px-8 rounded-full text-sm mr-4 font-bold bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white"
          >
            STEP 3
          </span>
          Your Super Demat is Ready!
        </h3>
        <h3
          class="flex font-bold text-md sm:text-lg md:text-xl lg:text-2xl mb-6 mt-6 text-gray-700"
        >
          Take the First Step
        </h3>

        <form method="post" class="flex items-center">
          <input
            maxlength="400"
            class="w-16 py-3 px-3 border rounded-l-md text-gray-700"
            readonly
            value="+91"
            type="text"
          />
          <input
            maxlength="10"
            minlength="10"
            class="w-1/3 py-3 px-3 border rounded-r-md text-gray-700"
            required
            placeholder="Enter Mobile Number"
            type="tel"
          />
          <button
            type="submit"
            class="py-3 px-4 ml-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition-all ease-in-out duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- Join Our Thriving Community of Traders & Investors -->
  <section class="container px-4 sm:px-8 md:px-16 lg:px-28 mx-auto py-12">
    <div
      class="flex flex-col md:flex-row items-center justify-between w-full rounded-3xl overflow-hidden"
      style="
        background: linear-gradient(
            260deg,
            rgba(3, 166, 222, 0.7) 0%,
            rgba(3, 166, 222, 0.7) 100%
          ),
          url('https://www.definedgesecurities.com/wp-content/uploads/2025/01/neww-scaled.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    >
      <!-- Left Side Content -->
      <div class="flex-1 mb-8 md:mb-0 p-6 sm:p-8 lg:p-12">
        <h2 class="text-gray-900 sm:text-3xl text-2xl font-bold mb-6">
          Join Our Thriving Community of Traders & Investors
        </h2>
        <p class="text-base text-left text-gray-900 mb-8">
          Be a part of striking conversations, share your strategies, or ask
          queries from our team of mentors.
        </p>
        <a
          href="https://forum.definedgesecurities.com/"
          class="px-6 py-3 mt-12 rounded-lg text-white text-base tracking-wider font-semibold outline-none bg-blue-500 overflow-hidden hover:bg-blue-700 border-2 border-white transition-all duration-300"
        >
          Join Now
        </a>
      </div>

      <!-- Right Side (Background Image) -->
      <div class="flex-1"></div>
    </div>
  </section>

  <!-- The Love We Get -->
  <section class="container mx-auto px-4">
    <Testimonial />
  </section>

  <section class="container bg-white mx-auto p-6">
    <Faq />
  </section>

  <section class="bg-gray-100">
    <div class="container mx-auto p-6">
      <div class="p-4 w-full font-[sans-serif]">
        <div class="max-w-full">
          <!-- Wrapper with flex to align the text and input fields horizontally -->
          <div
            class="flex flex-col sm:flex-row items-center mb-6 gap-4 sm:gap-6"
          >
            <!-- Left side text -->
            <h6
              class="text-gray-800 sm:text-xl text-md font-extrabold text-center sm:text-left"
            >
              You are one click away from becoming a
              <span class="text-blue-500">smart trader!</span>
            </h6>
            <!-- Inputs and button on the right -->
            <div
              class="flex flex-col sm:flex-row items-center mb-6 gap-4 sm:gap-6 w-full sm:w-auto"
            >
              <!-- Name input field -->
              <input
                v-model="form.name"
                name="name"
                type="text"
                :class="[
                  'bg-white text-sm px-4 py-3 outline-none w-full sm:w-full',
                  submitted && !form.name
                    ? 'border-2 border-red-500'
                    : 'border',
                ]"
                placeholder="Name"
                required
              />
              <!-- Email input field -->
              <input
                v-model="form.email"
                name="email"
                type="email"
                :class="[
                  'bg-white text-sm px-4 py-3 outline-none w-full sm:w-full',
                  submitted && !form.email
                    ? 'border-2 border-red-500'
                    : 'border',
                ]"
                placeholder="Email"
                required
              />
              <!-- Phone input field -->
              <input
                v-model="form.phone"
                name="phone"
                type="text"
                :class="[
                  'bg-white text-sm px-4 py-3 outline-none w-full sm:w-full',
                  submitted && !form.phone
                    ? 'border-2 border-red-500'
                    : 'border',
                ]"
                placeholder="Phone"
                required
              />
              <!-- Submit button -->
              <button
                type="button"
                @click="handleSubmit"
                class="px-6 py-3 rounded-md text-sm tracking-wider outline-none border border-transparent bg-blue-600 hover:bg-white hover:border-1 hover:border-blue-600 hover:text-blue-600 text-white transition-colors duration-300 w-full sm:w-auto"
              >
                Submit
              </button>
            </div>
          </div>
          <p
            class="text-gray-800 text-sm sm:text-base font-semibold text-center sm:text-right mt-4 sm:mt-6"
          >
            Note: By clicking Submit, I consent to receive emails and calls from
            <span class="font-bold text-blue-500">Definedge</span> for updates.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-blue-500">
    <TreadingJourney />
  </section>
  
</template>

<script>
import { reactive, toRefs, onMounted } from "vue"; // Import from Vue 3 if needed
import Testimonial from "../components/Testimonial.vue";
import Faq from "../components/Faq.vue";
import TreadingJourney from "../components/TreadingJourney.vue";

export default {
  components: {
    Testimonial,
    Faq,
    TreadingJourney,
  },
  data() {
    return {
      openIndex: null, // Stores the currently open FAQ index
      form: {
        name: "",
        email: "",
        phone: "",
      },
      submitted: false,
      currentImageIndex: 0,
      images: [
        "https://www.definedgesecurities.com/wp-content/uploads/2023/09/NEW-119.gif",
        "https://www.definedgesecurities.com/wp-content/uploads/2023/09/NEW-119.gif",
        "https://www.definedgesecurities.com/wp-content/uploads/2023/09/NEW-119.gif",
      ],
      activeAppTab: "ZoneApp",
      activeTradeTab: "optionsTab",
      activeAnalysisTab: "technicalAnalysisTab",
      activeEducationTab: "currentBooksTab",
      activeIndex: 0,
    };
  },
  mounted() {
    // Automatically change images every 3 seconds
    setInterval(this.changeImage, 3000);
  },
  setup() {
    const state = reactive({
      activeAppTab: "ZoneApp",
      activeTradeTab: "optionsTab",
      activeAnalysisTab: "technicalAnalysisTab",
      activeEducationTab: "currentBooksTab",
    });

    return {
      ...toRefs(state),
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true; // Mark the form as submitted
      if (this.validateForm()) {
        // If form is valid, submit the form (here, just logging to the console)
        console.log("Form Submitted:", this.form);
      } else {
        console.log("Please fill out all fields.");
      }
    },
    validateForm() {
      // Check if all fields are filled in
      const { name, email, phone } = this.form;
      return name && email && phone;
    },
    changeImage() {
      // Change the current image to the next one
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    },
  
  },
};
</script>

<style scoped>
section {
  position: relative;
}

section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

@keyframes blink {
  0% {
    color: white;
  }

  50% {
    color: gray;
  }

  100% {
    color: white;
  }
}

/*    */
.blink-text {
  animation: blink 3s infinite;
}

input[type="radio"]:checked + label {
  color: #fff;
  border-bottom: 2px solid #fff;
}

/* Show content based on selected tab using the `peer` selector */
input[type="radio"]:checked ~ .tab-item {
  display: none;
}

input[type="radio"]:checked + label + .tab-item {
  display: block;
}
</style>
