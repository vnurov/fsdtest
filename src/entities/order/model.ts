import { defineStore } from 'pinia'

export interface Order {
  id: number
  confirmed: boolean
}

export default defineStore<any, any>('order', {
  state() {
    return {
      order: undefined,
      orders: []
    }
  },

  actions: {
    fetchOrders() {
      console.log('call API for get orders')
      this.$patch({
        orders: [{ id: 1, confirmed: false }]
      })
    },

    fetchOrder() {
      console.log('call API for get order')
      this.$patch({
        order: { id: 1, confirmed: false }
      })
    }
  }
})
