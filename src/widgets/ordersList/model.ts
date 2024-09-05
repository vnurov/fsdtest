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
    },

    confirmOrder(id: any) {
      const order = this.orders.find((o: any) => o.id === id)
      if (order) {
        order.confirmed = true
        console.log('call API for confirm')
      }
    }
  }
})
