import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { robotsReducer } from "./features/robots/robotsSlice";
import { userReducer } from "./features/robots/userSlice";

export const store = configureStore({
  reducer: {
    robots: robotsReducer,
    users: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
