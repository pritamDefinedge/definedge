<template>
  <div>
    <p>{{ UserStore.user?.username }}</p>
    <p>{{ UserStore.user?.email }}</p>
    <p>{{ UserStore.user?.address }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useUserStore } from "../stores/UserStore";
export default {
  setup() {
    const UserStore = useUserStore();
    const route = useRoute() 
     //fetch user
     UserStore.getUser(route.params.id);

    return {UserStore}
  }
}
</script>

<style lang="scss" scoped></style>