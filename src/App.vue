<template>
  <Navbar />
  <RouterView />
</template>

<script>
import Navbar from "./pages/layout/Navbar.vue";

export default {
  components: { Navbar },
};
</script>
