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
            :width="18"
          />

          <!-- Right Section (Aadhaar Verification Form) -->
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

            <div class="w-full lg:w-10/12 mx-auto mb-8">
              <!-- <div class="mb-6 lg:hidden block">
                  <div class="flex justify-center items-center">
                    <img :src="mobileImage" alt="steps" class="w-full" />
                  </div>
                </div> -->
              <div class="mb-6 lg:hidden block bg-[#2563EB] rounded-2xl">
                <div class="flex relative justify-center items-center p-4">
                  <img :src="mobileImage" alt="steps" class="w-full" />
                  <div
                    class="voltage-line absolute bottom-4 left-12 sm:left-24 ipad-mini:left-20 ipad-air:left-22 ipad-pro11:left-24 ipad-pro12:left-30 w-[18%] h-[10px] overflow-hidden justify-center items-center"
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
                    Step into a world of powerful tools & education. Gain your
                    edge!
                  </div>
                </div>

                <div class="lg:mt-8 w-full">
                  <div>
                    <h1
                      id="contact-info-heading"
                      class="text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-slate-700 font-bold"
                    >
                      Aadhaar KYC
                    </h1>
                    <span class="block text-sm font-normal text-slate-500 mb-4"
                      >(Continue to DigiLocker)</span
                    >
                    <p class="block text-sm font-normal text-slate-700">
                      The Aadhaar and PAN
                      <span
                        data-v-bb0b35d1=""
                        class="font-semibold underline"
                      ></span>
                      should be yours.
                    </p>
                  </div>

                  <div class="mx-auto max-w-2xl lg:max-w-none mt-10">
                    <div class="mt-4">
                      <div class="flex items-top gap-3 mb-4">
                        <div class="checkbox-container mt-0.5">
                          <input
                            id="verify-aadhar"
                            type="checkbox"
                            class="w-4 h-4 cursor-pointer"
                            v-model="consentGiven"
                          />
                          <div class="checkbox-overlay"></div>
                        </div>
                        <label
                          for="verify-aadhar"
                          class="text-sm font-normal text-slate-700 text-justify"
                        >
                          I hereby consent to use my Aadhaar (UID) for
                          authenticating / E-signing and completing account
                          opening process with Definedge Securities Broking Pvt
                          Ltd. under e-KYC subject to policy, procedure
                          <span
                            class="text-blue-600 hover:text-blue-800 cursor-pointer"
                            >terms and conditions</span
                          >
                          laid by it.
                        </label>
                      </div>
                    </div>
                  </div>

                  <div
                    class="flex flex-wrap justify-start items-center gap-4 mt-12"
                  >
                    <button
                      class="flex justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 focus:outline-none focus:shadow-outline text-sm lg:text-xs xl:text-sm font-medium rounded-md"
                      @click="connectToDigiLocker"
                    >
                      Connect to Digilocker
                    </button>
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <div
                class="lg:absolute md:relative relative lg:bottom-0 -bottom-10"
              >
                <h4 class="text-xs text-slate-500 font-bold">
                  Definedge Securities Broking Private Limited
                </h4>
                <p class="text-xs text-slate-500 font-normal leading-4 mt-1">
                  <span class="text-slate-500"
                    >Member of NSE, BSE &amp; MCX :
                  </span>
                  SEBI Registration No. :
                  <span class="text-slate-500"
                    >INZ000301132 | CDSL-lN-DP-662-2021</span
                  >
                  <span class="px-2"> | </span> Membership No.:
                  <span class="text-slate-500"
                    >NSE-90237 | BSE-6766 | MCX-56960</span
                  >
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
import { useRouter } from "vue-router";
import CommonLeftSection from "../components/kyc/CommonLeftSection.vue";
import DocGuideLince from "../components/DocGuideLince.vue";
import SvgWaveMobile from "../components/SvgWaveMobile.vue";
// import imageSrc from "../assets/steps/side4.svg";
import desktopImage from "../assets/steps/side4.svg";
import mobileImage from "../assets/steps/blue/4.svg";

export default {
  components: {
    CommonLeftSection,
    DocGuideLince,
    SvgWaveMobile,
  },
  setup() {
    const router = useRouter();

    const state = reactive({
      consentGiven: false,
      isModalVisible: false,
    });

    const connectToDigiLocker = () => {
      if (state.consentGiven) {
        // Logic to connect to DigiLocker
        alert("Connecting to DigiLocker...");
        router.push("/pan-verification");
      } else {
        alert("Please provide consent to proceed.");
      }
    };

    const toggleModal = () => {
      state.isModalVisible = !state.isModalVisible;
    };

    return {
      ...toRefs(state),
      connectToDigiLocker,
      toggleModal,
      desktopImage,
      mobileImage,
    };
  },
};
</script>

<style scoped></style>
