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
            :steps="[1, 2, 3, 4]"
            :toggleModal="toggleModal"
          />

          <!-- Right Section (Review & Sign Form) -->
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
              <div class="lg:mt-8 w-full">
                <h1
                  class="text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-3xl text-slate-700 font-bold"
                >
                  Review & Sign
                </h1>
                <!-- Profile Image and User Information Review -->
                <div
                  class="mx-auto max-w-2xl mt-10 p-4 border border-slate-300 rounded-lg shadow-sm bg-white"
                >
                  <!-- Display user data directly -->
                  <div class="flex items-center w-full gap-4">
                    <img
                      src="../assets/profile.png"
                      alt="Profile Image"
                      class=" "
                    />
                    <img src="../assets/signature.png" alt="Signature" />
                  </div>
                  <div class="flex items-center w-full">
                    <div class="ml-4">
                      <p class="text-lg">
                        <i class="fas fa-user mr-2 text-blue-500"></i>
                        {{ userName }}
                      </p>
                      <p>
                        <i
                          class="fas fa-birthday-cake mr-2 text-yellow-500"
                        ></i>
                        {{ userDob }}
                      </p>
                      <p>
                        <i class="fas fa-envelope mr-2 text-green-500"></i>
                        {{ userEmail }}
                      </p>
                      <p>
                        <i class="fas fa-phone-alt mr-2 text-red-500"></i>
                        {{ userMobile }}
                      </p>
                      <p>
                        <i class="fas fa-home mr-2 text-teal-500"></i>
                        {{ userAddress }}
                      </p>
                      <p>
                        <i class="fas fa-id-card mr-2 text-purple-500"></i>
                        {{ userPanNo }}
                      </p>
                      <p>
                        <i class="fas fa-id-badge mr-2 text-indigo-500"></i>
                        {{ userAadharNo }}
                      </p>
                      <p>
                        <i class="fas fa-credit-card mr-2 text-orange-500"></i>
                        {{ userAccountNo }}
                      </p>
                      <p>
                        <i class="fas fa-building mr-2 text-cyan-500"></i>
                        {{ userBankName }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Submit Buttons -->
                <div
                  class="flex flex-wrap justify-center items-center gap-4 mt-12"
                >
                  <button
                    class="flex justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 focus:outline-none focus:shadow-outline text-sm font-medium rounded-md transition duration-200"
                    @click="handleReview"
                  >
                    Review
                  </button>
                  <button
                    class="flex justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-2 focus:outline-none focus:shadow-outline text-sm font-medium rounded-md transition duration-200"
                    @click="handleEsign"
                  >
                    eSign
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

import desktopImage from "../assets/steps/side13.svg";
import mobileImage from "../assets/steps/blue/13.svg";

export default {
  components: {
    CommonLeftSection,
    DocGuideLince,
  },
  setup() {
    const router = useRouter();

    const state = reactive({
      imageSrc: "",
      isModalVisible: false,
    });

    // Directly store user data as static values
    const userName = "John Doe";
    const userDob = "1990-01-01";
    const userEmail = "john.doe@example.com";
    const userMobile = "+1234567890";
    const userAddress = "123 Main St, City, Country";
    const userPanNo = "ABCDE1234F";
    const userAadharNo = "1234-5678-9012";
    const userAccountNo = "1234567890123456";
    const userBankName = "Bank of Example";

    const defaultImage = "https://via.placeholder.com/150"; // Default image URL
    const userProfileImage = defaultImage; // Use default image for the profile image

    // Handle Review button click
    const handleReview = () => {
      alert("Reviewing data...");
    };

    // Handle eSign button click
    const handleEsign = () => {
      alert("Proceeding to eSign...");
      router.push("/application-submitted");
    };

    const toggleModal = () => {
      state.isModalVisible = !state.isModalVisible;
    };

    return {
      ...toRefs(state),
      toggleModal,
      userName,
      userDob,
      userEmail,
      userMobile,
      userAddress,
      userPanNo,
      userAadharNo,
      userAccountNo,
      userBankName,
      userProfileImage,
      handleReview,
      handleEsign,
      desktopImage,
      mobileImage,
    };
  },
};
</script>

<style scoped>
/* Add necessary styles here */
</style>
