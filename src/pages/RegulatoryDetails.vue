<template>
  <section class="flex flex-col w-full md:w-9/12 mx-auto my-8">
    <div class="bg-slate-200 bg-opacity-40 p-2.5 my-0 lg:my-8 rounded-2xl">
      <div class="w-full bg-white mx-auto rounded-2xl overflow-hidden p-2.5">
        <div class="relative mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
          <!-- Left Section (Common for both steps) -->
          <CommonLeftSection :src="imageSrc" :steps="[1]" />

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
              <ProfileDetails :submit="submit" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { reactive, toRefs } from "vue";
import ProfileDetails from "../components/kyc/stepOne/ProfileDetails.vue";
import CommonLeftSection from "../components/kyc/CommonLeftSection.vue";
import { useRouter } from "vue-router";
import imageSrc from "../assets/steps/side5.svg";

export default {
  components: {
    ProfileDetails,
    CommonLeftSection,
  },
  setup() {
    const state = reactive({}); // You can remove this if not used

    const router = useRouter();

    const submit = (data) => {
      // Implement the logic to submit PAN details
      alert("Data submitted successfully!");
      console.log(data, "------------data"); // Log the data for debugging
      // You can navigate to another route if needed
      router.push("/segement-details");
    };

    return {
      ...toRefs(state),
      submit,
      imageSrc,
    };
  },
};
</script>
