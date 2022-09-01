import { configureStore } from '@reduxjs/toolkit'
import { AddPostSlice } from './AddPostSlice'

export const store = configureStore({
  reducer: {
    AddPost: AddPostSlice.reducer
  },
})