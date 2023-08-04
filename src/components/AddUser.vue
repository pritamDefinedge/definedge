<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="name" v-model="name" />
      <input type="text" required placeholder="username" v-model="username" />
      <input type="email" required placeholder="email" v-model="email" />
      <input type="number" required placeholder="phone" v-model="phone" />
      <button>add</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useUserStore } from "../stores/UserStore";
export default {
  setup() {
    const UserStore = useUserStore();
    const name = ref("");
    const username = ref("");
    const email = ref("");
    const phone = ref("");

    const handleSubmit = () => {
      if (name.value.length > 0 && username.value.length > 0) {
        UserStore.addUser({
          name: name.value,
          username: username.value,
          email: email.value,
          phone: phone.value,
          id: Math.floor(Math.random() * 10000),
        });
        name.value = "";
        username.value = "";
        email.value = "";
        phone.value = "";

      }
      console.log(name, username, email, phone)
    };


    return { name, username, email, phone, handleSubmit }
  }
}
</script> 
