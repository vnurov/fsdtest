import { defineStore } from 'pinia'

export interface Order {
  id: number
  confirmed: boolean
}

export default defineStore<any, any>('order', {})
