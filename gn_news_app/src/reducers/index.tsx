import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState, Article } from "../types/globalTypes";

interface RootState {
  listVisibility: boolean;
  articles: Article[];
}

const initialState: RootState = {
  listVisibility: true,
  articles: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleList(state: AppState) {
      state.listVisibility = !state.listVisibility;
    },
    addArticles(state: AppState, action: PayloadAction<Article[]>) {
      state.articles = action.payload;
    },
  },
});

export const { toggleList, addArticles } = appSlice.actions;

export default appSlice.reducer;
