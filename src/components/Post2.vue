<template>
  <div>
    <div>
      <h2>{{ post.title }}</h2>
      <p v-if="author" class="text-red-500">Written by: {{ author.name }}
        <!-- <span class="text-blue-600">Comments: {{ CommentStore.getPostComments.length }}</span> -->
      </p>
      <p>{{ post.body }}</p>
    </div>
    <hr>
    <h3>Comments:</h3>
    <!-- <div v-for="comment in CommentStore.comments" :key="comment.id"> -->
    <!-- <div v-for="comment in comments" :key="comment.id">
      <h3>{{ comment.name }}</h3>
      <p>{{ comment.body }}</p>
    </div> -->
    <!-- <div v-for="comment in CommentStore.getPostComments" :key="comment.id"> -->
    <div v-for="comment in CommentStore.getPostComments" :key="comment.id">
      <h3>{{ comment.name }}</h3>
      <p>{{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
import { useCommentStore } from "../stores/CommentStore";

export default {
  props: ['post', 'author'],

  setup(props) {
    console.log(props.post, props.author)

    // const CommentStore = useCommentStore();

    // const comments = CommentStore.getComments();


    const CommentStore = useCommentStore();
    //fetch users
    CommentStore.getComments();
    //  CommentStore.getPostComments();
    // const comments = CommentStore.getPostComments;
    return { CommentStore };

    // return { CommentStore, comments };

  },

}
</script>

