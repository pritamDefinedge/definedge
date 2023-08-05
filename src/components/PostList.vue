<template>
  <div>
    <div v-if="PostStore.loading">Loading users ...</div>
    <div v-for="post in PostStore.posts" :key="post.id" class="my-3">
      <router-link :to="`/post/${post.id}`">
        {{ post.title }}
      </router-link>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { usePostStore } from "../stores/PostStore";
export default {
  setup() {
    const PostStore = usePostStore();

    PostStore.getPosts();

    return { PostStore };
  },
}
</script>
