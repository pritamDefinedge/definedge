<template>
  <div id="Action_bar" class="bg-gray-100 py-2 max-sm:hidden">
    <div class="container mx-auto flex justify-center">
      <div class="column one text-center">
        <div class="top-header">
          <p class="top-header-custom text-sm text-gray-700">
            Customer Support :
            <a
              href="tel:02061923200"
              class="text-primary-900 hover:text-blue-600 hover:underline"
            >
              <PhoneIcon class="h-6 w-6 text-gray-800 mr-2" /> 020-61923200 </a
            >,
            <a
              href="mailto:care@definedge.com"
              class="text-primary-900 hover:text-blue-600 hover:underline"
            >
              <MailIcon class="h-6 w-6 text-gray-800" /> care@definedge.com
            </a>
            | Call and Trade :
            <a
              href="tel:02061923220"
              class="text-primary-900 hover:text-blue-600 hover:underline"
            >
              <PhoneIcon class="h-6 w-6 text-gray-800 mr-2" /> 020-61923220
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <header
    class="flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50"
  >
    <div class="flex flex-wrap items-center gap-4 w-full max-w-6xl mx-auto">
      <router-link to="/" class="max-sm:hidden">
        <img
          src="https://www.definedgesecurities.com/wp-content/uploads/2022/05/Definedge-Logo-03.png"
          alt="logo"
          class="w-36"
        />
      </router-link>
      <router-link to="/" class="hidden max-sm:block">
        <img
          src="https://www.definedgesecurities.com/wp-content/uploads/2022/05/Definedge-Logo-03.png"
          alt="logo"
          class="w-28"
        />
      </router-link>

      <!-- Collapse Menu -->
      <div
        :style="{ display: collapseMenuVisible ? 'block' : 'none' }"
        id="collapseMenu"
        class="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
      >
        <button
          id="toggleClose"
          class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
          @click="toggleCollapseMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 h-3.5 fill-black"
            viewBox="0 0 320.591 320.591"
          >
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"
            ></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"
            ></path>
          </svg>
        </button>

        <div
          class="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50"
        >
          <ul class="lg:flex lg:gap-x-8 max-lg:space-y-2">
            <li class="mb-6 hidden max-lg:block">
              <router-link to="/"
                ><img
                  src="https://www.definedgesecurities.com/wp-content/uploads/2022/05/Definedge-Logo-03.png"
                  alt="logo"
                  class="w-36"
                />
              </router-link>
            </li>
            <li class="max-lg:border-b max-lg:py-3">
              <router-link
                to="/"
                class="hover:text-[#002D67] text-[#002D67] block font-bold text-[15px]"
                >Home
              </router-link>
            </li>
            <li class="max-lg:border-b max-lg:py-3">
              <router-link
                to="/about"
                class="hover:text-[#002D67] text-gray-500 block font-bold text-[15px]"
                >About
              </router-link>
            </li>
            <li class="max-lg:border-b max-lg:py-3">
              <router-link
                to="/product"
                class="hover:text-[#002D67] text-gray-500 block font-bold text-[15px]"
                >Products
              </router-link>
            </li>
            <li class="max-lg:border-b max-lg:py-3">
              <router-link
                to="/api"
                class="hover:text-[#002D67] text-gray-500 block font-bold text-[15px]"
                >API
              </router-link>
            </li>
            <li class="max-lg:border-b max-lg:py-3">
              <router-link
                to="/associate"
                class="hover:text-[#002D67] text-gray-500 block font-bold text-[15px]"
                >Associate
              </router-link>
            </li>
          </ul>

          <ul class="lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8">
            <li class="max-lg:border-b max-lg:py-3 max-lg:mt-2">
              <router-link
                to="/pricing"
                class="hover:text-[#002D67] text-gray-500 block font-bold text-[15px]"
                >Pricing
              </router-link>
            </li>

            <!-- Open Demat Account button (Only shown on mobile if collapse menu is open) -->
            <li
              v-show="collapseMenuVisible && isMobileView"
              class="max-lg:border-b max-lg:py-3 max-lg:mt-2"
            >
              <button
                class="group  relative shine shine-anim px-4 py-2 text-sm font-semibold cursor-pointer overflow-hidden text-white rounded-md border-2 bg-[#1d294f] border-[#1d294f] hover:text-[#1d294f] focus:outline-none transition-all ease-in-out duration-300"
              >
                <span
                  class="ease absolute top-1/2 h-0 w-80 origin-center -translate-x-20 rotate-45 bg-[#fff] transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"
                ></span>
                <span
                  class="ease relative text-white transition duration-300 group-hover:text-[#1d294f]"
                >
                  <router-link to="/mobile-verification">
                    Open Demat Account
                  </router-link>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-l border-[#333] h-6 max-lg:hidden"></div>

      <div class="flex items-center ml-auto space-x-4">
        <router-link
          to="/login"
          class="hover:text-[#002D67] text-gray-500 block font-bold text-[15px]"
          >Log in
        </router-link>

        <div class="relative max-sm:hidden">
          <button
            @click="toggleSearch"
            class="text-gray-500 hover:text-[#002D67] mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              class="cursor-pointer"
            >
              <path
                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
              ></path>
            </svg>
          </button>

          <!-- Search Input field (only visible when showSearch is true) -->
          <input
            v-if="showSearch"
            v-model="searchQuery"
            class="transition-all duration-500 ease-in-out absolute w-96 top-12 right-20 text-sm bg-gray-50 rounded-full border px-4 py-2.5 mt-6"
            type="text"
            placeholder="Search something..."
            @blur="toggleSearch"
          />
        </div>

        <button
          class="group hidden sm:block relative shine shine-anim px-4 py-2 text-sm font-semibold cursor-pointer overflow-hidden text-white rounded-md border-2 bg-[#1d294f] border-[#1d294f] hover:text-[#1d294f] focus:outline-none transition-all ease-in-out duration-300"
        >
          <span
            class="ease absolute top-1/2 h-0 w-80 origin-center -translate-x-20 rotate-45 bg-[#fff] transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"
          ></span>
          <span
            class="ease relative text-white transition duration-300 group-hover:text-[#1d294f]"
          >
            <router-link to="/mobile-verification">
              Open Demat Account
            </router-link>
          </span>
        </button>

        <button id="toggleOpen" class="lg:hidden" @click="toggleCollapseMenu">
          <svg
            class="w-7 h-7"
            fill="#000"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showSearch = ref(false);
const searchQuery = ref("");
const collapseMenuVisible = ref(false);

// Check if the window is in mobile view (for hiding/showing the button)
const isMobileView = ref(false);

// This function will be triggered when clicking the toggle button
const toggleCollapseMenu = () => {
  collapseMenuVisible.value = !collapseMenuVisible.value;
};

// Check the screen width and set isMobileView accordingly
const checkMobileView = () => {
  isMobileView.value = window.innerWidth <= 768;
};

// Set up the event listener on component mount
onMounted(() => {
  checkMobileView();
  window.addEventListener("resize", checkMobileView);
});

// Remove the event listener on unmount
onUnmounted(() => {
  window.removeEventListener("resize", checkMobileView);
});

// Function to toggle search bar
const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};
</script>
