<template>
  <div class="w-full lg:w-10/12 mx-auto mb-8">
    <div class="mb-6 lg:hidden block bg-[#2563EB] rounded-2xl">
      <div class="flex justify-center items-center p-4">
        <img :src="src" alt="steps" class="w-full" />
      </div>
    </div>
    <div
      class="text-sm text-black font-serif relative lg:flex items-center mb-6 lg:mb-0 mt-6"
    >
      <div
        class="text-blue-600 text-lg font-medium flex whitespace-nowrap"
      ></div>
      <div class="lg:ml-2.5 text-am-400 flex">
        <span class="inline">
          <img
            class="w-4 h-4 mr-1.5 -mt-0.5"
            src="https://signup.definedgesecurities.com/assets/offer-star-78603b57.svg"
            alt="definedge"
          />
        </span>
        Unlock access to trading tools loved by a 2-3 Mn+ Community!
      </div>
    </div>

    <div class="lg:mt-8 w-full">
      <h1 class="text-2xl font-bold">Link Bank</h1>

      <div class="items-center gap-4 mb-4 w-full relative">
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Bank Account in your name from which you will transact funds for
          trading
        </p>
      </div>

      <div class="mt-2">
        <div class="items-center gap-4 mb-2 w-full relative">
          <!-- Bank IFSC Code -->
          <div class="lg:flex-row gap-4 mb-2">
            <label
              for="ifsc-code"
              class="block text-xs font-medium text-slate-500 mb-2"
              >Bank IFSC Code</label
            >
            <input
              id="ifsc-code"
              type="text"
              v-model="formData.ifscCode"
              class="w-full text-slate-700 text-sm sm:text-base rounded-md px-6 py-2.5 border-slate-300 shadow-sm border focus:outline-none placeholder:text-sm placeholder:text-slate-300 focus:ring-1 focus:ring-blue-600"
              placeholder="ENTER IFSC CODE"
              required
            />
          </div>

          <!-- Bank MIRC Code -->
          <div class="lg:flex-row gap-4 mt-2">
            <label
              for="mirc-select"
              class="block text-xs font-medium text-slate-500 mb-2"
              >Select Bank MIRC</label
            >
            <select
              id="mirc-select"
              v-model="formData.mirc"
              class="block w-full px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Select Bank MIRC"
              required
            >
              <option value="">-- Select MIRC --</option>
              <!-- Add MIRC options here -->
            </select>
          </div>

          <!-- Bank Account Number -->
          <div class="lg:flex-row gap-4 mb-2 mt-2">
            <label
              for="bank-account"
              class="block text-xs font-medium text-slate-500 mb-2"
              >Saving Bank Account Number</label
            >
            <input
              id="bank-account"
              type="text"
              v-model="formData.accountNumber"
              class="w-full text-slate-700 text-sm sm:text-base rounded-md px-6 py-2.5 border-slate-300 shadow-sm border focus:outline-none placeholder:text-sm placeholder:text-slate-300 focus:ring-1 focus:ring-blue-600"
              placeholder="ENTER BANK A/C NUMBER"
              required
            />
          </div>

          <!-- Bank Name -->
          <div class="lg:flex-row gap-4 mb-2 mt-2">
            <label
              for="bank-name"
              class="block text-xs font-medium text-slate-500 mb-2"
              >Name Of Bank</label
            >
            <input
              id="bank-name"
              type="text"
              v-model="formData.bankName"
              class="w-full text-slate-700 text-sm sm:text-base rounded-md px-6 py-2.5 border-slate-300 shadow-sm border focus:outline-none placeholder:text-sm placeholder:text-slate-300 focus:ring-1 focus:ring-blue-600"
              placeholder="BANK NAME"
              required
            />
          </div>

          <!-- Bank Address -->
          <div class="lg:flex-row gap-4 mb-2 mt-2">
            <label
              for="bank-address"
              class="block text-xs font-medium text-slate-500 mb-2"
              >Address Of Bank</label
            >
            <input
              id="bank-address"
              type="text"
              v-model="formData.bankAddress"
              class="w-full text-slate-700 text-sm sm:text-base rounded-md px-6 py-2.5 border-slate-300 shadow-sm border focus:outline-none placeholder:text-sm placeholder:text-slate-300 focus:ring-1 focus:ring-blue-600"
              placeholder="BANK ADDRESS"
              required
            />
          </div>
        </div>

        <!-- Continue Button -->
        <button
          @click="handleSubmit"
          type="button"
          class="mt-3 bg-blue-600 mb-20 text-white px-4 py-2 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
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
    // Define form data to store input values
    const formData = ref({
      ifscCode: "",
      mirc: "",
      accountNumber: "",
      bankName: "",
      bankAddress: "",
    });

    const handleSubmit = () => {
      // Check if form data is valid
      //   if (
      //     formData.value.ifscCode &&
      //     formData.value.mirc &&
      //     formData.value.accountNumber &&
      //     formData.value.bankName &&
      //     formData.value.bankAddress
      //   ) {
      // Passing form data to parent submit function
      props.submit(formData.value);
      //   } else {
      //     alert("Please fill in all fields.");
      //   }
    };

    return {
      handleSubmit,
      formData,
    };
  },
});
</script>
