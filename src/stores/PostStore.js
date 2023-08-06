import { defineStore } from "pinia";

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null,
    searchQuery: '',
  }),
  getters: {
    filteredList(state) {
      // Check if there is a search query
      if (state.searchQuery) {
        return state.posts.filter(post =>
          post.title.toLowerCase().includes(state.searchQuery)
        );
      } else {
        return state.posts;
      }
    },
  },
  actions: {
    async getPosts() {
      this.posts = []
      this.loading = true
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
          throw new Error("Failed to fetch posts")
        }
        const data = await response.json()
        this.posts = data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async getPost(id) {
      this.post = null
      this.loading = true
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if (!response.ok) {
          throw new Error("Failed to fetch post")
        }
        const data = await response.json()
        this.post = data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async addPost(post) {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(post),
          headers: { 'Content-Type': 'application/json' }
        })
        if (!res.ok) {
          throw new Error("Failed to add post")
        }
        this.posts.push(post)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  }
})

