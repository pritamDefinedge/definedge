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
            :steps="[1, 2, 3, 4, 5]"
            :toggleModal="toggleModal"
            :width="72"
          />

          <!-- Right Section (Sign Up Form) -->
          <section
            class="lg:col-span-8 h-screen md:h-full lg:h-full sm:h-screen overflow-auto relative"
          >
            <!-- Doc Guidelines Button (Desktop) -->
            <div
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
                  <div class="ml-1 pt-0.5 whitespace-nowrap">
                    Doc Guidelines
                  </div>
                </div>
              </div>
            </div>
            <div class="stepOne">
              <div class="w-full lg:w-10/12 mx-auto mb-8">
                <div class="mb-6 lg:hidden block bg-blue-600 rounded-2xl">
                  <div class="flex relative justify-center items-center p-4">
                    <img :src="mobileImage" alt="steps" class="w-full" />
                    <div
                      class="voltage-line absolute bottom-4   w-[70%] h-[10px] overflow-hidden justify-center items-center"
                    >
                      <SvgWaveMobile />
                    </div>
                  </div>
                </div>
                <div class="w-full">
                  <div
                    class="text-sm text-black font-serif relative lg:flex items-center mb-6 lg:mb-0 mt-3"
                  >
                    <div
                      class="text-blue-600 text-lg font-medium flex whitespace-nowrap"
                    ></div>
                    <div
                      class="text-am-400 w-fill lg:w-80 xl:w-96 2xl:w-full flex"
                    >
                      <span class="inline"
                        ><img
                          class="w-4 h-4 mr-1.5 -mt-0.5"
                          src="../assets/offer-star.svg"
                          alt="definedge" /></span
                      >Welcome to the world of innovative tools, education and
                      resources!
                    </div>
                  </div>
                  <div class="lg:mt-10 flex justify-left items-start">
                    <div class="">
                      <div>
                        <img
                          class="w-14 h-14 mb-3"
                          src="../assets/checked.svg"
                          alt="definedge"
                        />
                      </div>

                      <h1 class="text-2xl font-bold">
                        Application Submitted !
                      </h1>

                      <p
                        class="text-xs font-normal text-slate-600 flex justify-between items-center my-2 gap-4"
                      >
                        Your application has been Submitted for Approval.
                      </p>
                      <p
                        class="text-xs font-normal text-slate-600 flex justify-between items-center my-2 gap-4"
                      >
                        Thank you for registering with Definedge Securities
                        Broking Private Limited.
                      </p>
                      <p
                        class="text-xs font-normal text-slate-600 flex justify-between items-center my-2 gap-4"
                      >
                        Your application is under review and may take up to 24
                        hours to process. We will notify you via email once it's
                        completed.
                      </p>
                      <p
                        class="text-xs font-bold text-slate-600 flex justify-between items-center my-2 gap-4"
                      >
                        While we process your application, explore the Definedge
                        All-in-One Ecosystem-designed to make you Market Ready!
                      </p>
                      <button
                        class="w-full md:w-24 flex justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 focus:outline-none focus:shadow-outline text-sm lg:text-xs xl:text-sm font-medium rounded-md"
                      >
                        OK
                      </button>
                    </div>
                  </div>
                  <div
                    class="grid grid-cols-1 lg:grid-cols-12 justify-between gap-6 mt-5"
                  >
                    <div class="lg:col-span-7">
                      <div class="overflow-hidden rounded-xl relative mt-1">
                        <a
                          href="https://www.youtube.com/watch?v=lsPEwr5WxS0"
                          target="_blank"
                          ><img
                            class=""
                            src="../assets/definedge_universe.png"
                            alt="definedge"
                        /></a>
                      </div>
                    </div>
                    <div class="lg:col-span-5">
                      <div class="mb-3">
                        <h3
                          class="text-base lg:text-sm font-medium text-gray-800"
                        >
                          Zone App
                        </h3>
                        <p
                          class="text-sm lg:text-xxs font-normal text-gray-600 -mt-0.5"
                        >
                          Trade Effortlessly Anytime, Anywhere
                        </p>
                        <div class="flex justify-start items-center gap-2 mt-2">
                          <a
                            href="https://play.google.com/store/apps/details?id=com.definedge.zone&pli=1"
                            target="_blank"
                            ><img
                              class="w-24"
                              src="../assets/Google-Play-Store.png"
                              alt="definedge" /></a
                          ><a
                            href="https://apps.apple.com/in/app/zone-definedge-trading-app/id1659365110"
                            target="_blank"
                            ><img
                              class="w-24"
                              src="../assets/App-Store-Apple.png"
                              alt="definedge"
                          /></a>
                        </div>
                      </div>
                      <div class="mt-5 border-t pt-3">
                        <h3
                          class="text-base lg:text-sm font-medium text-gray-800"
                        >
                          OPSTRA App
                        </h3>
                        <p
                          class="text-sm lg:text-xxs font-normal text-gray-600 -mt-0.5"
                        >
                          India's Most Loved Options Platform
                        </p>
                        <div class="flex justify-start items-center gap-2 mt-2">
                          <a
                            href="https://play.google.com/store/apps/details?id=com.definedge.opstra&amp;pcampaignid=web_share"
                            target="_blank"
                            ><img
                              class="w-24"
                              src="../assets/Google-Play-Store.png"
                              alt="definedge" /></a
                          ><a
                            href="https://apps.apple.com/in/app/opstra-definedge-analysis/id6502280354"
                            target="_blank"
                            ><img
                              class="w-24"
                              src="../assets/App-Store-Apple.png"
                              alt="definedge"
                          /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
import SendMobileOtp from "../components/kyc/stepOne/SendMobileOtp.vue";
import CommonLeftSection from "../components/kyc/CommonLeftSection.vue";
import { useRouter } from "vue-router";
import DocGuideLince from "../components/DocGuideLince.vue";
import SvgWaveMobile from "../components/SvgWaveMobile.vue";
// import imageSrc from "../assets/steps/side14.svg";

import desktopImage from "../assets/steps/side14.svg";
import mobileImage from "../assets/steps/blue/14.svg";

export default {
  components: {
    SendMobileOtp,
    CommonLeftSection,
    DocGuideLince,
    SvgWaveMobile,
  },
  setup() {
    const state = reactive({
      imageSrc: "",
      isModalVisible: false,
    });
    const router = useRouter();

    const toggleModal = () => {
      state.isModalVisible = !state.isModalVisible;
    };

    return {
      ...toRefs(state),
      toggleModal,
      desktopImage,
      mobileImage,
    };
  },
};
</script>

<style scoped></style>
