import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { CollectionItem } from "./shop.interface";
import { fetchCollections } from "./shop.api";

export interface CollectionState {
  collections: CollectionItem[] | null;
  isFetching: boolean;
  errorMessage: string | undefined;
}

const initialState: CollectionState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

export const getCollectionsAsync = createAsyncThunk(
  "shop/fetchCollections",
  async () => {
    const { data } = await fetchCollections();
    return data;
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCollectionsAsync.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getCollectionsAsync.fulfilled, (state, action) => {
        state.isFetching = false;
        state.collections = action.payload;
      })
      .addCase(getCollectionsAsync.rejected, (state, action) => {
        state.isFetching = false;
        state.errorMessage = action.payload as string;
      });
  },
});

export const selectCollections = (state: RootState) => state.shop.collections;

export default shopSlice.reducer;
