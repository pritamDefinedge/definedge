<template>
  <section
    class="bg-white dark:bg-gray-900 bg-cover bg-center h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh]"
    style="
      background-image: url('https://www.definedgesecurities.com/wp-content/uploads/2025/02/definedge-banner-scaled.webp');
    "
  >
    <Banner />
  </section>

  <section class="bg-gray-800">
    <div class="max-w-screen-xl mx-auto px-4">
      <!-- Flex container for both sections -->
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-1 lg:gap-4 md:gap-4 py-3"
      >
        <!-- Trusted by section -->
        <div class="text-center">
          <p class="text-base md:text-lg font-medium text-gray-300">
            Trusted by
            <strong
              class="text-white text-lg md:text-xl motion-preset-blink motion-duration-1500"
              >2.3 million</strong
            >
            Users &amp; Counting
          </p>
        </div>

        <!-- Coming Soon Announcement Section -->
        <div class="text-center py-4 px-4 rounded-md">
          <div class="text-lg md:text-xl font-semibold text-white">
            <span class="font-light text-sm font-sans text-gray-400"
              >Coming Soon :
            </span>
            <span
              class="text-primary-500 font-medium text-sm motion-preset-blink motion-duration-1500"
            >
              Super Algo Trader
            </span>
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
    <AppTabs :tabs="appTabs" />
  </section>

  <!-- TRADE & INVEST -->
  <section
    class="relative text-blace flex justify-center items-center pt-12"
    style="
      background-image: linear-gradient(312deg, #1e50d14d 0%, #31c19d4d 100%);
      background-color: transparent;
    "
  >
    <TradeInvest :tabs="tradeInvestTabs" :tabContent="tradeInvestContent" />
  </section>

  <!--ANALYSIS -->
  <section
    class="relative bg-white text-black flex justify-center items-center pt-12 sm:py-12 py-12"
  >
    <Analysis :tabs="analysisTabs" :tabContent="analysisContent" />
  </section>

  <!-- EDUCATION -->
  <section
    class="relative text-black flex justify-center items-center pt-12"
    style="
      background-color: transparent;
      background-image: linear-gradient(312deg, #1e50d14d 0%, #31c19d4d 100%);
    "
  >
    <Education :tabs="educationTabs" :tabContent="educationContent" />
  </section>

  <!-- Invest & Trade with Ease -->
  <section class="container mx-auto px-4 py-24">
    <div class="flex lg:px-28 flex-col md:flex-row">
      <!-- Left Side Content -->
      <div class="flex-1 mb-8 md:mb-0">
        <h2 class="text-3xl font-bold text-[#2A394E] mb-4 tracking-[0.5px]">
          Invest & Trade with Ease
        </h2>
        <p class="text-base mb-6 font-sans">
          A Definedge Securities demat and trading account opens endless
          possibilities for you. Make smarter decisions and invest or trade in
          any segment of your choice with our trading tools & education.
        </p>

        <div class="flex flex-wrap gap-4">
          <!-- Equity -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%] motion-preset-fade motion-delay-0"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600 motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur -motion-translate-x-in-100 motion-translate-y-in-75 motion-preset-seesaw"
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
            <h5 class="text-sm font-semibold text-black">Equity</h5>
          </div>

          <!-- Commodities -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%] motion-preset-fade motion-delay-0"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600 motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur -motion-translate-x-in-100 motion-translate-y-in-75 motion-preset-seesaw"
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
            <h5 class="text-sm font-semibold text-black">Commodities</h5>
          </div>

          <!-- ETFs -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%] motion-preset-fade motion-delay-[200ms]"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600 motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur -motion-translate-x-in-100 motion-translate-y-in-75 motion-preset-seesaw"
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
            <h5 class="text-sm font-semibold text-black">ETFs</h5>
          </div>

          <!--Mutual Funds -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%] motion-preset-fade motion-delay-[200ms]"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600 motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur -motion-translate-x-in-100 motion-translate-y-in-75 motion-preset-seesaw"
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
            <h5 class="text-sm font-semibold text-black">Mutual Funds</h5>
          </div>
          <!-- F&O -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%] motion-preset-fade motion-delay-[400ms]"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600 motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur -motion-translate-x-in-100 motion-translate-y-in-75 motion-preset-seesaw"
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
            <h5 class="text-sm font-semibold text-black">F&O</h5>
          </div>
          <!-- IPO -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%] motion-preset-fade motion-delay-[400ms]"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600 motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur -motion-translate-x-in-100 motion-translate-y-in-75 motion-preset-seesaw"
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
            <h5 class="text-sm font-semibold text-black">IPO</h5>
          </div>

          <!-- Debts/Bonds -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%] motion-preset-fade motion-delay-[600ms]"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600 motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur -motion-translate-x-in-100 motion-translate-y-in-75 motion-preset-seesaw"
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
            <h5 class="text-sm font-semibold text-black">Debts/Bonds</h5>
          </div>

          <!--SIP -->
          <div
            class="flex items-center border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[44%] motion-preset-fade motion-delay-[600ms]"
          >
            <span class="p-4 bg-[#075fe40d] mr-4">
              <div class="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-600 motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur -motion-translate-x-in-100 motion-translate-y-in-75 motion-preset-seesaw"
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
            <h5 class="text-sm font-semibold text-black">SIP</h5>
          </div>
        </div>
      </div>

      <!-- Right Side Image -->
      <div class="flex-1">
        <img
          loading="lazy"
          decoding="async"
          src="https://www.definedgesecurities.com/wp-content/uploads/2025/02/01-IPOS-IMAGE-02-1024x1024.webp"
          class="w-full h-auto motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur"
          alt="Investment Image"
        />
      </div>
    </div>
  </section>

  <!-- FEATURES-->
  <section
    class="bg-[#E9F8FF] relative text-black flex justify-center items-center"
  >
    <Features :features="featuresData" />
  </section>

  <!-- Get Your Super Demat in in 3 Simple steps -->
  <section class="container mx-auto px-4 py-24">
    <div class="flex flex-col md:flex-row items-center justify-center">
      <!-- Left Side Content (Image) -->
      <div class="flex-1 md:w-1/2 mb-8 md:mb-0">
        <div
          class="w-full flex justify-center md:justify-end motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur"
        >
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
          class="text-xl text-[#2A394E] sm:text-3xl md:text-4xl lg:text-3xl font-bold mb-12 leading-[40px] tracking-[0.5px]"
        >
          Get Your Super Demat in <br /><span class="inline-flex gap-4"
            >in
            <p class="text-[#efa909] motion-preset-typewriter-[15]">
              3 Simple Steps
            </p></span
          >
        </h2>
        <h3 class="flex font-semibold text-md text-base mb-3 text-[#3d3e40]">
          <span
            class="inline-flex items-center sm:items-start gap-x-1.5 py-1.5 px-6 rounded-full text-sm mr-4 font-bold bg-[#0065d81a] text-[#9aa7b5]"
          >
            STEP 1
          </span>
          Fill Your Details
        </h3>
        <h3 class="flex font-semibold text-md text-base mb-3 text-[#3d3e40]">
          <span
            class="inline-flex items-center sm:items-start gap-x-1.5 py-1.5 px-6 rounded-full text-sm mr-4 font-bold bg-[#0065d81a] text-[#9aa7b5]"
          >
            STEP 2
          </span>
          Complete KYC Verification
        </h3>
        <h3 class="flex font-semibold text-md text-base mb-3 text-[#3d3e40]">
          <span
            class="inline-flex items-center sm:items-start gap-x-1.5 py-1.5 px-6 rounded-full text-sm mr-4 font-bold bg-[#0065d81a] text-[#9aa7b5]"
          >
            STEP 3
          </span>
          Your Super Demat is Ready!
        </h3>
        <h3
          class="flex font-bold text-md sm:text-lg md:text-lg lg:text-lg mb-4 mt-12 text-[#000000]"
        >
          Take the First Step
        </h3>

        <form method="post" class="flex items-center">
          <input
            maxlength="400"
            class="w-16 py-3 px-3 border border-[#b7afaf85] rounded-l-md text-gray-700"
            readonly
            value="+91"
            type="text"
          />
          <input
            maxlength="10"
            minlength="10"
            class="w-1/3 py-3 px-3 border border-[#b7afaf85] rounded-r-md text-gray-700"
            required
            placeholder="Enter Mobile Number"
            type="tel"
          />
          <button
            type="submit"
            class="py-3 px-4 ml-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition-all ease-in-out duration-300 transform hover:scale-105 motion-preset-seesaw"
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
import Banner from "../components/Banner.vue";

import AppTabs from "../components/AppTabs.vue";
import AppTabData from "../data/AppTab.json";

import TradeInvest from "../components/TradeInvest.vue";
import TradeInvestData from "../data/TradeInvest.json";

import Analysis from "../components/Analysis.vue";
import AnalysisData from "../data/Analysis.json";

import Education from "../components/Education.vue";
import EducationData from "../data/Education.json";

import Features from "../components/Features.vue";
import FeaturesData from "../data/Features.json";

export default {
  components: {
    Testimonial,
    Faq,
    TreadingJourney,
    Banner,
    AppTabs,
    TradeInvest,
    Analysis,
    Education,
    Features,
  },
  data() {
    return {
      appTabs: AppTabData,
      tradeInvestTabs: TradeInvestData.tabs,
      tradeInvestContent: TradeInvestData.tabContent,
      analysisTabs: AnalysisData.tabs,
      analysisContent: AnalysisData.tabContent,
      educationTabs: EducationData.tabs,
      educationContent: EducationData.tabContent,
      featuresData: FeaturesData,
      openIndex: null,
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
    // setInterval(this.changeImage, 3000);
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
