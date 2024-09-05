import { defineStore } from 'pinia'
import { type Order } from '../../../entities/order/model'

export default defineStore<any, any>('orderPreview', {
  actions: {
    confirmOrder(order: Order) {
      this.order.confirmed = true
      console.log('call API for confirm', order.id)
    }
  }
})
