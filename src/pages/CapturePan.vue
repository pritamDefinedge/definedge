<template>
  <section class="flex flex-col w-full md:w-9/12 mx-auto my-8">
    <div class="bg-slate-200 bg-opacity-40 p-2.5 my-0 lg:my-8 rounded-2xl">
      <div class="w-full bg-white mx-auto rounded-2xl overflow-hidden p-2.5">
        <div class="relative mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
          <!-- Left Section (Common for both steps) -->
          <CommonLeftSection />

          <!-- Right Section (PAN Capture Form) -->
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
              <PanCapture
                :pan="pan"
                @update:pan="pan = $event"
                @submit-pan="submitPan"
                @reset-form="resetPanForm"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive, toRefs } from "vue";
import PanCapture from "../components/kyc/stepOne/PanCapture.vue"; // Ensure this component is correctly imported
import CommonLeftSection from "../components/kyc/CommonLeftSection.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    PanCapture,
    CommonLeftSection,
  },
  setup() {
    const state = reactive({
      pan: "", // Store the PAN number
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

    return {
      ...toRefs(state),
      submitPan,
      resetPanForm,
    };
  },
};
</script>

<style scoped></style>
