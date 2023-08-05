<template>
  <div>
    <AddPost />
    <PostList />
  </div>
</template>

<script>
import PostList from "./PostList.vue";
import AddPost from "./AddPost.vue";


export default {
  components: { PostList, AddPost }
};
</script>

