<template>
  <div class="flex flex-col md:flex-row items-center justify-center">
    <!-- Left Side Content (Image) -->
    <div class="flex-1 md:w-1/2 mb-8 md:mb-0">
      <div
        class="w-full flex justify-center md:justify-end"
        :class="{
          'motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur':
            hasScrolled,
        }"
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
    <div
      class="flex-1 md:w-1/2 text-center md:text-left"
      :class="{
        'motion-preset-slide-left motion-duration-1500': hasScrolled,
      }"
    >
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

      <form method="post" class="flex flex-wrap sm:flex-1 gap-2 ">
        <span class="flex w-full sm:w-full lg:w-1/2 md:w-full">
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
            class="w-full  py-3 px-3 border border-[#b7afaf85] rounded-r-md text-gray-700"
            required
            placeholder="Enter Mobile Number"
            type="tel"
          />
        </span>
        <button
          class="group relative cursor-pointer overflow-hidden rounded-md border-2 bg-blue-500 border-white py-3 px-4 focus:outline-none font-semibold transition-all ease-in-out duration-300 transform hover:scale-105 motion-preset-seesaw"
        >
          <span
            class="ease absolute top-1/2 h-0 w-60 origin-center -translate-x-20 rotate-45 bg-blue-900 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"
          ></span>
          <span
            class="ease relative text-white transition duration-300 group-hover:text-white"
          >
            Get Started</span
          >
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasScrolled: false,
      scrollThreshold: 5000,
    };
  },
  methods: {
    onScroll() {
      const windowWidth = window.innerWidth;
      console.log(windowWidth);
      if (windowWidth <= 768) {
        this.scrollThreshold = 8500;
      } else {
        this.scrollThreshold = 5000;
      }

      const scrollPosition = window.scrollY;
      this.hasScrolled = scrollPosition > this.scrollThreshold;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped></style>
