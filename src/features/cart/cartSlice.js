import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      const id = action.payload;
      const newItem = { id, quantity: 1 };
      if (state.value.every((item) => item.id !== id))
        state.value = [...state.value, newItem];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((item) => item.id !== id);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
