<template>
  <div
    class="p-4 font-[sans-serif] max-w-6xl max-lg:max-w-3xl max-md:max-w-lg mx-auto"
  >
    <div class="max-w-2xl text-center mx-auto">
      <h2 class="text-gray-800 text-3xl font-extrabold">
        The <span class="text-[#efa909]">Love</span> We Get
      </h2>
    </div>

    <!-- Testimonial Container -->
    <div class="flex justify-between items-center mt-12">
      <!-- Left Arrow -->
      <div class="relative lg:mr-3 md:mr-3">
        <div
          @click="prevTestimonial"
          class="bg-gray-300 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer absolute left-[-30px] top-0 bottom-0 my-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 fill-gray-800 inline"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clip-rule="evenodd"
              data-original="#000000"
            ></path>
          </svg>
        </div>
      </div>

      <!-- Testimonials Wrapper -->
      <transition name="testimonial-slide">
        <div class="flex overflow-x-hidden">
          <div
            v-for="(testimonial, index) in visibleTestimonials"
            :key="testimonial.id"
            class="border border-gray-300 lg:p-6 p-4 rounded-xl bg-white relative mx-2 w-full max-w-xs h-auto overflow-hidden"
          >
            <div class="flex items-center">
              <img
                :src="testimonial.image"
                class="w-14 h-14 rounded-full border border-purple-600"
              />
              <div class="ml-4">
                <h6 class="text-gray-800 text-sm font-semibold">
                  {{ testimonial.name }}
                </h6>
                <p class="text-xs text-gray-500 mt-1">
                  {{ testimonial.position }}
                </p>
              </div>
            </div>

            <hr class="rounded-full border-2 mt-6" />

            <div class="mt-6 overflow-y-auto max-h-64">
              <p class="text-gray-800 text-sm leading-relaxed">
                {{ testimonial.feedback }}
              </p>
            </div>

            <div class="flex space-x-1 mt-4">
              <svg
                v-for="star in testimonial.rating"
                :key="star"
                class="w-4 h-4 fill-purple-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </transition>

      <!-- Right Arrow -->
      <div class="relative ml-0 lg:ml-8 md:ml-8">
        <div
          @click="nextTestimonial"
          class="bg-gray-300 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer absolute lg:right-0 md:right-0 sm:right-0 -right-8 top-0 bottom-0 my-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 fill-gray-800 inline"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clip-rule="evenodd"
              data-original="#000000"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import testimonialsData from "../data/testimonials.json";

export default {
  data() {
    return {
      testimonials: testimonialsData,
      currentTestimonialIndex: 0,
      testimonialsPerSlide: 1,
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    visibleTestimonials() {
      return this.testimonials.slice(
        this.currentTestimonialIndex,
        this.currentTestimonialIndex + this.testimonialsPerSlide
      );
    },
  },
  methods: {
    nextTestimonial() {
      if (
        this.currentTestimonialIndex <
        this.testimonials.length - this.testimonialsPerSlide
      ) {
        this.currentTestimonialIndex++;
      } else {
        this.currentTestimonialIndex = 0; // Loop back to the first set
      }
    },
    prevTestimonial() {
      if (this.currentTestimonialIndex > 0) {
        this.currentTestimonialIndex--;
      } else {
        this.currentTestimonialIndex =
          this.testimonials.length - this.testimonialsPerSlide; // Loop to the last set
      }
    },
    updateTestimonialsPerSlide() {
      this.windowWidth = window.innerWidth;
      this.testimonialsPerSlide =
        this.windowWidth < 768 ? 1 : this.windowWidth < 1024 ? 2 : 3;
    },
  },
  mounted() {
    this.updateTestimonialsPerSlide();
    window.addEventListener("resize", this.updateTestimonialsPerSlide);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateTestimonialsPerSlide);
  },
};
</script>

<style scoped>
.testimonial-slide-enter-active,
.testimonial-slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.testimonial-slide-enter,
.testimonial-slide-leave-to {
  transform: translateX(100%);
}

.testimonial-card {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.testimonial-slide-enter-to,
.testimonial-slide-leave {
  opacity: 1;
}

.testimonial-slide-enter,
.testimonial-slide-leave-to {
  transform: translateX(100%);
}
</style>
