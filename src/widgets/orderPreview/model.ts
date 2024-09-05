import { defineStore } from 'pinia'

export default defineStore<any, any>('orderPreview', {
  state() {
    return { order: undefined }
  },
  actions: {
    fetchOrder() {
      console.log('call API for get order')
      this.$patch({
        order: { id: 1, confirmed: false }
      })
    }
  }
})
