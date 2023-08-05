import { defineStore } from "pinia";
import { usePostStore } from "./PostStore";

export const useAuthorStore = defineStore('authorStore', {
  state: () => ({
    authors: [],
    loading: false
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = usePostStore()
      return state.authors.find((author) => author.id === postStore.post.userId)
    }
  },
  actions: {
    async getAuthors() {
      this.loading = true;
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      this.authors = data
      this.loading = false
    }
  }
})

