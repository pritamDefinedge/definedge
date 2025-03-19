<template>
  <div class="w-full lg:w-10/12 mx-auto mb-8">
    <div class="mb-6 lg:hidden block bg-[#2563EB] rounded-2xl">
      <div class="flex relative justify-center items-center p-4">
        <img :src="src" alt="steps" class="w-full" />
        <div
          class="voltage-line absolute bottom-4 left-12 sm:left-24 ipad-mini:left-20 ipad-air:left-22 ipad-pro11:left-24 ipad-pro12:left-30 w-[13%] h-[10px] overflow-hidden justify-center items-center"
        >
          <SvgWaveMobile />
        </div>
      </div>
    </div>

    <div class="w-full">
      <div
        class="text-sm text-black font-serif relative lg:flex items-center mb-6 lg:mb-0 mt-6"
      >
        <div
          class="text-blue-600 text-lg font-medium flex whitespace-nowrap"
        ></div>
        <div class="text-am-400 flex">
          <span class="inline">
            <img
              class="w-4 h-4 mr-1.5 -mt-0.5"
              src="https://signup.definedgesecurities.com/assets/offer-star-78603b57.svg"
              alt="definedge"
            />
          </span>
          Pioneers of Noiseless Charts, Options platform, RS, Breadth & more!
        </div>
      </div>

      <div class="lg:mt-8 w-full">
        <h1
          class="text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-slate-700 font-bold"
        >
          Enter PAN
        </h1>
        <div class="mt-6">
          <label
            for="pan"
            class="block text-sm font-medium text-slate-500 mb-2"
          >
            PAN</label
          >
          <div class="flex flex-wrap items-center gap-4 mb-2 w-full relative">
            <input
              v-model="localPan"
              type="text"
              class="w-full lg:w-7/12 text-slate-700 text-sm sm:text-base rounded-md px-6 py-2.5 border-slate-300 shadow-sm border focus:outline-none placeholder:text-sm placeholder:text-slate-300 focus:ring-1 focus:ring-blue-600"
              placeholder="ENTER  PAN"
              maxlength="10"
              required
            />
          </div>
          <button
            @click="submitPan"
            type="button"
            class="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Continue
          </button>
        </div>
      </div>
      <!-- Footer -->
      <div class="lg:absolute md:relative relative lg:bottom-0 -bottom-10">
        <h4 class="text-xs text-slate-500 font-bold">
          Definedge Securities Broking Private Limited
        </h4>
        <p class="text-xs text-slate-500 font-normal leading-4 mt-1">
          <span class="text-slate-500">Member of NSE, BSE &amp; MCX : </span>
          SEBI Registration No. :
          <span class="text-slate-500">INZ000301132 | CDSL-lN-DP-662-2021</span>
          <span class="px-2"> | </span> Membership No.:
          <span class="text-slate-500">NSE-90237 | BSE-6766 | MCX-56960</span>
          <span class="px-2"> | </span> Membership No.:
          <span class="text-slate-500">CDSL-12094700</span>
          <span class="px-2"> | </span> NSE CM Code:
          <span class="text-slate-700">M70017</span>
          <span class="px-2"> | </span> AMFI Registration no.:
          <span class="text-slate-700">ARN: 206385</span>
          <span class="px-2"> | </span> Research Analyst:
          <span class="text-slate-500">INH000010344</span>
          <span class="px-2"> | </span> CIN Number:
          <span class="text-slate-500">U65990PN2021PTC198378</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SvgWaveMobile from "../../SvgWaveMobile.vue";

export default {
  components: {
    SvgWaveMobile,
  },
  props: {
    pan: String,
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      localPan: this.pan,
    };
  },
  methods: {
    submitPan() {
      this.$emit("update:pan", this.localPan);
      this.$emit("submit-pan");
    },
    resetForm() {
      this.localPan = "";
    },
  },
  watch: {
    pan(newVal) {
      this.localPan = newVal;
    },
  },
};
</script>

<style scoped></style>
