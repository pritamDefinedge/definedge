<template>
  <div>
    <p>{{ PostStore.post?.title}}</p>
    <p>{{ PostStore.post?.body }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { usePostStore } from "../stores/PostStore";
export default {
  setup() {
    const PostStore = usePostStore();
    const route = useRoute() 
     //fetch post
     PostStore.getPost(route.params.id);

    return {PostStore}
  }
}
</script>

