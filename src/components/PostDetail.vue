<template>
  <div>
    <div v-if="PostStore.loading">Loading posts ...</div>
    <div v-if="PostStore.post">
      <!-- <Post2 :post="post" :author="AuthorStore.author" /> -->
      <Post2 :post="PostStore.post"  :author="AuthorStore.getPostAuthor"/>

      <!-- <div v-for="post in PostStore.posts" :key="post.id" class="my-3">
        <Post2 :post="post" />
      </div> -->
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { usePostStore } from "../stores/PostStore";
import { useAuthorStore } from '../stores/AuthorStore';
import Post2 from './Post2.vue'

export default {
  components: { Post2 },
  setup() {
    const route = useRoute();
    const PostStore = usePostStore();
    const AuthorStore =useAuthorStore();
    const AuthorsStore = useAuthorStore();

    PostStore.getPost(route.params.id);
    AuthorsStore.getAuthors();
    const post = PostStore.post;

    return { PostStore, post ,AuthorStore}

  }
}
</script>
