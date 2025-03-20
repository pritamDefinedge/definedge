<template>
  <section class="relative bg-gray-900 text-white pt-16 pb-8">
    <div class="w-full max-w-screen-lg mx-auto px-6 text-center">
      <h4 class="text-blue-600 text-lg font-semibold tracking-wide uppercase">
        APPS
      </h4>
      <h5 class="text-white font-bold tracking-wider text-3xl mt-2">
        Ecosystem That Brings Markets to Your Fingertips
      </h5>
    </div>
  </section>

  <!-- Sticky Navigation Tabs -->
  <div class="sticky top-0 z-50 bg-gray-900 text-white">
    <div class="max-w-screen-lg mx-auto flex justify-center space-x-4 p-4">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="[
          'tab-btn border-2 border-white px-8 py-4 text-lg rounded-lg font-semibold cursor-pointer focus:outline-none transition duration-300 ease-in-out',
          activeTab === tab.id
            ? 'bg-white text-gray-900 shadow-md'
            : 'bg-[#FFFFFF10] text-white',
        ]"
        @click="scrollToSection(tab.id)"
      >
        <span class="flex gap-3">
          <div v-html="tab.icon" class="mt-1"></div>
          {{ tab.label }}
        </span>
      </button>
    </div>
  </div>

  <!-- Scrollable Horizontal Content -->
  <div
    ref="scrollContainer"
    class="scroll-container bg-gray-900 w-full text-white overflow-hidden"
  >
    <section
      v-for="tab in tabContent"
      :key="tab.id"
      :id="tab.id"
      class="scroll-section h-screen w-full md:w-full px-6 flex justify-center items-center p-6"
    >
      <!-- Text & Features Section -->
      <ul
        :class="{
          'motion-preset-slide-right motion-duration-1500': hasScrolled,
        }"
        class="space-y-4 pt-12 md:pt-24 p-4 lg:pt-24 text-lg w-full md:w-1/2"
      >
        <h6
          class="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold mb-4 text-left font-sans"
        >
          {{ tab.title }}
        </h6>

        <li
          v-for="(feature, index) in tab.features"
          :key="index"
          class="flex items-start cursor-pointer relative p-6 bg-gray-800 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg"
        >
          <!-- Icon -->
          <svg
            class="w-5 md:w-6 h-5 md:h-6 text-green-300 flex-shrink-0 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>

          <!-- Feature Text -->
          <div class="flex flex-col w-full break-words whitespace-normal">
            <span class="text-sm md:text-base text-gray-200">
              {{ feature.text }}
            </span>
          </div>
        </li>

        <li class="flex items-start">
          <h6 class="text-base font-semibold mb-4 text-start">
            {{ tab.downloadText }}
          </h6>
        </li>

        <li class="flex items-start">
          <div class="flex space-x-4 justify-start">
            <a
              v-for="(store, idx) in tab.stores"
              :key="idx"
              :href="store.link"
              target="_blank"
            >
              <img
                :src="store.imgSrc"
                :alt="store.altText"
                class="motion-preset-seesaw"
              />
            </a>
          </div>
        </li>
      </ul>

      <!-- Image Section -->
      <div
        :class="{
          'motion-preset-slide-left motion-duration-1500': hasScrolled,
        }"
        class="w-full md:w-1/2 flex items-center justify-center"
      >
        <img
          :src="tab.imageSrc"
          class="rounded-lg shadow-lg w-[70%] object-cover"
          />
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  props: {
    tabs: Array,
    tabContent: Array,
  },
  setup(props) {
    const activeTab = ref(props.tabs[0]?.id || "zoneApp");
    const scrollContainer = ref(null);
    let gsapInstance = null;

    const hasScrolled = ref(false);
    // Scroll Detection Function
    const onScroll = () => {
      hasScrolled.value = window.scrollY > 200;
    };

    // Function to smoothly scroll using GSAP
    const scrollToSection = (targetId) => {
      const targetSection = document.getElementById(targetId);
      if (targetSection && scrollContainer.value) {
        gsap.to(scrollContainer.value, {
          scrollLeft: targetSection.offsetLeft,
          duration: 1.2,
          ease: "power2.inOut",
        });
        activeTab.value = targetId;
      }
    };

    onMounted(() => {
      // Add scroll event listener
      window.addEventListener("scroll", onScroll);

      if (scrollContainer.value) {
        gsapInstance = gsap.to(".scroll-section", {
          xPercent: -100 * (props.tabs.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: scrollContainer.value,
            pin: true,
            scrub: 1,
            snap: 1 / (props.tabs.length - 1),
            start: "top top",
            end: () => `+=${scrollContainer.value.scrollWidth}`, // Dynamic width
            onUpdate: (self) => {
              const index = Math.round(self.progress * (props.tabs.length - 1));
              activeTab.value = props.tabs[index].id;
            },
          },
        });
      }
    });

    onUnmounted(() => {
      // Cleanup event listener and GSAP instance
      window.removeEventListener("scroll", onScroll);

      if (gsapInstance) {
        gsapInstance.kill();
      }
    });

    return {
      activeTab,
      scrollContainer,
      scrollToSection,
      hasScrolled,
    };
  },
};
</script>

<style scoped>
.scroll-container {
  display: flex;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  white-space: nowrap;
}

.scroll-section {
  flex: 0 0 100vw;
  scroll-snap-align: start;
}
</style>
