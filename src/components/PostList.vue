<template>
  <div>
    <!---loading-->
    <div v-if="PostStore.loading">Loading users ...</div>
    <div v-for="post in PostStore.posts" :key="post.id">
      <router-link :to="`/user/${post.id}`">
        <p>{{ post.title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { usePostStore } from "../stores/PostStore";
export default {
  setup() {
    const PostStore = usePostStore();

    //fetch posts
    PostStore.getPosts();
    return { PostStore };
  },
}
</script>
