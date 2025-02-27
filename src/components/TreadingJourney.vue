<template>
  <div class="container mx-auto">
    <div class="w-full rounded-lg font-[sans-serif] max-w-5xl mx-auto">
      <div class="flex flex-col md:flex-row justify-center items-end">
        <!-- Image on the Left (30% width) on medium and larger screens -->
        <div class="w-full md:w-[35%]">
          <div class="relative">
            <!-- Loop through images, but ensure only one image is displayed at a time -->
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              :alt="'Image ' + (index + 1)"
              class="lg:absolute w-full bottom-0 transition-opacity duration-1000 z-40"
              :class="{
                'opacity-100': currentImageIndex === index,
                hidden: currentImageIndex !== index,
              }"
            />
          </div>
        </div>

        <!-- Content on the Right (70% width) on medium and larger screens -->
        <div class="md:w-[70%] p-10">
          <h1 class="text-3xl font-bold text-white">
            Begin Your Trading Journey in 5 Minutes
          </h1>
          <p class="mt-4 text-sm text-white leading-relaxed">
            With E-KYC done, you can open your demat account in minutes and
            explore our trading universe.
          </p>

          <!-- <button
            type="button"
            class="px-6 py-3 mt-8 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-green-600 hover:bg-green-700"
          >
            Signup Now
          </button> -->
          <button
            type="button"
            class="group relative cursor-pointer px-6 py-3 mt-8 overflow-hidden rounded-md text-sm tracking-wider outline-none border-transparent bg-green-600 hover:bg-white border-2 border-white  text-white transition-colors duration-300"
          >
            <span
              class="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 text-white bg-green-900 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"
            ></span>
            <span
              class="ease relative text-white transition duration-300 group-hover:text-white"
            >
            Signup Now
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue"; // Import from Vue 3 if needed

export default {
  data() {
    return {
      openIndex: null,

      currentImageIndex: 0,
      images: [
        "https://www.definedgesecurities.com/wp-content/uploads/2023/09/NEW-119.gif",
        "https://www.definedgesecurities.com/wp-content/uploads/2023/09/NEW-119.gif",
        "https://www.definedgesecurities.com/wp-content/uploads/2023/09/NEW-119.gif",
      ],
    };
  },
  mounted() {
    // Automatically change images every 3 seconds
    // setInterval(this.changeImage, 3000);
  },
  setup() {
    return {};
  },
  methods: {
    changeImage() {
      // Change the current image to the next one
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    },
  },
};
</script>

<style lang="scss" scoped></style>
