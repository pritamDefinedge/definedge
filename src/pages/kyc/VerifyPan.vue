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
            :width="25"

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
              <PanVerification
                :src="mobileImage"
                :pan="pan"
                :full-name="localFullName"
                :dob="localDob"
                @update:pan="pan = $event"
                @update:full-name="localFullName = $event"
                @update:dob="localDob = $event"
                :submit-pan="submitPan"
                @reset-form="resetPanForm"
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
import PanVerification from "../../components/kyc/stepOne/PanVerification.vue";
import CommonLeftSection from "../../components/kyc/CommonLeftSection.vue";
import { useRouter } from "vue-router";
import DocGuideLince from "../../components/DocGuideLince.vue";

import desktopImage from "../../assets/steps/side5.svg";
import mobileImage from "../../assets/steps/blue/5.svg";

export default {
  components: {
    PanVerification,
    CommonLeftSection,
    DocGuideLince,
  },
  setup() {
    const state = reactive({
      pan: "",
      localFullName: "",
      localDob: "",
      isModalVisible: false,
    });
    const router = useRouter();

    const submitPan = (data) => {
      // Implement the logic to submit PAN details
      alert("PAN submitted successfully!");
      console.log(data); // Log the data for debugging
      // You can navigate to another route if needed
      router.push("/regulatorydetails");
    };

    const resetPanForm = () => {
      state.pan = "";
      state.localFullName = "";
      state.localDob = "";
    };

    const toggleModal = () => {
      state.isModalVisible = !state.isModalVisible;
    };

    return {
      ...toRefs(state),
      submitPan,
      resetPanForm,
      toggleModal,
      desktopImage,
      mobileImage,
    };
  },
};
</script>
