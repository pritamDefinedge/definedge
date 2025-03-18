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
            :steps="[1, 2, 3]"
            :toggleModal="toggleModal"
            :width="60"
          />

          <!-- Right Section (Document Upload Form) -->
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
              <div class="mb-6 lg:hidden block bg-[#2563EB] rounded-2xl">
                <div class="flex justify-center items-center p-4">
                  <img :src="mobileImage" alt="steps" class="w-full" />
                </div>
              </div>
              <div class="lg:mt-8 w-full">
                <h1
                  class="text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-3xl text-slate-700 font-bold"
                >
                  Upload Documents
                </h1>

                <div class="mx-auto max-w-2xl mt-10">
                  <div class="flex items-center w-full">
                    <div class="text-left w-full mt-6">
                      <label
                        for="photo-dropbox"
                        class="flex cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                        tabindex="0"
                      >
                        <span class="flex items-center space-x-2">
                          <svg
                            class="h-6 w-6 stroke-gray-400"
                            viewBox="0 0 256 256"
                          >
                            <path
                              d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <path
                              d="M80,128a80,80,0,1,1,144,48"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></path>
                            <polyline
                              points="118.1 161.9 152 128 185.9 161.9"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></polyline>
                            <line
                              x1="152"
                              y1="208"
                              x2="152"
                              y2="128"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                          </svg>
                          <span class="text-xs font-medium text-gray-600">
                            Drop PAN Documents to Attach, or
                            <span class="text-blue-600 underline">browse</span>
                          </span>
                        </span>
                        <input
                          id="photo-dropbox"
                          type="file"
                          class="sr-only"
                          accept="image/*, .pdf"
                          @change="handleFileChange"
                        />
                      </label>
                      <span class="text-xs"
                        >Maximum allowed File size : 20MB</span
                      >
                    </div>
                  </div>
                </div>

                <!-- Submit Button -->
                <div
                  class="flex flex-wrap justify-start items-center gap-4 mt-12"
                >
                  <button
                    class="mt-3 flex justify-center bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 focus:outline-none focus:shadow-outline text-sm lg:text-xs xl:text-sm font-medium rounded-md"
                    @click="handleSubmit"
                  >
                    Submit
                  </button>
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

// import imageSrc from "../assets/steps/side12.svg";

import desktopImage from "../assets/steps/side12.svg";
import mobileImage from "../assets/steps/blue/12.svg";

export default {
  components: {
    CommonLeftSection,
    DocGuideLince,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      file: null,
      consentGiven: false,
      isModalVisible: false,
    });

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file && file.size <= 2 * 1024 * 1024) {
        // Check for file size <= 2MB
        state.file = file;
      } else {
        alert("File size exceeds the 2MB limit. Please upload a smaller file.");
      }
    };

    const handleSubmit = () => {
      //   if (!state.file) {
      //     alert("Please upload a document before submitting.");
      //     return;
      //   }

      alert("Submitting...");
      // Optionally handle the uploaded file here, e.g., upload it to a server.
      router.push("/previewpdf-esign");
    };

    const toggleModal = () => {
      state.isModalVisible = !state.isModalVisible;
    };

    return {
      ...toRefs(state),
      handleFileChange,
      handleSubmit,
      toggleModal,
      desktopImage,
      mobileImage,
    };
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
