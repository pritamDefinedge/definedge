<template>
  <div
    class="group relative border-2 border-gray-200 dark:border-gray-600 px-6 py-8 rounded-2xl font-sans overflow-hidden shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-sm mx-auto mt-6 flex flex-col items-center transition-all duration-500 ease-in-out hover:border-transparent hover:shadow-xl hover:bg-gradient-to-br from-blue-50 to-blue-100 dark:hover:from-gray-700 dark:hover:to-gray-800"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <!-- Expanding circle background -->
      <span
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-blue-100 dark:bg-blue-900/30 transition-all duration-700 group-hover:scale-[8] opacity-0 group-hover:opacity-100"
      ></span>
      
      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 opacity-5 dark:opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <div class="grid grid-cols-4 grid-rows-4 h-full w-full">
          <div v-for="i in 16" :key="i" class="border border-gray-300 dark:border-gray-500"></div>
        </div>
      </div>
    </div>

    <!-- Profile Image Container -->
    <div
      class="relative z-10 w-60 h-60 sm:w-60 sm:h-60 md:w-40 md:h-40 rounded-full overflow-hidden bg-white dark:bg-gray-700 shadow-md transition-all duration-500 group-hover:shadow-lg group-hover:ring-4 group-hover:ring-blue-400/30 dark:group-hover:ring-blue-500/20 group-hover:scale-105"
    >
      <!-- Profile Image with hover effect -->
      <img
        :src="member.image"
        :alt="member.name"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <!-- Social links overlay (appears on hover) -->
      <div class="absolute inset-0 bg-black/30 dark:bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="flex space-x-3">
          <a v-for="(social, index) in member.socialLinks" :key="index" :href="social.url" target="_blank" rel="noopener" class="text-white bg-blue-500 dark:bg-blue-600 p-2 rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
            <font-awesome-icon :icon="['fab', social.icon]" class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>

    <!-- Text Content -->
    <div class="relative z-10 mt-6 text-center space-y-2">
      <h3 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-400">
        {{ member.name }}
      </h3>
      <p class="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">
        {{ member.position }}
      </p>
      <p class="text-gray-600 dark:text-gray-300 text-sm mt-2 max-w-xs transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
        {{ member.bio }}
      </p>
    </div>

    <!-- Decorative elements -->
    <div class="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-blue-400/10 dark:bg-blue-600/10 group-hover:bg-blue-400/20 transition-all duration-500"></div>
    <div class="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-blue-400/5 dark:bg-blue-600/5 group-hover:bg-blue-400/10 transition-all duration-700"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faLinkedin, 
  faTwitter, 
  faInstagram, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add the icons to the library
library.add(faLinkedin, faTwitter, faInstagram, faGithub);

export default defineComponent({
  props: {
    member: {
      type: Object,
      required: true,
      validator: (member) => {
        return [
          'name',
          'position',
          'image',
          'bio',
          'socialLinks'
        ].every(key => key in member);
      }
    }
  },
  components: {
    FontAwesomeIcon
  }
});
</script>