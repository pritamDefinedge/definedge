import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [],
    loading: false
  }),
  getters: {

  },
  actions: {
    async getUsers() {
      this.loading = true;
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      this.users = data
      this.loading = false
    }

  }
})