<template>
  <div class="max-w-screen-xl mx-auto px-4">
    <!-- Section Title -->
    <h2
      class="text-[#005BDF] text-center text-[15px] md:text-lg lg:text-xl xl:text-[15px] font-normal tracking-[5px] motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate"
    >
      ANALYSIS 
    </h2>
    <h5 class="text-[#2A394E] text-center text-xl font-bold tracking-wider md:text-lg lg:text-2xl xl:text-3xl mt-4 hover:motion-preset-bounce hover:motion-duration-1000 motion-preset-bounce motion-duration-1000">
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
          'border-2 border-blue-500 bg-white text-gray-800':
            activeAnalysisTab === tab.id,
          'bg-[#FFFFFF47] border-2 border-white text-gray-700':
            activeAnalysisTab !== tab.id,
        }"
        class="flex min-w-[150px] px-6 py-3 text-[13px] sm:text-sm md:text-sm text-base lg:text-lg motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur tab-btn text-md rounded-lg font-semibold cursor-pointer focus:outline-none transition duration-300 motion-scale-in-[0.5] ease-in-out"
      >
        {{ tab.label }}
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
                this all-in-one platform empowers traders with deep insights and
                advanced tools.
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
                >Price, RS, Breadth, Momentum, Reversal, Matrix, Volumes & much
                more</span
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
              <span>Strategy Backtesting for Intraday, Positional & BTST</span>
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
                and fund managers to dig deep and find investments that fit your
                financial goals.</span
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
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import AnalysisData from "../data/Analysis.json";

export default {
  data() {
    return {
      tabs: AnalysisData.tabs,
      activeAnalysisTab: "technicalAnalysisTab",
    };
  },

  setup() {
    const state = reactive({
      activeAnalysisTab: "technicalAnalysisTab",
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
