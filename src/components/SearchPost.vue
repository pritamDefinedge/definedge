<template>
  <div class="w-full max-w-md my-5 mx-auto">
    <div class="flex items-center">
      <input type="text" v-model="searchQuery" placeholder="Search Post …" @input="searchPosts"
        class="p-2 m-2 border-2 border-gray-300 rounded-lg w-96" />
      <i class="material-icons m-2 text-gray-500 text-4xl">search</i>
    </div>
  </div>
  <div class="mx-auto">
    <li v-for="(post, index) in filteredPosts" :key="index"
      class="block p-6 bg-gray-100 border shadow-slate-400 shadow-xl rounded-lg hover:bg-gray-200 my-8 mx-10">
      <h6 class="mb-2 text-xl tracking-tight text-gray-700">
        <router-link :to="`/post/${post.id}`">
          {{ post.title }}
        </router-link>
      </h6>
    </li>
  </div>
</template>

<script>
import { usePostStore } from '../stores/PostStore';
import { ref, computed } from 'vue';

export default {
  setup() {
    const postStore = usePostStore();
    const searchQuery = ref('');

    // Define a computed property to get the filtered list of posts
    const filteredPosts = computed(() => {
      if (searchQuery.value) {
        return postStore.filteredList.filter(post =>
          post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      } else {
        return [];
      }
    });

    const searchPosts = () => {
      // Update the searchQuery in the store
      postStore.searchQuery = searchQuery.value;
    };

    return {
      searchQuery,
      filteredPosts,
      searchPosts
    };
  }
};
</script>

