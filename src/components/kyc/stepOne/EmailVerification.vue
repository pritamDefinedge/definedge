<template>
  <div class="w-full lg:w-10/12 mx-auto mb-8">
    <div class="mb-6 lg:hidden block bg-[#2563EB] rounded-2xl">
      <div class="flex justify-center items-center p-4">
        <img :src="src" alt="steps" class="w-full" />
      </div>
    </div>
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
        The only ecosystem worldwide—ready to empower you!
      </div>
    </div>
    <!-- <div class="mb-6 lg:hidden block">
      <div class="flex justify-center items-center">
        <img :src="src" alt="steps" class="w-full" />
      </div>
    </div>
     -->
    <div class="lg:mt-8 w-full">
      <h1
        class="text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-slate-700 font-bold"
      >
        Email
      </h1>
      <div v-if="!otpSent" class="mt-6">
        <label for="email" class="block text-sm font-medium text-slate-500 mb-2"
          >Enter Email Address</label
        >
        <div class="flex flex-wrap items-center gap-4 mb-2 w-full relative">
          <input
            v-model="localEmail"
            @input="updateEmail"
           
            type="email"
            class="w-full lg:w-7/12 text-slate-700 text-sm sm:text-base rounded-md px-6 py-2.5 border-slate-300 shadow-sm border focus:outline-none placeholder:text-sm placeholder:text-slate-300 focus:ring-1 focus:ring-blue-600"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <button
            @click="sendOtp"
            type="button"
            class="mt-3 w-32 flex justify-center bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 focus:outline-none focus:shadow-outline text-sm lg:text-xs xl:text-sm font-medium rounded-md"
          >
            Send OTP
          </button>
        </div>
      </div>

      <div v-if="otpSent" class="mt-6">
        <label for="otp" class="block text-sm font-medium text-slate-500 mb-2"
          >Verify Email OTP</label
        >

        <input
          v-model="localOtp"
          type="text"
          class="w-full lg:w-7/12 text-slate-700 text-sm sm:text-base rounded-md px-4 py-2.5 border-slate-300 shadow-sm border focus:outline-none placeholder:text-sm placeholder:text-slate-300 focus:ring-1 focus:ring-blue-600"
          maxlength="6"
          placeholder="Enter OTP"
          required
        />
        <div class="flex items-center my-1">
          <span class="font-normal text-xs text-slate-700"
            >OTP sent to {{ localEmail }}</span
          >
          <span
            @click="resetForm"
            class="text-xs font-normal text-blue-500 hover:underline cursor-pointer mx-3 md:mx-3 grid"
          >
            Change Email
          </span>
        </div>
        <div class="my-2 flex flex-wrap">
          <div class="flex gap-1 font-normal text-xs text-slate-700">
            Didn't receive OTP?
            <p
              @click="sendOtp"
              class="ml-2 text-xs text-blue-500 hover:underline cursor-pointer mx-0"
            >
              Resend
            </p>
          </div>
        </div>
        <button
          @click="verifyOtp"
          type="button"
          class="mt-3 w-32 flex justify-center bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 focus:outline-none focus:shadow-outline text-sm lg:text-xs xl:text-sm font-medium rounded-md"
        >
          Verify OTP
        </button>
      </div>

      <div class="mt-6">
        <p class="block text-xs font-normal text-slate-600">
          By submitting your contact details, you authorise Definedge Securities
          to call or text you for the purpose of account opening even though you
          may be registered on DND.
        </p>
      </div>
      <!-- Footer -->
      <div class="lg:absolute md:relative relative lg:bottom-0 -bottom-16">
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
export default {
  props: {
    email: String,
    otpSent: Boolean,
    otpVerified: Boolean,
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      localEmail: this.email,
      localOtp: "",
    };
  },
  methods: {
    updateEmail() {
      this.$emit("update:email", this.localEmail);
    },
    sendOtp() {
      this.$emit("send-otp");
    },
    verifyOtp() {
      this.$emit("verify-otp", this.localOtp);
    },
    resetForm() {
      this.localEmail = "";
      this.localOtp = "";
      this.$emit("reset-form");
    },
  },
  watch: {
    email(newVal) {
      this.localEmail = newVal;
    },
  },
};
</script>

<style scoped></style>
