<template>
  <div>
    <!---loading-->
    <div v-if="UserStore.loading">Loading users ...</div>
    <div v-for="user in UserStore.users" :key="user.id">
      <router-link :to="`/user/${user.id}`">
        <p>{{ user.name }}</p>
      </router-link>
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

