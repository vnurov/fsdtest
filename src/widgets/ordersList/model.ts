import { defineStore } from 'pinia'

export default defineStore<any, any>('ordersList', {
  state() {
    return { orders: [] }
  },
  actions: {
    fetchOrders() {
      console.log('call API for get orders')
      this.$patch({
        orders: [{ id: 1, confirmed: false }]
      })
    }
  }
})
