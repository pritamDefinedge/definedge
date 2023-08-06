<template>
  <SearchPost />
  <PostList />
</template>

<script>
import PostList from "./PostList.vue";
import SearchPost from "./SearchPost.vue";

export default {
  components: { PostList, SearchPost },
};
</script>

