import { defineStore } from 'pinia'

export interface Order {
  id: number
  confirmed: boolean
}

export default defineStore<any, any>('order', {
  actions: {
    confirmOrder(order: Order) {
      this.order.confirmed = true
      console.log('call API for confirm', order.id)
    }
  }
})
