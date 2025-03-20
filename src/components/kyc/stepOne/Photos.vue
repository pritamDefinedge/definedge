<template>
  <div class="w-full lg:w-10/12 mx-auto mb-8">
    <div class="mb-6 lg:hidden block  rounded-2xl">
      <div class="flex relative justify-center items-center p-4">
        <img :src="src" alt="steps" class="w-full" />
        <div
          class="voltage-line absolute bottom-4 left-12 sm:left-24 ipad-mini:left-20 ipad-air:left-22 ipad-pro11:left-24 ipad-pro12:left-30 w-[40%] h-[10px] overflow-hidden justify-center items-center"
        >
          <SvgWaveMobile />
        </div>
      </div>
    </div>
    <div
      class="text-sm text-black font-serif relative lg:flex items-center mb-6 lg:mb-0 mt-6"
    >
      <div
        class="text-blue-600 text-lg font-medium flex whitespace-nowrap"
      ></div>
      <div class="text-am-400 flex">
        <span class="inline">
          <img
            class="w-4 h-4 mr-1.5 -mt-0.5"
            src="https://signup.definedgesecurities.com/assets/offer-star-78603b57.svg"
            alt="definedge"
          />
        </span>
        Free tools, education & more-your journey to success starts here!
      </div>
    </div>
    <div class="lg:mt-8 w-full">
      <h1
        class="text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-slate-700 font-bold"
      >
        Capture Photo
      </h1>
      <div class="mt-6">
        <div class="items-center gap-4 mb-4 w-full relative">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Please enable Camera permissions to proceed.
          </p>
        </div>

        <!-- Camera Feed -->
        <div
          v-if="!cameraError"
          class="mt-6 flex justify-center items-center w-full"
        >
          <video
            ref="videoElement"
            autoplay
            playsinline
            class="border-2 border-gray-300 rounded-lg w-full h-80 object-cover shadow-lg"
          ></video>
          <div
            class="absolute bottom-4 w-full text-xs font-medium text-center text-gray-500"
          >
            Make sure your face and eyes are clearly visible.
          </div>
        </div>

        <!-- Camera error message with camera icon -->
        <p
          v-if="cameraError"
          class="text-red-500 mt-4 flex justify-center items-center flex-col p-8 border-2 rounded-lg"
        >
          <img
            src="../../../assets/camera-disabled-svgrepo-com.svg"
            alt="Camera Disabled"
            class="w-16 h-16 mb-4"
          />
          {{ cameraError }}
        </p>

        <!-- QR code and message if camera is unavailable -->
        <div class="text-left mt-6">
          <div class="h-28 w-28">
            <img
              src="data:image/png;base64,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"
              alt="QR Code"
            />
          </div>
          <div class="text-sm font-medium text-slate-600 mt-4">
            Kindly scan the QR code if the camera is not detected.
          </div>
          <button
            class="text-md font-medium text-blue-800 hover:text-blue-900 underline"
          >
            Send photo link on email
          </button>
        </div>

        <!-- Submit Button -->
        <div class="mt-6 flex">
          <button
            @click="handleSubmit"
            type="button"
            class="mt-3 flex justify-center bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 focus:outline-none focus:shadow-outline text-sm lg:text-xs xl:text-sm font-medium rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
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
    const videoElement = ref(null);
    const cameraError = ref(null);

    // Start camera to capture photo
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoElement.value) {
          videoElement.value.srcObject = stream;
        }
        cameraError.value = null;
      } catch (error) {
        cameraError.value = "Camera is not available or permission was denied.";
      }
    };

    onMounted(() => {
      startCamera();
    });

    const formData = ref({});
    // Handle the photo capture and submission
    const handleSubmit = () => {
      // Passing form data to parent submit function
      props.submit(formData.value);
    };

    return {
      videoElement,
      cameraError,
      handleSubmit,
    };
  },
});
</script>
