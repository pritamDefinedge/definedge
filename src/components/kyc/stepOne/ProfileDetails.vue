<template>
  <div class="w-full lg:w-10/12 mx-auto mb-8">
    <div class="mb-6 lg:hidden block  rounded-2xl">
      <div class="flex relative justify-center items-center p-4">
        <img :src="src" alt="steps" class="w-full" />
        <div
          class="voltage-line absolute bottom-4 left-12 sm:left-24 ipad-mini:left-20 ipad-air:left-22 ipad-pro11:left-24 ipad-pro12:left-30 w-[28%] h-[10px] overflow-hidden justify-center items-center"
        >
          <SvgWaveMobile />
        </div>
      </div>
    </div>
    <div class="lg:mt-8 w-full">
      <h1
        class="text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-slate-700 font-bold"
      >
        Your Profile
      </h1>
      <div class="mt-6 text-slate-700">
        <div class="items-center gap-4 mb-2 w-full relative">
          <div class="flex flex-wrap">
            <div class="flex items-center me-4">
              <label
                for="marital-status"
                class="block text-xs font-medium text-slate-500 mb-2"
              >
                Marital Status
              </label>
            </div>
            <div class="flex items-center me-4">
              <input
                id="single"
                type="radio"
                value="single"
                v-model="maritalStatus"
                name="maritalStatus"
                class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
              />
              <label for="single" class="ms-2 text-xs font-medium text-gray-900"
                >Single</label
              >
            </div>
            <div class="flex items-center me-4">
              <input
                id="married"
                type="radio"
                value="married"
                v-model="maritalStatus"
                name="maritalStatus"
                class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"
              />
              <label
                for="married"
                class="ms-2 text-xs font-medium text-gray-900"
                >Married</label
              >
            </div>
          </div>
        </div>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

        <div class="items-center gap-4 mb-2 w-full relative">
          <label for="pan" class="block text-xs font-medium text-slate-500 mb-2"
            >Parents (As in PAN Card)</label
          >
          <div class="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              class="w-full lg:w-5/12 text-slate-700 text-sm sm:text-base rounded-md px-6 py-2.5 border-slate-300 shadow-sm border focus:outline-none placeholder:text-sm placeholder:text-slate-300 focus:ring-1 focus:ring-blue-600"
              placeholder="Father / Husband Name"
              required
            />
            <input
              type="text"
              class="w-full lg:w-5/12 text-slate-700 text-sm sm:text-base rounded-md px-6 py-2.5 border-slate-300 shadow-sm border focus:outline-none placeholder:text-sm placeholder:text-slate-300 focus:ring-1 focus:ring-blue-600"
              placeholder="Father / Husband Name"
              required
            />
          </div>
        </div>
        <div class="items-center gap-4 mb-2 w-full relative">
          <label
            for="pan"
            class="block text-xs font-medium text-slate-500 mb-2"
          >
            Trading & Investment Experience
          </label>

          <div class="flex flex-wrap items-center gap-2">
            <!-- New radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="new"
                type="radio"
                value="new"
                name="investment-experience"
                class="absolute opacity-0 peer"
              />
              <label
                for="new"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >New</label
              >
            </div>

            <!-- 1 - 5 Years radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="1-5-years"
                type="radio"
                value="1-5-years"
                name="investment-experience"
                class="absolute opacity-0 peer"
              />
              <label
                for="1-5-years"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >1 - 5 Years</label
              >
            </div>

            <!-- 5 - 10 Years radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="5-10-years"
                type="radio"
                value="5-10-years"
                name="investment-experience"
                class="absolute opacity-0 peer"
              />
              <label
                for="5-10-years"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >5 - 10 Years</label
              >
            </div>

            <!-- 10 - 15 Years radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="10-15-years"
                type="radio"
                value="10-15-years"
                name="investment-experience"
                class="absolute opacity-0 peer"
              />
              <label
                for="10-15-years"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >10 - 15 Years</label
              >
            </div>

            <!-- 15+ Years radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="15-plus-years"
                type="radio"
                value="15-plus-years"
                name="investment-experience"
                class="absolute opacity-0 peer"
              />
              <label
                for="15-plus-years"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >15+ Years</label
              >
            </div>
          </div>
        </div>

        <div class="items-center gap-4 mb-2 w-full relative">
          <label
            for="income"
            class="block text-xs font-medium text-slate-500 mb-2"
          >
            Annual Income
          </label>

          <div class="flex flex-wrap items-center gap-2">
            <!-- Below 1 Lakh radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="below-1-lakh"
                type="radio"
                value="below-1-lakh"
                name="annual-income"
                class="absolute opacity-0 peer"
              />
              <label
                for="below-1-lakh"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Below 1 Lakh</label
              >
            </div>

            <!-- 1 - 5 Lakh radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="1-5-lakh"
                type="radio"
                value="1-5-lakh"
                name="annual-income"
                class="absolute opacity-0 peer"
              />
              <label
                for="1-5-lakh"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >1 - 5 Lakh</label
              >
            </div>

            <!-- 5 - 10 Lakh radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="5-10-lakh"
                type="radio"
                value="5-10-lakh"
                name="annual-income"
                class="absolute opacity-0 peer"
              />
              <label
                for="5-10-lakh"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >5 - 10 Lakh</label
              >
            </div>

            <!-- 10 - 25 Lakh radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="10-25-lakh"
                type="radio"
                value="10-25-lakh"
                name="annual-income"
                class="absolute opacity-0 peer"
              />
              <label
                for="10-25-lakh"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >10 - 25 Lakh</label
              >
            </div>

            <!-- 25+ Lakh radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="25-plus-lakh"
                type="radio"
                value="25-plus-lakh"
                name="annual-income"
                class="absolute opacity-0 peer"
              />
              <label
                for="25-plus-lakh"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >25+ Lakh</label
              >
            </div>
          </div>
        </div>
        <div class="items-center gap-4 mb-2 w-full relative">
          <label
            for="education"
            class="block text-xs font-medium text-slate-500 mb-2"
          >
            Education
          </label>

          <div class="flex flex-wrap items-center gap-2">
            <!-- Post Graduate radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="post-graduate"
                type="radio"
                value="post-graduate"
                name="education"
                class="absolute opacity-0 peer"
              />
              <label
                for="post-graduate"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Post Graduate</label
              >
            </div>

            <!-- Graduate radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="graduate"
                type="radio"
                value="graduate"
                name="education"
                class="absolute opacity-0 peer"
              />
              <label
                for="graduate"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Graduate</label
              >
            </div>

            <!-- Under Graduate radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="under-graduate"
                type="radio"
                value="under-graduate"
                name="education"
                class="absolute opacity-0 peer"
              />
              <label
                for="under-graduate"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Under Graduate</label
              >
            </div>

            <!-- Professional Degree radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="professional-degree"
                type="radio"
                value="professional-degree"
                name="education"
                class="absolute opacity-0 peer"
              />
              <label
                for="professional-degree"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Professional Degree</label
              >
            </div>
          </div>
        </div>
        <div class="items-center gap-4 mb-2 w-full relative">
          <label
            for="occupation"
            class="block text-xs font-medium text-slate-500 mb-2"
          >
            Occupation
          </label>

          <div class="flex flex-wrap items-center gap-2">
            <!-- Public Sector radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="public-sector"
                type="radio"
                value="public-sector"
                name="occupation"
                class="absolute opacity-0 peer"
              />
              <label
                for="public-sector"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Public Sector</label
              >
            </div>

            <!-- Private Sector radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="private-sector"
                type="radio"
                value="private-sector"
                name="occupation"
                class="absolute opacity-0 peer"
              />
              <label
                for="private-sector"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Private Sector</label
              >
            </div>

            <!-- Government Service radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="government-service"
                type="radio"
                value="government-service"
                name="occupation"
                class="absolute opacity-0 peer"
              />
              <label
                for="government-service"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Government Service</label
              >
            </div>

            <!-- Business radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="business"
                type="radio"
                value="business"
                name="occupation"
                class="absolute opacity-0 peer"
              />
              <label
                for="business"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Business</label
              >
            </div>

            <!-- Agriculturist radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="agriculturist"
                type="radio"
                value="agriculturist"
                name="occupation"
                class="absolute opacity-0 peer"
              />
              <label
                for="agriculturist"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Agriculturist</label
              >
            </div>

            <!-- Retired radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="retired"
                type="radio"
                value="retired"
                name="occupation"
                class="absolute opacity-0 peer"
              />
              <label
                for="retired"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Retired</label
              >
            </div>

            <!-- Housewife radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="housewife"
                type="radio"
                value="housewife"
                name="occupation"
                class="absolute opacity-0 peer"
              />
              <label
                for="housewife"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Housewife</label
              >
            </div>

            <!-- Student radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="student"
                type="radio"
                value="student"
                name="occupation"
                class="absolute opacity-0 peer"
              />
              <label
                for="student"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Student</label
              >
            </div>
          </div>
        </div>

        <div class="items-center gap-4 mb-2 w-full relative">
          <label
            for="pep-status"
            class="block text-xs font-medium text-slate-500 mb-2"
          >
            PEP Status
          </label>

          <div class="flex flex-wrap items-center gap-2">
            <!-- Not a Politically Exposed Person (NPEP) radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="npep"
                type="radio"
                value="npep"
                name="pep-status"
                class="absolute opacity-0 peer"
              />
              <label
                for="npep"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Not a Politically Exposed Person (NPEP)</label
              >
            </div>

            <!-- Politically Exposed Person (PEP) radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="pep"
                type="radio"
                value="pep"
                name="pep-status"
                class="absolute opacity-0 peer"
              />
              <label
                for="pep"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Politically Exposed Person (PEP)</label
              >
            </div>

            <!-- Related to a Politically Exposed Person (RPEP) radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="rpep"
                type="radio"
                value="rpep"
                name="pep-status"
                class="absolute opacity-0 peer"
              />
              <label
                for="rpep"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Related to a Politically Exposed Person (RPEP)</label
              >
            </div>
          </div>
        </div>
        <div class="items-center gap-4 mb-2 w-full relative">
          <label
            for="ddpi-opt"
            class="block text-xs font-medium text-slate-500 mb-2"
          >
            Would You Like to opt for DDPI!
          </label>

          <div class="flex flex-wrap items-center gap-2">
            <!-- Yes radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="yes-ddpi"
                type="radio"
                value="yes"
                name="ddpi-opt"
                class="absolute opacity-0 peer"
              />
              <label
                for="yes-ddpi"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >Yes</label
              >
            </div>

            <!-- No radio button styled like a badge -->
            <div class="relative flex items-center">
              <input
                id="no-ddpi"
                type="radio"
                value="no"
                name="ddpi-opt"
                class="absolute opacity-0 peer"
              />
              <label
                for="no-ddpi"
                class="px-4 py-2 rounded-full border-2 text-xs font-medium text-gray-700 bg-gray-50 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:bg-blue-200 transition-colors"
                >No</label
              >
            </div>
          </div>
        </div>
        <div class="items-center gap-4 mb-2 w-full relative">
          <!-- Checkbox 1 -->
          <div class="flex mb-4">
            <!-- Added mb-4 for vertical gap -->
            <input
              id="ra-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="ra-checkbox"
              class="ms-2 text-xs font-normal text-gray-900 dark:text-gray-300"
            >
              I confirm RAA (Running account authorization) for 90 Days.
            </label>
          </div>

          <!-- Checkbox 2 -->
          <div class="flex mb-4">
            <!-- Added mb-4 for vertical gap -->
            <input
              id="resident-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="resident-checkbox"
              class="ms-2 text-xs font-normal text-gray-900 dark:text-gray-300"
            >
              I am an Indian Resident as per SEBI & IT Law and don't have any
              past SEBI action.
            </label>
          </div>

          <!-- Checkbox 3 -->
          <div class="flex mb-4">
            <!-- Added mb-4 for vertical gap -->
            <input
              id="understood-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="understood-checkbox"
              class="ms-2 text-xs font-normal text-gray-900 dark:text-gray-300"
            >
              I have understood the information requirements of this form (read
              along with FATCA & CRS Instructions) and hereby confirm that the
              information provided by me/us on this form is true, correct &
              complete. I also confirm that I have read and understood the FATCA
              & terms and conditions, and hereby accept the same. Name for my
              account will be updated as per the Income Tax database as per
              Exchange Regulations.
            </label>
          </div>

          <!-- Checkbox 4 -->
          <div class="flex">
            <input
              id="annexure-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="annexure-checkbox"
              class="ms-2 text-xs font-normal text-gray-900 dark:text-gray-300"
            >
              I confirm to have understood the contents of
              <a
                href="#"
                class="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Equity Annexure, Commodity & Currency Annexure Documents.
              </a>
            </label>
          </div>
        </div>

        <button
          @click="handleSubmit"
          type="button"
          class="mt-3 mb-20 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import SvgWaveMobile from "../../SvgWaveMobile.vue";

export default defineComponent({
  components: {
    SvgWaveMobile,
  },
  props: {
    submit: {
      type: Function,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    // You can store data here to pass to the parent component
    const formData = ref({});

    const handleSubmit = () => {
      // Passing form data to parent submit function
      props.submit(formData.value);
    };

    return {
      handleSubmit,
      formData,
    };
  },
});
</script>
