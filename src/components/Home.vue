<template>
  <!-- <div>
    <SearchPost/>
      <AddPost />
      <PostList />
  </div> -->
<Navbar/>
</template>

<script>
import PostList from "./PostList.vue";
import AddPost from "./AddPost.vue";
import SearchPost from "./SearchPost.vue";
import Navbar from "./Navbar.vue";

export default {
  components: { PostList, AddPost, Navbar },

};
</script>

