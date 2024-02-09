import { createSlice } from "@reduxjs/toolkit";

export const breadcrumbsSlice = createSlice({
  name: "breadcrumbs",
  initialState: {
    value: [],
  },
  reducers: {
    setBreadcrumbs: (state, action) => {
      const breadcrumbs = [...action.payload];
      state.value = breadcrumbs;
    },
    clearBreadcrumbs: (state) => {
      state.value = [];
    },
  },
});

export const { setBreadcrumbs, clearBreadcrumbs } = breadcrumbsSlice.actions;

export default breadcrumbsSlice.reducer;
