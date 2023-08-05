<template>
  <div>
    <p>{{ PostStore.post?.title}}</p>
    <p>{{ PostStore.post?.body }}</p>
    <p>{{ CommentStore.name }}</p>
    <p>{{ CommentStore.email }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { usePostStore } from "../stores/PostStore";
import { useCommentStore } from '../stores/CommentStor';

export default {
  setup() {
    const PostStore = usePostStore();
    const CommentStore = useCommentStore();
    const route = useRoute() 
     //fetch post
     PostStore.getPost(route.params.id);
     CommentStore.getPostComments();

    return {PostStore,CommentStore}
  }
}
</script>

