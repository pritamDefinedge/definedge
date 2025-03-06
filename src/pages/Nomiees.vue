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
            :steps="[1, 2]"
            :toggleModal="toggleModal"
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
                      alt="Document Guidelines Icon"
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
                <div class="flex justify-center items-center p-4">
                  <img :src="mobileImage" alt="steps" class="w-full" />
                </div>
              </div>
              <div class="w-full">
                <div class="lg:mt-8 w-full">
                  <div>
                    <h1
                      id="contact-info-heading"
                      class="text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-slate-700 font-bold"
                    >
                      Nominees
                    </h1>

                    <p class="block text-sm mt-2 font-normal text-slate-700">
                      You can add up to 3 nominee(s) to your account.
                    </p>
                    <p class="block text-sm font-normal text-slate-700">
                      Adding nominees makes the claim process simple in case of
                      unforeseen events.
                    </p>
                  </div>

                  <div class="mx-auto max-w-2xl lg:max-w-none mt-10">
                    <div class="flex items-center space-x-6">
                      <div class="flex items-center">
                        <input
                          id="add-nominee-radio"
                          type="radio"
                          name="nominee-option"
                          value="add-nominee"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="add-nominee-radio"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >Add Nominee</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="skip-radio"
                          type="radio"
                          name="nominee-option"
                          value="skip"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="skip-radio"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >No. Skip this.</label
                        >
                      </div>
                    </div>
                  </div>

                  <div
                    class="flex flex-wrap justify-start items-center gap-4 mt-12"
                  >
                    <button
                      class="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                      @click="handleSubmit"
                    >
                      Submit
                    </button>
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
import { useRouter } from "vue-router";
import CommonLeftSection from "../components/kyc/CommonLeftSection.vue";
import DocGuideLince from "../components/DocGuideLince.vue";

// import imageSrc from "../assets/steps/side10.svg";

import desktopImage from "../assets/steps/side10.svg";
import mobileImage from "../assets/steps/blue/10.svg";

export default {
  components: {
    CommonLeftSection,
    DocGuideLince,
  },
  setup() {
    const router = useRouter();

    const state = reactive({
      consentGiven: false,
      imageSrc: "",
      isModalVisible: false,
    });

    const handleSubmit = () => {
      alert("Submitting...");
      router.push("/bank-details");
    };

    const toggleModal = () => {
      state.isModalVisible = !state.isModalVisible;
    };

    return {
      ...toRefs(state),
      handleSubmit,
      toggleModal,
      desktopImage,
      mobileImage,
    };
  },
};
</script>

<style scoped></style>
