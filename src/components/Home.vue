<template>
  <div>

    <!---loading-->
    <div v-if="UserStore.loading">Loading users ...</div>
    <div v-for="user in UserStore.users" :key="user.id">
      <router-link :to="`/user/${user.id}`">
        <p>{{ user.name }}</p>
      </router-link>
    </div>
    <AddUser />
  </div>
</template>

<script>
import { useUserStore } from "../stores/UserStore";
import AddUser from "./AddUser.vue";
import UserDetail from "./UserDetail.vue";

export default {
  setup() {
    const UserStore = useUserStore();
    //fetch users
    UserStore.getUsers();
    return { UserStore };
  },
  components: { AddUser, UserDetail }
};
</script>

