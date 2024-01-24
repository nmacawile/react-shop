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
    updateQuantity: (state, action) => {
      const cartItems = state.value;
      const { id, quantity } = action.payload;
      if (quantity > 999 || quantity < 1) return;
      const itemIndex = state.value.findIndex((item) => item.id === id);
      if (itemIndex === -1) return;
      const updatedItem = action.payload;
      state.value = [
        ...cartItems.slice(0, itemIndex),
        updatedItem,
        ...cartItems.slice(itemIndex + 1),
      ];
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
