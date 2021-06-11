import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";
import { Directory } from "./directory.interface";
import { fetchDirectories } from "./directory.api";

export interface DirectoryState {
  sections: Directory[] | null;
  isFetching: boolean;
  errorMessage: string | undefined;
}

const initialState: DirectoryState = {
  sections: null,
  isFetching: false,
  errorMessage: undefined,
};

export const getDirectoriesAsync = createAsyncThunk(
  "directory/fetchDirectories",
  async () => {
    const { data } = await fetchDirectories();
    console.log(data);
    return data;
  }
);

export const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDirectoriesAsync.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getDirectoriesAsync.fulfilled, (state, action) => {
        state.isFetching = false;
        state.sections = action.payload;
      })
      .addCase(getDirectoriesAsync.rejected, (state, action) => {
        state.isFetching = false;
        state.errorMessage = "Something went wrong";
      });
  },
});

export const selectDirectories = (state: RootState) => state.directory.sections;

export default directorySlice.reducer;
