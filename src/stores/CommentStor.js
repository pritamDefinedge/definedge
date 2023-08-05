import { defineStore } from 'pinia'
import { usePostStore } from './PostStore'

export const useCommentStore = defineStore('commentStore',{
  id: 'comment',
  state: () => ({
    comments: []
  }),
  getters: {
    getPostComments: (state) => {
      const postSore = usePostStore()
      return state.comments.filter((post) => post.postId === postSore.post.id)
    }
  },
  actions: {
    async fetchComments() {
      this.comments = await fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
    }
  }
})