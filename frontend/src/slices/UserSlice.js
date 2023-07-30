import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    users:[]
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
      // console.log('User Details', action.payload)
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      // console.log('User Details', state.user)
    },
    viewUsers:(state,action)=>{
      state.users = action.payload
    }
  },
});

export const { login, logout, viewUsers } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectUsers = (state) => state.user.users;
export default userSlice.reducer;