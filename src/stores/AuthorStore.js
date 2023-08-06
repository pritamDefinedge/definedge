import { defineStore } from "pinia";
import { usePostStore } from "./PostStore";

export const useAuthorStore = defineStore('authorStore', {
  state: () => ({
    authors: [],
    loading: false,
    error: null,
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = usePostStore()
      return state.authors.find((author) => author.id === postStore.post.userId)
    }
  },
  actions: {
    // async getAuthors() {
    //   this.loading = true;
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //   const data = await response.json()
    //   this.authors = data
    //   this.loading = false
    // }
    async getAuthors() {
      this.loading = true
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error("Failed to fetch authors")
        }
        const data = await response.json()
        this.authors = data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  }
})

