import { defineStore } from "pinia";
import { usePostStore } from "./PostStore"

export const useCommentStore = defineStore('commentStore', {
  state: () => ({
    comments: [],
    loading: false,
    error: null,
  }),
  getters: {
    getPostComments: (state) => {
      const postSore = usePostStore()
      return state.comments.filter((post) => post.postId === postSore.post.id)
    }
  },
  actions: {
    // async getComments() {
    //   this.loading = true;
    //   const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    //   const data = await response.json()
    //   this.comments = data
    //   this.loading = false
    // },
    async getComments() {
      this.loading = true
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        if (!response.ok) {
          throw new Error("Failed to fetch comments")
        }
        const data = await response.json()
        this.comments = data
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  }
})

