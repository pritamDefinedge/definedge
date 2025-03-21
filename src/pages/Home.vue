<template>
  <section
    class="bg-white dark:bg-gray-900 bg-cover bg-center h-[80vh] sm:h-[80vh] md:h-[70vh] lg:h-[77vh] xl:h-[75vh]"
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
        class="flex flex-col md:flex-row justify-between items-center gap-1 lg:gap-4 md:gap-4 py-2"
      >
        <!-- Trusted by section -->
        <div class="text-center">
          <p class="text-base md:text-lg font-medium text-gray-300">
            Trusted by
            <span
              class="text-white text-lg md:text-xl motion-preset-blink motion-duration-1500"
              >2.3 million</span
            >
            Users & Counting
          </p>
        </div>

        <!-- Coming Soon Announcement Section -->
        <div class="text-center py-4 px-4 rounded-md">
          <div
            class="text-lg md:text-xl font-semibold text-white flex items-center justify-center"
          >
            <span class="font-light text-sm font-sans text-gray-400">
              Coming Soon :
            </span>
            <img
              src="../assets/svgviewer-output.svg"
              alt="super"
              class="ml-2"
              width="20"
            />
            <span
              class="text-primary-500 font-medium text-sm flex items-center ml-2 motion-preset-blink motion-duration-1500"
            >
              Super Algo Trader
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Ecosystem That Brings Markets to Your Fingertips -->
  <Test v-if="!isMobile" :tabs="appTabs" :tabContent="appContent" />
  <section
    v-if="isMobile"
    class="relative bg-gray-900 text-white flex justify-center items-center pt-12"
    style="background-image: linear-gradient(100deg, #26282c 0%, #131416 100%)"
  >
    <AppTabs :tabs="appTabs" :tabContent="appContent" />
  </section>

  <!-- <section
    class="relative bg-gray-900 text-white flex justify-center items-center pt-12"
    style="background-image: linear-gradient(100deg, #26282c 0%, #131416 100%)"
  > -->
  <!-- <AppTabs :tabs="appTabs" :tabContent="appContent" />
     <Test :tabs="appTabs" :tabContent="appContent" />
  </section> -->

  <!-- TRADE & INVEST -->
   
  <section
    class="trade-invest relative text-blace flex justify-center items-center pt-12"
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
    <TradeWithEase />
  </section>

  <!-- FEATURES-->
  <section
    class="bg-[#E9F8FF] relative text-black flex justify-center items-center"
  >
    <Features :features="featuresData" />
  </section>

  <!-- Get Your Super Demat in in 3 Simple steps -->
  <section class="container mx-auto px-4 py-24">
    <GetYourSupremDemat />
  </section>

  <!-- Join Our Thriving Community of Traders & Investors -->
  <section class="container px-4 sm:px-8 md:px-16 lg:px-28 mx-auto py-12">
    <div
      class="flex flex-col lg:flex-row items-center justify-between w-full rounded-3xl overflow-hidden shine shine-anim"
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
        <h2 class="text-gray-900 sm:text-2xl text-2xl font-bold mb-6">
          Join Our Thriving Community of Traders & Investors
        </h2>
        <p class="text-base text-left text-gray-900 mb-8">
          Be a part of striking conversations, share your strategies, or ask
          queries from our team of mentors.
        </p>

        <button
          class="group relative m-1 cursor-pointer overflow-hidden rounded-md bg-[#0268DF] border-2 border-white px-5 py-3 font-mono font-semibold"
        >
          <a href="https://forum.definedgesecurities.com/">
            <span
              class="ease absolute top-1/2 h-0 w-60 origin-center -translate-x-20 rotate-45 bg-blue-900 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"
            ></span>
            <span
              class="ease relative text-white transition duration-300 group-hover:text-white"
              >Join Now</span
            >
          </a>
        </button>
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
              class="text-black text-base font-normal text-center sm:text-left"
            >
              You are one click away from becoming a
              <span class="text-blue-500 text-base">smart trader!</span>
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
                  'bg-white text-sm px-4 py-3 rounded-md outline-none w-full sm:w-full',
                  submitted && !form.name
                    ? 'border-2 border-red-500'
                    : 'border border-gray-300',
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
                  'bg-white text-sm px-4 py-3 rounded-md outline-none w-full sm:w-full',
                  submitted && !form.email
                    ? 'border-2 border-red-500'
                    : 'border border-gray-300',
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
                  'bg-white text-sm px-4 py-3 outline-none rounded-md w-full sm:w-full',
                  submitted && !form.phone
                    ? 'border-2 border-red-500'
                    : 'border border-gray-300',
                ]"
                placeholder="Phone"
                required
              />

              <!-- Submit button -->
              <button
                type="button"
                @click="handleSubmit"
                class="group relative cursor-pointer px-6 py-3 overflow-hidden rounded-md text-sm tracking-wider outline-none border-transparent bg-[#0089F7] hover:bg-white border-2 border-white hover:text-white text-white transition-colors duration-300 w-full sm:w-full lg:w-[15rem]"
              >
                <span
                  class="ease absolute top-1/2 h-0 w-48 origin-center -translate-x-20 rotate-45 text-white bg-blue-600 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"
                ></span>
                <span
                  class="ease relative text-white transition duration-300 group-hover:text-white"
                >
                  Submit
                </span>
              </button>
            </div>
          </div>
          <p
            class="text-gray-500 tracking-wide text-xs sm:text-xs font-semibold text-center sm:text-right mt-4 sm:mt-6"
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
import Test from "./Test.vue";

import TradeInvest from "../components/TradeInvest.vue";
import TradeInvestData from "../data/TradeInvest.json";

import Analysis from "../components/Analysis.vue";
import AnalysisData from "../data/Analysis.json";

import Education from "../components/Education.vue";
import EducationData from "../data/Education.json";

import Features from "../components/Features.vue";
import FeaturesData from "../data/Features.json";

import TradeWithEase from "../components/TradeWithEase.vue";
import GetYourSupremDemat from "../components/GetYourSupremDemat.vue";

export default {
  components: {
    Testimonial,
    Faq,
    TreadingJourney,
    Banner,
    AppTabs,
    Test,
    TradeInvest,
    Analysis,
    Education,
    TradeWithEase,
    GetYourSupremDemat,
    Features,
  },
  data() {
    return {
      appTabs: AppTabData.tabs,
      appContent: AppTabData.tabContent,
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
      isMobile: window.innerWidth < 768,
    };
  },
  mounted() {
    // Automatically change images every 3 seconds
    // setInterval(this.changeImage, 3000);
    window.addEventListener("resize", this.updateScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenSize);
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
    updateScreenSize() {
      this.isMobile = window.innerWidth < 768;
    },

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
