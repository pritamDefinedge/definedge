<template>
  <div class="container mx-auto  py-24">
    <div class="mb-8 md:mb-0 text-center">
      <h2
        class="text-[#005BDF] text-center text-[15px] md:text-lg lg:text-xl xl:text-[15px] font-normal tracking-[5px] motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate"
      >
        FEATURES
      </h2>
      <h5
        class="text-[#2A394E] text-center text-xl py-4 font-bold tracking-wider md:text-lg lg:text-2xl xl:text-3xl  hover:motion-preset-bounce hover:motion-duration-1000 motion-preset-bounce motion-duration-1000"
      >
        Innovative Features of Our Ecosystem
      </h5>
    </div>
    <div class="flex flex-wrap gap-4 py-6 justify-center">
      <!-- Feature Card Template -->
      <div
        v-for="feature in features"
        :key="feature.id"
        class="flex items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[30%] -motion-translate-y-in-50 motion-ease-bounce"
      >
        <!-- class="flex items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 transition w-full sm:w-full md:w-full lg:w-[30%]" -->
        <span class="p-4 bg-[#075fe40d] m-4 rounded-lg -motion-translate-y-in-50 motion-ease-bounce">
          <div class="mr-1">
            <div
              v-html="feature.icon"
              class="motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur -motion-translate-x-in-100 motion-translate-y-in-75 motion-preset-seesaw"
            ></div>
          </div>
        </span>

        <div class="flex flex-col py-4 p-2">
          <h5 class="font-semibold text-sm text-black">{{ feature.title }}</h5>
          <p class="text-xs text-[#000000] leading-5 font-medium tracking-[0.6px]">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    features: Array,
  },
  data() {
    return {};
  },
};
</script>
