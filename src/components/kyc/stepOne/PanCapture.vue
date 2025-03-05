<template>
  <div class="w-full lg:w-10/12 mx-auto mb-8">
    <div
      class="text-sm text-black font-serif relative lg:flex items-center mb-6 lg:mb-0 mt-6"
    >
      <div
        class="text-blue-600 text-lg font-medium flex whitespace-nowrap"
      ></div>
      <div class="lg:ml-2.5 text-am-400 flex">
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
      <h1 class="text-2xl font-bold">PAN Capture</h1>
      <div class="mt-6">
        <label for="pan" class="block text-sm font-medium text-slate-500 mb-2"
          >Enter PAN Number</label
        >
        <div class="flex flex-wrap items-center gap-4 mb-2 w-full relative">
          <input
            v-model="localPan"
             @focus="handleFocus"
            @blur="handleBlur"
            type="text"
            class="w-full lg:w-7/12 text-slate-700 text-sm sm:text-base rounded-md px-6 py-2.5 border-slate-300 shadow-sm border focus:outline-none placeholder:text-sm placeholder:text-slate-300 focus:ring-1 focus:ring-blue-600"
            placeholder="Enter your PAN number"
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
</template>

<script>
export default {
  props: {
    pan: String,
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
    handleFocus() {
      this.$emit("toggle-keyword-section", true);
    },
    handleBlur() {
      this.$emit("toggle-keyword-section", false);
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
