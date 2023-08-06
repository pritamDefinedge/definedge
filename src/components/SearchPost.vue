<!-- <template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search…" @input="searchPosts" />
    <ul v-if="!searchQuery">
      <li v-for="(post, index) in filteredPosts" :key="index">
        <p>{{ post.title }}</p>
        <p>{{ post.body }}</p>
      </li>
    </ul>
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
</script> -->


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




  <!-- <div class="w-full max-w-md my-5 mx-auto">
    <div class="relative mb-4 flex w-full flex-wrap items-stretch">
      <input 
        type="text" 
        v-model="searchQuery"
        @input="searchPosts"
        placeholder="Search"
        class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300  px-3 py-[0.25rem] text-base font-normal text-neutral-700 outline-none "
        />
      <span class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700">
        <i class="material-icons">search</i>
      </span>
    </div>
  </div> -->
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
<!-- ------------------------------------------------------------------------------- -->
 <!-- <script>
import { usePostStore } from '../stores/PostStore';
import { ref,computed } from 'vue';
export default {
  setup() {
    const postStore = usePostStore()
    const searchQuery = ref('')

    // Define a computed property to get the filtered list of posts
    const filteredPosts = computed(() => {
      return postStore.filteredList.filter(post =>
        post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    })

    const searchPosts = () => {
      // Update the searchQuery in the store
      postStore.searchQuery = searchQuery.value
    }

    return {
      searchQuery,
      filteredPosts,
      searchPosts
    }
  }
}
</script>  -->

