<template>
  <section class="flex flex-col w-full md:w-9/12 mx-auto lg:my-8 md:my-8 my-0">
    <div
      class="bg-white md:bg-slate-200 lg:bg-slate-200 bg-opacity-40 p-2.5 my-0 lg:my-8 rounded-2xl"
    >
      <div class="w-full bg-white mx-auto rounded-2xl overflow-hidden p-2.5">
        <div class="relative mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
          <!-- Left Section (Personal Information Step) -->
          <CommonLeftSection
            :src="desktopImage"
            :steps="[1]"
            :toggleModal="toggleModal"
          />

          <!-- Right Section (Sign Up Form) -->
          <section
            class="lg:col-span-8 h-screen md:h-full lg:h-full sm:h-screen overflow-auto relative"
          >
            <!-- Doc Guidelines Button (Desktop) -->
            <div
              @click="toggleModal"
              class="m-1 flex justify-end items-center absolute right-1 z-50"
            >
              <div class="hidden lg:block">
                <div
                  class="flex items-center border border-slate-200 px-4 py-2 text-xs rounded-full cursor-pointer"
                >
                  <div class="w-4 h-4 flex-none">
                    <img
                      class="w-4 h-4"
                      src="../assets/file-text-icon.svg"
                      alt="definedge"
                    />
                  </div>
                  <button
                    @click="toggleModal"
                    class="ml-1 pt-0.5 whitespace-nowrap text-xs rounded-md transition-all ease-in-out duration-200"
                  >
                    Doc Guidelines
                  </button>
                </div>
              </div>
            </div>
            <div class="stepOne">
              <SendMobileOtp
                :src="mobileImage"
                :mobileNumber="mobileNumber"
                :otp-sent="otpSent"
                :otp-verified="otpVerified"
                @update:mobileNumber="mobileNumber = $event"
                @send-otp="sendOtp"
                @verify-otp="verifyOtp"
                @reset-form="resetForm"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
  <DocGuideLince
    :isVisible="isModalVisible"
    @update:isVisible="isModalVisible = $event"
  />
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import SendMobileOtp from "../components/kyc/stepOne/SendMobileOtp.vue";
import CommonLeftSection from "../components/kyc/CommonLeftSection.vue";
import { useRouter } from "vue-router";
import DocGuideLince from "../components/DocGuideLince.vue";

// import imageSrc from "../assets/steps/side1.svg";
// Import images
import desktopImage from "../assets/steps/side1.svg";
import mobileImage from "../assets/steps/blue/1.svg";

export default {
  components: {
    SendMobileOtp,
    CommonLeftSection,
    DocGuideLince,
  },
  setup() {
    const state = reactive({
      mobileNumber: "",
      otpSent: false,
      otpVerified: false,
      otp: "",
      isModalVisible: false,
    });
    const router = useRouter();

    const sendOtp = () => {
      if (state.mobileNumber.length === 10) {
        state.otpSent = true;
        state.otpVerified = false;
        state.otp = "123456";
        alert("OTP sent successfully!");
      } else {
        alert("Please enter a valid mobile number.");
      }
    };

    const verifyOtp = (enteredOtp) => {
      console.log(enteredOtp);
      // if (enteredOtp === state.otp) { // Compare with the stored OTP
      state.otpVerified = true;
      router.push("/email-verification");
      // } else {
      //   alert("Invalid OTP, please try again.");
      // }
    };

    const resetForm = () => {
      state.mobileNumber = "";
      state.otpSent = false;
      state.otpVerified = false;
      state.otp = "";
    };

    const toggleModal = () => {
      console.log("test");
      state.isModalVisible = !state.isModalVisible;
    };

    return {
      ...toRefs(state),
      sendOtp,
      verifyOtp,
      resetForm,
      toggleModal,
      desktopImage,
      mobileImage,
    };
  },
};
</script>

<style scoped></style>
