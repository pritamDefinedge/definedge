<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="title" v-model="title" />
      <input type="text" required placeholder="body" v-model="body" />
      <button>add</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { usePostStore } from "../stores/PostStore";
export default {
  setup() {
    const PostStore = usePostStore();
    const title = ref("");
    const body = ref("");

    const handleSubmit = () => {
      if (title.value.length > 0 && body.value.length > 0) {
        PostStore.addPost({
          title: title.value,
          body: body.value,
          id: Math.floor(Math.random() * 10000),
        });
        title.value = "";
        body.value = "";
      }
      console.log(title, body)
    };


    return { title, body,PostStore, handleSubmit }
  }
}
</script> 
