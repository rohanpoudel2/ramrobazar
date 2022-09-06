import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    user: false
  }
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = {
        user: action.payload
      }
    },
    logout: (state) => {
      state.value = {
        user: false
      }
    }
  }
})

export const { login, logout } = UserSlice.actions

export default UserSlice.reducer