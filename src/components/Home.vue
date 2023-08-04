<template>
  <div>
    <!---loading-->
    <div class="loading" v-if="UserStore.loading">Loading users ...</div>
    <div v-for="user in UserStore.users" :key="user.id">
      {{ user.name}}
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../stores/UserStore";

export default {
  setup() {
    const UserStore = useUserStore();

    //fetch users
    UserStore.getUsers();



    return { UserStore };
  },
};
</script>

