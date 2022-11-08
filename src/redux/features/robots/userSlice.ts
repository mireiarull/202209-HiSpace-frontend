import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";
import { UserState } from "./types";

const userInitialState: UserState = {
  id: "",
  userName: "",
  email: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "robots",
  initialState: userInitialState,
  reducers: {
    loadRobots: (previousUser, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});
