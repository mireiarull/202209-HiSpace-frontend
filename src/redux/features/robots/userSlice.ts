import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";
import { UserState } from "./types";

const userInitialState: UserState = {
  id: "",
  userName: "",
  email: "",
  isLogged: false,
  token: "",
};

const userSlice = createSlice({
  name: "users",
  initialState: userInitialState,
  reducers: {
    loginUser: (previousUser, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),
    logOutUser: (previousUser) => ({ ...userInitialState }),
  },
});

export const userReducer = userSlice.reducer;
export const {
  loginUser: loginUserActionCreator,
  logOutUser: logOutUserActionCreator,
} = userSlice.actions;
