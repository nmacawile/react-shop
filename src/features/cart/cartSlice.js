import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      const product = { ...action.payload };
      const newItem = { product, quantity: 1 };
      if (state.value.every((item) => item.product.id !== product.id))
        state.value = [...state.value, newItem];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((item) => item.product.id !== id);
    },
    updateQuantity: (state, action) => {
      const cartItems = state.value;
      const { id, quantity } = action.payload;
      if (quantity > 999 || quantity < 1) return;
      const itemIndex = cartItems.findIndex((item) => item.product.id === id);
      if (itemIndex === -1) return;
      const product = { ...cartItems[itemIndex].product };
      const updatedItem = { product, quantity };
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
