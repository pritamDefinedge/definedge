<template>
  <h1 class="m-5 text-cyan-700 font-bold text-2xl text-center">Create a New Post !</h1>
  <div class="w-full max-w-md mx-auto my-10">
    <form @submit.prevent="handleSubmit" class="bg-white rounded-lg px-8 pt-6 pb-8 mb-4 border-2 border-gray-300">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          class="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required type="text" placeholder="Title" v-model="title">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Your description</label>
        <textarea required rows="6" v-model="body"
          class="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Write your thoughts here..."></textarea>
      </div>
      <button
        class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit">
        Create
      </button>
    </form>
  </div>
  <!-- <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="title" v-model="title" />
      <input type="text" required placeholder="body" v-model="body" />
      <button>add</button>
    </form> -->
</template>

<script>
import { ref } from "vue";
import { usePostStore } from "../stores/PostStore";
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const PostStore = usePostStore();
    const title = ref("");
    const body = ref("");

    // const handleSubmit = () => {
    //   if (title.value.length > 0 && body.value.length > 0) {
    //     PostStore.addPost({
    //       title: title.value,
    //       body: body.value,
    //       id: Math.floor(Math.random() * 10000),
    //     });
    //     title.value = "";
    //     body.value = "";
    //   }
    //   console.log(title, body)
    //   //  router.push('/')
    //   router.push({ path: '/postList' })
    // };
    const handleSubmit = () => {
      if (title.value.length > 0 && body.value.length > 0) {
        const newPost = {
          title: title.value,
          body: body.value,
          id: Math.floor(Math.random() * 10000),
        };
        PostStore.addPost(newPost);
        title.value = ""; // Clear the form
        body.value = "";
      }
      router.push('/postlist'); // Go back to the home page
    };


    return { title, body, PostStore, handleSubmit }
  }
}
</script> 
