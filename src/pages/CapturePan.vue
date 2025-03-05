<template>
  <section class="flex flex-col w-full md:w-9/12 mx-auto lg:my-8 md:my-8 my-0">
    <div
      class="bg-white md:bg-slate-200 lg:bg-slate-200 bg-opacity-40 p-2.5 my-0 lg:my-8 rounded-2xl"
    >
      <div class="w-full bg-white mx-auto rounded-2xl overflow-hidden p-2.5">
        <div class="relative mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
          <!-- Left Section (Common for both steps) -->
          <CommonLeftSection
          :isKeywordSectionOpen="isKeywordSectionOpen"
          :src="imageSrc"
            :steps="[1]"
            :toggleModal="toggleModal"
          />

          <!-- Right Section (PAN Capture Form) -->
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
              <PanCapture
                :pan="pan"
                @update:pan="pan = $event"
                @submit-pan="submitPan"
                @reset-form="resetPanForm"
                @toggle-keyword-section="handleToggleKeywordSection"
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
import PanCapture from "../components/kyc/stepOne/PanCapture.vue"; // Ensure this component is correctly imported
import CommonLeftSection from "../components/kyc/CommonLeftSection.vue";
import { useRouter } from "vue-router";
import DocGuideLince from "../components/DocGuideLince.vue";

// import imageSrc from "../assets/steps/side3.svg";
import desktopImage from "../assets/steps/side3.svg";
import mobileImage from "../assets/steps/blue/3.svg";

export default {
  components: {
    PanCapture,
    CommonLeftSection,
    DocGuideLince,
  },
  setup() {
    const state = reactive({
      pan: "",
      imageSrc: "",
      isModalVisible: false,
      isKeywordSectionOpen: false,
    });
    const router = useRouter();

    const submitPan = () => {
      // Handle the submission of the PAN number
      console.log(state);
      if (state.pan.length === 10) {
        alert(`PAN submitted successfully: ${state.pan}`);
        router.push("/aadhar-verification");

        // You can add further logic here, such as sending the PAN to an API
      } else {
        alert("Please enter a valid PAN number.");
      }
    };

    const resetPanForm = () => {
      state.pan = "";
    };

    const updateImageSrc = () => {
      if (window.innerWidth < 768) {
        // Mobile devices (screen width less than 768px)
        state.imageSrc = mobileImage; // Mobile image
      } else {
        // Medium and large devices (screen width 768px and greater)
        state.imageSrc = desktopImage; // Desktop image
      }
    };

    onMounted(() => {
      // Set image when component is mounted
      updateImageSrc();

      // Listen for window resize to update image
      window.addEventListener("resize", updateImageSrc);
    });

    const toggleModal = () => {
      state.isModalVisible = !state.isModalVisible;
    };

    const handleToggleKeywordSection = (isOpen) => {
      state.isKeywordSectionOpen = isOpen;
    };

    return {
      ...toRefs(state),
      submitPan,
      resetPanForm,
      toggleModal,
      handleToggleKeywordSection,
    };
  },
};
</script>

<style scoped></style>
