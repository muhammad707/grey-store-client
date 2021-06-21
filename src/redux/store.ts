import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import directoryReducer from "./directory/directory.slice";
import shopReducer from "./shop/shop.slice";

export const store = configureStore({
  reducer: {
    directory: directoryReducer,
    shop: shopReducer,
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
