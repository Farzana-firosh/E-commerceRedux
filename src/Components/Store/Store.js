import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from '../Products/ProductSlice'
import CartReducer from '../Context/CartSlice'
export const store = configureStore({
  reducer: {
    Products : ProductReducer,
    Cart : CartReducer,
  },
})