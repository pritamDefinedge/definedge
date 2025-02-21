<template>
  <div class="max-w-screen-xl mx-auto sm:px-4 lg:px-0 px-4">
    <!-- Section Title -->
    <h4
      class="text-blue-700 text-center text-[25px] md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate"
    >
      APPS
    </h4>
    <h5
      class="text-white text-center text-xl font-bold tracking-wider md:text-lg lg:text-2xl xl:text-3xl mt-4 hover:motion-preset-bounce hover:motion-duration-1000 motion-preset-bounce motion-duration-1000"
    >
      Ecosystem That Brings Markets to Your Fingertips
    </h5>

    <!-- Tabs Container -->
    <div
      class="flex justify-center mb-6 sm:gap-3 sm:my-12 my-12 gap-3 xs:gap-2 md:gap-4 lg:gap-x-6"
    >
      <!-- Tab Buttons -->
      <button
        @click="activeAppTab = tabs[0].name"
        :class="{
          'border-b-2 border-blue-500 bg-white text-gray-800':
            activeAppTab === tabs[0].name,
          'bg-[#FFFFFF10] border-2 border-white hover:bg-[fcf7f7] hover:text-[#fff] text-gray-400':
            activeAppTab !== tabs[0].name,
        }"
        class="group relative inline-block overflow-hidden   border-double  motion-scale-in-[0.9] px-8 py-4 text-base lg:text-lg motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur tab-btn text-md rounded-lg font-semibold cursor-pointer focus:outline-none transition duration-300 ease-in-out"
      >
      <span
          class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-[#fcf7f7] opacity-25 transition-all duration-300 ease-out group-hover:w-full"
        ></span>
        <span class="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            style="enable-background: new 0 0 60 60"
            xml:space="preserve"
          >
            <g>
              <path
                fill="#1EAEF7"
                class="st16"
                d="M25.34,31.99c0.39-0.6,0.58-1.27,0.58-1.99s-0.2-1.39-0.58-1.99c-0.39-0.61-0.93-1.06-1.59-1.35l-13.3-5.74  l-0.26,1.02c-0.24,0.94-0.44,1.92-0.58,2.9l-0.1,0.7L20.56,30L9.5,34.48l0.1,0.7c0.14,0.98,0.34,1.96,0.58,2.9l0.26,1.02l13.3-5.74  C24.41,33.05,24.94,32.6,25.34,31.99z"
              ></path>
              <path
                fill="#1EAEF7"
                class="st16"
                d="M50.5,25.53l-0.1-0.7c-0.14-0.98-0.34-1.96-0.58-2.9l-0.26-1.02l-13.3,5.75c-0.66,0.29-1.2,0.74-1.59,1.35  c-0.39,0.6-0.58,1.27-0.58,1.99s0.2,1.39,0.58,1.99c0.39,0.61,0.93,1.06,1.59,1.35l13.3,5.74l0.26-1.02  c0.24-0.94,0.44-1.92,0.58-2.9l0.1-0.7L39.44,30L50.5,25.53z"
              ></path>
              <path
                fill="#1EAEF7"
                class="st16"
                d="M28.01,25.34c0.6,0.39,1.27,0.58,1.99,0.58c0.72,0,1.39-0.2,1.99-0.58c0.61-0.39,1.06-0.93,1.35-1.59  l6.31-14.62L38.8,8.78c-0.85-0.34-1.77-0.64-2.73-0.87l-0.55-0.13l-0.36,0.44c-0.22,0.26-0.4,0.57-0.53,0.91L30,20.56L25.37,9.11  c-0.14-0.33-0.31-0.64-0.53-0.9l-0.36-0.44l-0.55,0.13c-0.96,0.23-1.88,0.53-2.73,0.87l-0.85,0.34l6.31,14.62  C26.95,24.41,27.4,24.94,28.01,25.34z"
              ></path>
              <path
                fill="#1EAEF7"
                class="st16"
                d="M31.99,34.66L31.99,34.66c-0.6-0.39-1.27-0.58-1.99-0.58c-0.72,0-1.39,0.2-1.99,0.58  c-0.61,0.39-1.06,0.93-1.35,1.59l-6.31,14.62l0.85,0.34c0.86,0.34,1.77,0.64,2.73,0.87l0.55,0.13l0.36-0.44  c0.21-0.26,0.39-0.57,0.53-0.9L30,39.44l4.63,11.44c0.14,0.33,0.32,0.64,0.53,0.9l0.36,0.44l0.55-0.13  c0.96-0.23,1.88-0.53,2.73-0.87l0.85-0.34l-6.32-14.62C33.05,35.59,32.6,35.05,31.99,34.66z"
              ></path>
            </g>
          </svg>
          {{ tabs[0].name }}</span
        >
      </button>
      <button
        @click="activeAppTab = tabs[1].name"
        :class="{
          'border-b-2 border-blue-500 bg-white text-gray-800':
            activeAppTab === tabs[1].name,
          'bg-[#FFFFFF10] border-2 border-white hover:bg-[fcf7f7] hover:text-[#fff] text-gray-400':
            activeAppTab !== tabs[1].name,
        }"
        class="group relative inline-block overflow-hidden   border-double  motion-scale-in-[0.9] px-8 py-4 text-base lg:text-lg motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur tab-btn text-md rounded-lg font-semibold cursor-pointer focus:outline-none transition duration-300 ease-in-out"
      >
      <span
          class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-[#fcf7f7] opacity-25 transition-all duration-300 ease-out group-hover:w-full"
        ></span>
        <span class="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 58.73 60"
            width="20px"
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
          {{ tabs[1].name }}
        </span>
      </button>
    
    </div>

    <!-- Tab Content -->
    <div class="flex items-center justify-center space-x-12 -mt-8">
      <!-- Zone App Content -->
      <div v-if="activeAppTab === tabs[0].name" class="w-full md:w-full">
        <div class="flex sm:flex-wrap lg:flex-nowrap flex-wrap justify-between">
          <ul
            class="space-y-4 pt-12 md:pt-24 p-4 lg:pt-24 text-lg w-full md:w-1/2 motion-preset-slide-right motion-duration-1500"
          >
            <h6 class="text-xl font-semibold mb-4 text-left font-sans">
              {{ tabs[0].content.header }}
            </h6>
            <li
              v-for="(feature, idx) in tabs[0].content.features"
              :key="idx"
              class="flex items-center text-base font-sans font-semibold"
            >
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
              <span>{{ feature.text }}</span>
            </li>
            <li class="flex items-start">
              <h6 class="text-xl font-semibold mb-4 text-start">
                {{ tabs[0].content.downloadText }}
              </h6>
            </li>
            <li class="flex items-start">
              <div class="flex space-x-4 justify-start">
                <a
                  v-for="(store, idx) in tabs[0].content.stores"
                  :key="idx"
                  :href="store.link"
                  target="_blank"
                >
                  <img
                    :src="store.imgSrc"
                    :alt="store.altText"
                    class="motion-preset-seesaw"
                  />
                </a>
              </div>
            </li>
          </ul>
          <div
            class="w-full md:w-1/2 motion-preset-slide-left motion-duration-1500"
          >
            <img
              :src="tabs[0].content.imageSrc"
              alt="App Image"
              class="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <!-- OPSTRA App Content -->
      <div v-if="activeAppTab === tabs[1].name" class="w-full md:w-full px-6">
        <div class="flex flex-wrap justify-between">
          <ul
            class="space-y-4 pt-12 md:pt-24 lg:pt-24 text-lg w-full md:w-1/2 motion-preset-slide-right motion-duration-1500"
          >
            <h6 class="text-xl font-semibold mb-4 text-left font-sans">
              {{ tabs[1].content.header }}
            </h6>
            <li
              v-for="(feature, idx) in tabs[1].content.features"
              :key="idx"
              class="flex items-center text-base font-sans font-semibold"
            >
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
              <span>{{ feature.text }}</span>
            </li>
            <li class="flex items-start">
              <h6 class="text-xl font-semibold mb-4 text-start">
                {{ tabs[1].content.downloadText }}
              </h6>
            </li>
            <li class="flex items-start">
              <div class="flex space-x-4">
                <a
                  v-for="(store, idx) in tabs[1].content.stores"
                  :key="idx"
                  :href="store.link"
                  target="_blank"
                  class=""
                >
                  <img
                    :src="store.imgSrc"
                    :alt="store.altText"
                    class="motion-preset-seesaw"
                  />
                </a>
              </div>
            </li>
          </ul>
          <div
            class="w-full md:w-1/2 mt-8 motion-preset-slide-left motion-duration-1500"
          >
            <img
              :src="tabs[1].content.imageSrc"
              alt="App Image"
              class="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeAppTab: this.tabs[0].name,
    };
  },
};
</script>
