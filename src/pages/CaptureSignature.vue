<template>
  <section class="flex flex-col w-full md:w-9/12 mx-auto my-8">
    <div class="bg-slate-200 bg-opacity-40 p-2.5 my-0 lg:my-8 rounded-2xl">
      <div class="w-full bg-white mx-auto rounded-2xl overflow-hidden p-2.5">
        <div class="relative mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
          <!-- Left Section (Common for both steps) -->
          <CommonLeftSection :src="imageSrc" :steps="[1,2]"/>

          <!-- Right Section (PAN Capture Form) -->
          <section
            class="lg:col-span-8 max-h-lvh h-lvh sm:h-screen overflow-auto relative"
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
                      src="@/assets/file-text-icon.svg"
                      alt="definedge"
                    />
                  </div>
                  <div class="ml-1 pt-0.5 whitespace-nowrap">
                    Doc Guidelines
                  </div>
                </div>
              </div>
            </div>

            <!-- Capture Photos Form -->
            <div class="stepOne">
              <Signature :submit="submit" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive, toRefs } from "vue";
import Signature from "../components/kyc/stepOne/Signature.vue";
import CommonLeftSection from "../components/kyc/CommonLeftSection.vue";
import { useRouter } from "vue-router";
import imageSrc from "@/assets/steps/side8.svg"; // Corrected image import

export default {
  components: {
    Signature,
    CommonLeftSection,
  },
  setup() {
    const state = reactive({});
    const router = useRouter();

    // Submit function to handle captured data
    const submit = (data) => {
    //   if (data && data.photo) {
    //     // Handle the captured photo data here
        console.log("Captured Photo Data:");
        // Proceed to the next page if data is valid
        router.push("/nomiees-details");
    //   } else {
    //     alert("Please ensure you captured the necessary photo.");
    //   }
    };

    return {
      ...toRefs(state),
      submit,
      imageSrc,
    };
  },
};
</script>
