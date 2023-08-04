import { defineStore } from "pinia";

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [],
    post: null,
    loading: false
  }),
  getters: {

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