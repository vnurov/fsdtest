import { defineStore } from 'pinia'
import orderModel, { type Order } from '../../entities/order/model'

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
    },

    confirmOrder(order: Order) {
      orderModel().confirmOrder(order)
    }
  }
})
