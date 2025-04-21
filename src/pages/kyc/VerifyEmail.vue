<template>
  <section class="flex flex-col w-full md:w-9/12 mx-auto lg:my-8 md:my-8 my-0">
    <div
      class="bg-white md:bg-slate-200 lg:bg-slate-200 bg-opacity-40 p-2.5 my-0 lg:my-8 rounded-2xl"
    >
      <div class="w-full bg-white mx-auto rounded-2xl overflow-hidden p-2.5">
        <div class="relative mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
          <!-- Left Section (Common for both steps) -->
          <CommonLeftSection
            :src="desktopImage"
            :steps="[1]"
            :toggleModal="toggleModal"
            :width="10"
          />

          <!-- Right Section (Email Verification Form) -->
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
                    class="ml-1 pt-0.5 whitespace-nowrap text-xs rounded-md transition-all ease-in-out duration-200"
                  >
                    Doc Guidelines
                  </button>
                </div>
              </div>
            </div>

            <div class="stepOne">
              <EmailVerification
                :src="mobileImage"
                :width="10"
                :email="email"
                :otp-sent="emailOtpSent"
                :otp-verified="emailOtpVerified"
                @update:email="email = $event"
                @send-otp="sendEmailOtp"
                @verify-otp="verifyEmailOtp"
                @reset-form="resetEmailForm"
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
import EmailVerification from "../../components/kyc/stepOne/EmailVerification.vue";
import CommonLeftSection from "../../components/kyc/CommonLeftSection.vue";
import { useRouter } from "vue-router";
import DocGuideLince from "../../components/DocGuideLince.vue";

// import imageSrc from "../assets/steps/side2.svg";

import desktopImage from "../../assets/steps/side2.svg";
import mobileImage from "../../assets/steps/blue/2.svg";

export default {
  components: {
    EmailVerification,
    CommonLeftSection,
    DocGuideLince,
  },
  setup() {
    const state = reactive({
      email: "",
      emailOtpSent: false,
      emailOtpVerified: false,
      emailOtp: "",
      isModalVisible: false,
    });
    const router = useRouter();

    const sendEmailOtp = () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailPattern.test(state.email)) {
        state.emailOtpSent = true;
        state.emailOtpVerified = false;
        state.emailOtp = "123456";
        alert("OTP sent successfully to your email!");
      } else {
        alert("Please enter a valid email.");
      }
    };

    const verifyEmailOtp = (enteredOtp) => {
      if (enteredOtp === state.emailOtp) {
        state.emailOtpVerified = true;
        alert("Email OTP verified successfully!");
        router.push("/capture-pan");
      } else {
        alert("Invalid OTP, please try again.");
      }
    };

    const resetEmailForm = () => {
      state.email = "";
      state.emailOtpSent = false;
      state.emailOtpVerified = false;
      state.emailOtp = "";
    };

    const toggleModal = () => {
      state.isModalVisible = !state.isModalVisible;
    };

    return {
      ...toRefs(state),
      sendEmailOtp,
      verifyEmailOtp,
      resetEmailForm,
      toggleModal,
      desktopImage,
      mobileImage,
    };
  },
};
</script>

<style scoped></style>
