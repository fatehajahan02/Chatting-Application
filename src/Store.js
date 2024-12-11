import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './Slices/userSlice'

export const store = configureStore({
  reducer: {
    userDetails : userSlice
  },
})