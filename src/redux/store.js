import { configureStore } from '@reduxjs/toolkit'
import { AddPostSlice } from './AddPostSlice'
import { UserSlice } from './UserSlice'

export const store = configureStore({
  reducer: {
    AddPost: AddPostSlice.reducer,
    User: UserSlice.reducer
  },
})