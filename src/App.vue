<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script>
import Navbar from "./pages/layout/Navbar.vue";
import Footer from "./pages/layout/Footer.vue";

export default {
  components: { Navbar, Footer },
};
</script>
