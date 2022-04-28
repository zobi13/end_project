import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  register() { },
  login() { },
  logout() { },
  getActiveUser() { },
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    access: null,
    activeUser: null,
  },
  reducers: {
    setActiveUser(state, action) {
      state.activeUser = action.payload;
    },
    setToken(state, action) {
      state.access = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  register,
  login,
  logout,
  getActiveUser,
  setActiveUser,
  setToken,
} = authSlice.actions;
export default authSlice.reducer;
