<template>
  <div class="max-w-screen-xl mx-auto px-4">
    <!-- Section Title -->
    <h4
      class="text-blue-700 text-center text-[25px] md:text-lg lg:text-xl xl:text-2xl font-bold motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate"
    >
      APPS
    </h4>
    <h5
      class="text-white text-center text-3xl font-extrabold md:text-lg lg:text-xl xl:text-2xl mt-4 hover:motion-preset-bounce hover:motion-duration-1000 motion-preset-bounce motion-duration-1000"
    >
      Ecosystem That Brings Markets to Your Fingertips
    </h5>

    <!-- Tabs Container -->
    <div class="flex justify-center mt-8 mb-6 gap-x-6">
      <!-- Tab Buttons -->
      <button
        @click="activeAppTab = tabs[0].name"
        :class="{
          'border-b-2 border-blue-500 bg-white text-gray-800':
            activeAppTab === tabs[0].name,
          'bg-gray-100 border-blue-500 text-gray-700':
            activeAppTab !== tabs[0].name,
        }"
        class="motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur tab-btn px-6 py-2 text-md rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
      >
        {{ tabs[0].name }}
      </button>
      <button
        @click="activeAppTab = tabs[1].name"
        :class="{
          'border-b-2 border-blue-500 bg-white text-gray-800':
            activeAppTab === tabs[1].name,
          'bg-gray-100 border-blue-500 text-gray-700':
            activeAppTab !== tabs[1].name,
        }"
        class="motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur tab-btn px-6 py-2 text-md rounded-lg font-semibold cursor-pointer hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
      >
        {{ tabs[1].name }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="flex items-center justify-center space-x-12">
      <!-- Zone App Content -->
      <div v-if="activeAppTab === tabs[0].name" class="w-full md:w-full px-6">
        <div class="flex flex-wrap justify-between">
          <ul
            class="space-y-4 text-lg w-full md:w-1/2 motion-preset-slide-right motion-duration-1500"
          >
            <h6 class="text-xl font-extrabold mb-4 text-left">
              {{ tabs[0].content.header }}
            </h6>
            <li
              v-for="(feature, idx) in tabs[0].content.features"
              :key="idx"
              class="flex items-center"
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
              <h6 class="text-xl font-extrabold mb-4 text-start">
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
            class="w-full md:w-1/2 mt-8 motion-preset-slide-left motion-duration-1500"
          >
            <img
              :src="tabs[0].content.imageSrc"
              alt="App Image"
              class="w-[80%] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <!-- OPSTRA App Content -->
      <div v-if="activeAppTab === tabs[1].name" class="w-full md:w-full px-6">
        <div class="flex flex-wrap justify-between">
          <ul
            class="space-y-4 text-lg w-full md:w-1/2 motion-preset-slide-right motion-duration-1500"
          >
            <h6 class="text-xl font-extrabold mb-4 text-left">
              {{ tabs[1].content.header }}
            </h6>
            <li
              v-for="(feature, idx) in tabs[1].content.features"
              :key="idx"
              class="flex items-center"
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
              <h6 class="text-xl font-extrabold mb-4 text-start">
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
              class="w-[80%] rounded-lg shadow-lg"
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
