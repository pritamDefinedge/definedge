<template>
  <div
    class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10"
  >
    <!-- Flex container for centering content vertically and horizontally -->

    <div
      class="mr-auto place-self-center py-16 font-sans lg:col-span-7 text-white px-4 flex flex-col motion-preset-slide-right motion-duration-1500"
    >
      <h1
        class="max-w-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl mb-8 leading-[45px] font-bold tracking-tight  rombo-dock-logo"
      >
        All-in-One
        <span class="animated-gradient-text">
          Investing & <br />
          Trading
        </span>
        Ecosystem
      </h1>

      <!-- Paragraph with responsive text sizes -->
      <p
        class="max-w-xl mb-3 font-light my-2 text-gray-200 lg:mb-3 md:text-md text-base lg:text-md xl:text-base"
      >
        Open
        <span class="text-yellow-500 animate-slide-in-left-to-right font-bold">
          Free
        </span>
        Super Demat account
      </p>

      <!-- Form section -->
      <div class="flex justify-center">
        <form
          action="/#wpcf7-f29499-p30911-o1"
          method="post"
          class="w-full mx-auto"
        >
          <div class="flex flex-wrap items-center gap-3">
            <!-- Phone number input -->
            <div class="flex w-full lg:w-auto sm:w-auto md:w-auto">
              <input
                type="text"
                name="text-million-2"
                id="text-million-2"
                class="w-14 p-3 border border-gray-300 rounded-l-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value="+91"
                readonly="readonly"
                aria-invalid="false"
                style="
                  background: linear-gradient(
                    180deg,
                    #ffffff20 0%,
                    #ffffff10 100%
                  );
                "
              />
              <input
                type="tel"
                name="mobile-number"
                class="w-full p-2 border rounded-r-lg border-l-0 min-w-[250px] text-white focus:outline-none focus:border-[#fff] focus:ring-0 outline-none"
                placeholder="Enter Mobile Number"
                value=""
                required
                aria-required="true"
                aria-invalid="false"
                pattern="[0-9]{10}"
                maxlength="10"
                inputmode="numeric"
                oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                style="
                  background: linear-gradient(
                    180deg,
                    #ffffff20 0%,
                    #ffffff10 100%
                  );
                "
              />
            </div>
            <!-- Submit Button -->
            <div>
              <div
                class="w-full max-w-full justify-center rounded-md border-2 border-transparent overflow-hidden [background:linear-gradient(45deg,#0369e0,#0369e0_50%,#0369e0)_padding-box,conic-gradient(from_var(--border-angle),rgb(37_99_235_/_0.48)_80%,#6366f1_86%,#fff_90%,#fff_94%,rgb(30_58_138_/_0.48))_border-box] animate-border"
              >
                <button
                  class="group relative p-3 cursor-pointer overflow-hidden"
                >
                  <span
                    class="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-blue-900 transition-all duration-300 group-hover:h-48 group-hover:-translate-y-32"
                  ></span>
                  <span
                    class="ease relative text-white transition duration-300 group-hover:text-white"
                  >
                    Get Started
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
/* Shine effect for text */
.shine-text {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.897) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  background-size: 200% auto;
  color: white;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}

/* Free Text animation */
@keyframes slide-in-left-to-right {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

.animate-slide-in-left-to-right {
  animation: slide-in-left-to-right 3s ease-in-out infinite;
}

/* Apply the gradient and animation to the text */

.animated-gradient-text {
  background: linear-gradient(90deg, #f3cc88, #f97316, #f3cc88);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient-flow 4s linear infinite;
}
</style>
