<template>
  <div class="w-full lg:w-10/12 mx-auto mb-8">
    <div class="mb-6 lg:hidden block  rounded-2xl">
      <div class="flex relative justify-center items-center p-4">
        <img :src="src" alt="steps" class="w-full" />
        <div
          class="voltage-line absolute bottom-4 left-12 sm:left-24 ipad-mini:left-20 ipad-air:left-22 ipad-pro11:left-24 ipad-pro12:left-30 w-[25%] h-[10px] overflow-hidden justify-center items-center"
        >
          <SvgWaveMobile />
        </div>
      </div>
    </div>
    <div class="lg:mt-8 w-full">
      <h1
        class="text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-3xl text-slate-700 font-bold"
      >
        Verify PAN
      </h1>
      <p class="text-sm text-slate-500">PAN Details will be verified with ITD (Income Tax Department)</p>
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
          <p class="text-xs text-slate-500">This PAN should belong to the applicant</p>
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

 
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import SvgWaveMobile from "../../SvgWaveMobile.vue";

export default defineComponent({
  components: {
    SvgWaveMobile,
  },
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
