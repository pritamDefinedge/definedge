<template>
  <SearchPost />
  <PostList />
  <!-- <div>
    <SearchPost/>
      <AddPost />
      <PostList />
  </div> -->
</template>

<script>
import { usePostStore } from "../stores/PostStore";
import PostList from "./PostList.vue";
import AddPost from "./AddPost.vue";
import SearchPost from "./SearchPost.vue";

export default {
  components: { PostList, AddPost, SearchPost },


};
</script>

