<template>
    <div class="block p-6 border rounded-lg   my-8 mx-10">
      <h6 class="mb-2 text-2xl font-bold  text-cyan-800">
        {{ post.title }}
      </h6>

      <p v-if="author" class="mb-2 text-gray-400 flex items-center">
        <i class="material-icons pr-1">
          draw
        </i>
      <p>Written by:  {{ author.name }}</p>
      </p>

      <p class="text-gray-800 mb-10">
        {{ post.body }}
      </p>

      <p class="text-cyan-900 font-semibold my-3 flex items-center">
        <i class="material-icons pr-1">
          comment
        </i>
      <p class="text-lg">Comments :</p>
      </p>
      <div v-for="comment in CommentStore.getPostComments" :key="comment.id"
        class="border p-4 m-4 text-gray-700 rounded-lg border-b-4 border-gray-500 ">
        <p class="font-semibold mb-2">{{ comment.name }}</p>
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

