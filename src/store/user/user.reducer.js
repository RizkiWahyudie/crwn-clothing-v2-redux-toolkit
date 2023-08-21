import { createSlice } from "@reduxjs/toolkit";
// import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "users",
  // di redux toolkit tidak lagi menggunakan type
  // dia men generate type secara automatis
  // berdasarkan name reducer kemudian nama functionnya
  // type: "users/setCurrentUser"
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    }
  }
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

// react redux
// export const userReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };
