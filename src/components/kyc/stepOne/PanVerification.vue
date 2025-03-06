<template>
  <div class="w-full lg:w-10/12 mx-auto mb-8">
    <div class="mb-6 lg:hidden block bg-[#2563EB] rounded-2xl">
      <div class="flex justify-center items-center p-4">
        <img :src="src" alt="steps" class="w-full" />
      </div>
    </div>
    <div class="lg:mt-8 w-full">
      <h1 class="text-2xl font-bold">Verify PAN</h1>
      <p>PAN Details will be verified with ITD (Income Tax Department)</p>
      <div class="mt-6">
        <div class="items-center gap-4 mb-2 w-full relative">
          <label
            for="full-name"
            class="block text-sm font-medium text-slate-500 mb-2"
          >
            Enter Full Name - (as per PAN)
          </label>
          <input
            v-model="localFullName"
            type="text"
            id="full-name"
            class="w-full lg:w-7/12 text-slate-700 text-sm sm:text-base rounded-md px-6 py-2.5 border-slate-300 shadow-sm border focus:outline-none placeholder:text-sm placeholder:text-slate-300 focus:ring-1 focus:ring-blue-600"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div class="items-center gap-4 mb-2 w-full relative">
          <label for="pan" class="block text-sm font-medium text-slate-500 mb-2"
            >PAN Number</label
          >
          <input
            v-model="localPan"
            type="text"
            id="pan"
            class="w-full lg:w-7/12 text-slate-700 text-sm sm:text-base rounded-md px-6 py-2.5 border-slate-300 shadow-sm border focus:outline-none placeholder:text-sm placeholder:text-slate-300 focus:ring-1 focus:ring-blue-600"
            placeholder="Enter your PAN number"
            maxlength="10"
            required
          />
          <p class="text-xs">This PAN should belong to the applicant</p>
        </div>
        <div class="items-center gap-4 mb-2 w-full relative">
          <label for="dob" class="block text-sm font-medium text-slate-500 mb-2"
            >Date Of Birth - (as per PAN)</label
          >
          <input
            v-model="localDob"
            type="date"
            id="dob"
            class="w-full lg:w-7/12 text-slate-700 text-sm sm:text-base rounded-md px-6 py-2.5 border-slate-300 shadow-sm border focus:outline-none placeholder:text-sm placeholder:text-slate-300 focus:ring-1 focus:ring-blue-600"
            required
          />
        </div>
        <button
          @click="submitPan"
          type="button"
          class="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Verify PAN
        </button>
      </div>
    </div>

    <!-- Footer -->
    <div class="lg:absolute md:relative relative lg:bottom-0 -bottom-10">
      <h4 class="text-xs text-slate-500 font-bold">
        Definedge Securities Broking Private Limited
      </h4>
      <p class="text-xs text-slate-500 font-normal leading-4 mt-1">
        <span class="text-slate-500">
          Member of the National Stock Exchange of India Ltd. (NSE) and Bombay
          Stock Exchange Ltd. (BSE).
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: {
    pan: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    updatePan: {
      type: Function,
      required: true,
    },
    updateFullName: {
      type: Function,
      required: true,
    },
    updateDob: {
      type: Function,
      required: true,
    },
    submitPan: {
      type: Function,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    // Create reactive local state for inputs
    const localPan = ref(props.pan);
    const localFullName = ref(props.fullName);
    const localDob = ref(props.dob);

    // Watch for changes in props and update local state
    watch(
      () => props.pan,
      (newValue) => {
        localPan.value = newValue;
      }
    );
    watch(
      () => props.fullName,
      (newValue) => {
        localFullName.value = newValue;
      }
    );
    watch(
      () => props.dob,
      (newValue) => {
        localDob.value = newValue;
      }
    );

    // Update parent component when local values change
    const handlePanUpdate = () => {
      props.updatePan(localPan.value);
    };

    const handleFullNameUpdate = () => {
      props.updateFullName(localFullName.value);
    };

    const handleDobUpdate = () => {
      props.updateDob(localDob.value);
    };

    const submitPan = () => {
      props.submitPan({
        pan: localPan.value,
        fullName: localFullName.value,
        dob: localDob.value,
      });
    };

    return {
      localPan,
      localFullName,
      localDob,
      handlePanUpdate,
      handleFullNameUpdate,
      handleDobUpdate,
      submitPan,
    };
  },
});
</script>

<style scoped></style>
