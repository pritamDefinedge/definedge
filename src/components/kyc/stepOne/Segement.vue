<template>
  <div class="w-full lg:w-10/12 mx-auto mb-8">
    <div class="mb-6 lg:hidden block  rounded-2xl">
      <div class="flex relative justify-center items-center p-4">
        <img :src="src" alt="steps" class="w-full" />
        <div
          class="voltage-line absolute bottom-4 left-12 sm:left-24 ipad-mini:left-20 ipad-air:left-22 ipad-pro11:left-24 ipad-pro12:left-30 w-[33%] h-[10px] overflow-hidden justify-center items-center"
        >
          <SvgWaveMobile />
        </div>
      </div>
    </div>
    <div class="lg:mt-8 w-full">
      <h1
        class="text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-slate-700 font-bold"
      >
        Segments
      </h1>
      <div class="mt-6">
        <div class="items-center gap-4 mb-2 w-full relative">
          <div class="text-sm text-gray-700 dark:text-gray-300">
            <p>
              Your Equity Cash, IPO, and Mutual Fund segments are activated by
              default.
            </p>
            <p>You need to upload your income proof to trade in Derivatives.</p>
          </div>
        </div>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <!-- Segment Boxes -->
          <div
            v-for="(segment, index) in segments"
            :key="index"
            class="border border-gray-300 rounded-lg p-2 px-4 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <!-- Header (Left: Segment name, Right: Toggle) -->
            <div class="flex justify-between items-center mb-3">
              <span class="text-sm font-medium text-gray-700 dark:text-white">
                {{ segment.name }}
              </span>
              <label
                :for="'autoSaver' + index"
                class="relative inline-flex cursor-pointer select-none items-center"
              >
                <input
                  type="checkbox"
                  :id="'autoSaver' + index"
                  v-model="segment.isChecked"
                  class="sr-only"
                />
                <span
                  class="slider flex h-5 w-10 items-center rounded-full p-1 duration-200"
                  :class="{
                    'bg-blue-600':
                      segment.isChecked /* When checked, blue color */,
                    'bg-gray-300':
                      !segment.isChecked /* When unchecked, gray color */,
                    'dark:bg-gray-600':
                      !segment.isChecked /* Dark mode style for unchecked state */,
                  }"
                >
                  <span
                    class="dot h-4 w-4 rounded-full bg-white duration-200"
                    :class="{ 'translate-x-5': segment.isChecked }"
                  ></span>
                </span>
              </label>
            </div>
            <!-- Description -->
            <p class="text-xs font-normal text-gray-500 dark:text-gray-400">
              {{ segment.description }}
            </p>
          </div>
        </div>

        <!-- Submit Button -->
        <button
          @click="handleSubmit"
          type="button"
          class="mt-3 flex justify-center bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 focus:outline-none focus:shadow-outline text-sm lg:text-xs xl:text-sm font-medium rounded-md"
        >
          Continue
        </button>

        <!-- Risk Disclosure -->
        <div class="mt-6 mb-24 space-y-3 text-gray-700 dark:text-gray-300">
          <p class="text-sm font-medium">Risk Disclosures on Derivatives</p>
          <ul class="space-y-2">
            <li
              v-for="(item, idx) in riskDisclosure"
              :key="idx"
              class="flex items-center gap-2 text-xs"
            >
              <div class="w-4">
                <svg
                  class="mr-2 w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                    clip-rule="evenodd"
                  />
                  <path
                    d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z"
                  />
                </svg>
              </div>
              {{ item }}
            </li>
          </ul>
        </div>
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
  setup(props) {
    const segments = ref([
      {
        name: "NSE & BSE",
        description: "Equity Cash",
        isChecked: true,
      },
      {
        name: "NSE & BSE",
        description: "Equity Cash",
        isChecked: false,
      },
      {
        name: "NSE & BSE",
        description: "Equity Cash",
        isChecked: false,
      },
      {
        name: "NSE & BSE",
        description: "Equity Cash",
        isChecked: false,
      },
    ]);

    const riskDisclosure = ref([
      "9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.",
      "On average, loss makers registered net trading loss close to 50,000.",
      "Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.",
      "Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost.",
    ]);

    const handleSubmit = () => {
      // Passing form data to parent submit function
      props.submit(segments.value);
    };

    return {
      segments,
      handleSubmit,
      riskDisclosure,
    };
  },
});
</script>

<style scoped>
/* You can add custom styles here, such as font adjustments or specific customizations */
</style>
