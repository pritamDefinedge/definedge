<template>
  <div>
    <!-- Navbar always visible except for login and open_demat_account routes -->
    <Navbar v-if="!isExcludedPage" />

    <!-- Router view for dynamic content -->
    <RouterView />

    <!-- Footer will only show when the current route is not 'login' or 'open_demat_account' -->
    <Footer v-if="!isExcludedPage" />
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

    // Use computed property to check if the current route is 'login' or 'open_demat_account'
    const isExcludedPage = computed(() => route.name === 'login' || route.name === 'open_demat_account');

    return {
      isExcludedPage,
    };
  },
};
</script>
