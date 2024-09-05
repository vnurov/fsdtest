import { defineStore } from 'pinia'

export default defineStore<any, any>('orderPreview', {
  state() {
    return { chat: undefined }
  }
})
