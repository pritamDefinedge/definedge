<template>
  <div>
    <!-- Navbar always visible -->
    <Navbar />

    <!-- Router view for dynamic content -->
    <RouterView />

    <!-- Footer will only show when the current route is not 'login' -->
    <Footer v-if="!isLoginPage" />
  </div>
</template>

<script>
import { computed } from 'vue'; // Import computed from Vue
import { useRoute } from 'vue-router'; // to check the current route
import Navbar from "./pages/layout/Navbar.vue";
import Footer from "./pages/layout/Footer.vue";

export default {
  components: { Navbar, Footer },

  setup() {
    const route = useRoute();

    // Use computed property to check if the current route is 'login'
    const isLoginPage = computed(() => route.name === 'login');

    return {
      isLoginPage,
    };
  },
};
</script>
