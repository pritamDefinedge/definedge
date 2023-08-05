import { defineStore } from "pinia";

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    searchQuery: '',
  }),
  getters: {
    // filteredList(state) {
    //   const filteredPosts = state.posts.filter((post) => {
    //     // Search for posts based on the search query
    //     return post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
    //   })
    //   return filteredPosts
    // }
    filteredList(state) {
      // Check if there is a search query
      if (state.searchQuery) {
        return state.posts.filter(post =>
          post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      } else {
        return state.posts;
      }
    },
  },
  actions: {
    async getPosts() {
      this.loading = true;
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      this.posts = data
      this.loading = false
    },
    async getPost(id) {
      this.post = null;
      this.loading = true;
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data = await response.json()
      this.post = data
      this.loading = false
    },
    async addPost(post) {
      this.posts.push(post)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/json' }
      })
      if (res.error) {
        console.log(res.error)
      }
    },
  }
})

