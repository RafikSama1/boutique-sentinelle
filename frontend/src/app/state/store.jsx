
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/cartSlice'


export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice
    }
  })
}