import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  page: 1,
  limit: 10,
};

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    setRecommendData: (state, action) => {
      const { title, author, page, limit } = action.payload;
      state.title = title;
      state.author = author;
      state.page = page;
      state.limit = limit;
      localStorage.setItem("recommended", JSON.stringify(state));
    },
  },
});

export const recommendReducer = recommendSlice.reducer;
