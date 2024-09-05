import { defineStore } from 'pinia'
import orderModel, { type Order } from '../../entities/order/model'

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

    confirmOrder(order: Order) {
      orderModel().confirmOrder(order)
    }
  }
})
