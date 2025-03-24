<template>
  <div class="container mx-auto py-24">
    <div class="mb-8 md:mb-0 text-center">
      <h2
        class="text-[#005BDF] text-center text-[15px] md:text-lg lg:text-xl xl:text-[15px] font-normal tracking-[5px]"
        :class="{
          'motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate':
            hasScrolled,
        }"
      >
        FEATURES
      </h2>
      <h5
        class="text-[#2A394E] text-center sm:px-4 px-2 lg:px-0 md:px-0 text-xl py-4 font-bold tracking-wider md:text-lg lg:text-2xl xl:text-3xl"
        :class="{
          'motion-preset-bounce motion-duration-1000': hasScrolled,
        }"
      >
        Innovative Features of Our Ecosystem
      </h5>
    </div>
    <div class="flex flex-wrap gap-4 py-6 justify-center px-4">
      <!-- Feature Card Template -->

      <div
        v-for="feature in features"
        :key="feature.id"
        class="group relative overflow-hidden font-medium flex items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-[45%] lg:w-[30%]"
        :class="{
          '-motion-translate-y-in-50 motion-ease-bounce': hasScrolled,
        }"
      >
        <!-- <div
        v-for="(feature, index) in features"
        :key="feature.id"
        class="group relative overflow-hidden font-medium flex items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 transition-all duration-500 ease-in-out w-full sm:w-full md:w-[45%] lg:w-[30%]"
        :class="{
          'motion-preset-fade': hasScrolled,
          [`motion-delay-[${(index + 1) * 100}ms]`]: hasScrolled,
        }"
      > -->
        <span
          class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-[#4cbfe6] opacity-30 transition-all duration-300 ease-out group-hover:w-full"
        ></span>
        <span
          class="p-4 bg-[#075fe40d] m-4 rounded-lg -motion-translate-y-in-50 motion-ease-bounce"
        >
          <div class="mr-1">
            <div
              v-html="feature.icon"
              class="motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur -motion-translate-x-in-100 motion-translate-y-in-75 motion-preset-seesaw"
            ></div>
          </div>
        </span>

        <div class="flex flex-col py-4 p-2">
          <h5
            class="font-semibold text-sm mb-[1px] leading-5 text-black relative group-hover:text-black"
          >
            {{ feature.title }}
          </h5>
          <p
            class="text-xs text-[#000000] leading-5 mt-2 font-medium tracking-[0.6px] relative group-hover:text-black"
          >
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Props
defineProps({
  features: Array,
});

// Reactive state
const hasScrolled = ref(false);
const scrollThreshold = ref(4500);

// Methods
const setActiveTab = (tabId) => {
  activeEducationTab.value = tabId;
};

const onScroll = () => {
  const windowWidth = window.innerWidth;
  scrollThreshold.value = windowWidth <= 768 ? 7500 : 4500;

  const scrollPosition = window.scrollY;
  hasScrolled.value = scrollPosition > scrollThreshold.value;
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
