import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const AddPostSlice = createSlice({
  name: 'addpost',
  initialState,
  reducers: {
    open: (state) => {
      state.value = true
    },
    close: (state) => {
      state.value = false
    }
  },
})

export const { open, close } = AddPostSlice.actions

export default AddPostSlice.reducer