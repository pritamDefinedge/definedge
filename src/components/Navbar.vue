<template>
  <div class="bg-purple-400">
    <nav class="container p-4 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <router-link to="/" class="
            text-xl
            font-bold
            text-white
            md:text-2xl
            hover:text-indigo-500
          ">Logo
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="
              text-white
              hover:text-indigo-500
              focus:outline-none focus:text-gray-400
            ">
            <i class="material-icons">menu</i>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'" class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        ">
        <li class="text-white hover:text-indigo-500">Home</li>
        <li class="text-white hover:text-indigo-500">About</li>
        <li class="text-white hover:text-indigo-500">Blogs</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>