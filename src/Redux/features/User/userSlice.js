import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  username: "",
  name: "",
  isLoggedin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...action.payload, isLoggedin: true };
    },
    logOut: (state) => {
      return initialState;
    },
  },
});
export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
