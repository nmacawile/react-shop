import { createSlice } from "@reduxjs/toolkit";

function calculateTotal(items) {
  return items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0.0
  );
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: { items: [], total: 0.0 },
  },
  reducers: {
    addItem: (state, action) => {
      const product = { ...action.payload };
      const newItem = { product, quantity: 1 };
      const items = state.value.items;
      if (items.every((item) => item.product.id !== product.id)) {
        const newItems = [...items, newItem];
        const total = calculateTotal(newItems);
        state.value = { items: newItems, total };
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const newItems = state.value.items.filter(
        (item) => item.product.id !== id
      );
      const total = calculateTotal(newItems);
      state.value = { items: newItems, total };
    },
    updateQuantity: (state, action) => {
      const items = state.value.items;
      const { id, quantity } = action.payload;
      if (quantity > 999 || quantity < 1) return;
      const itemIndex = items.findIndex((item) => item.product.id === id);
      if (itemIndex === -1) return;
      const product = { ...items[itemIndex].product };
      const updatedItem = { product, quantity };
      const newItems = [
        ...items.slice(0, itemIndex),
        updatedItem,
        ...items.slice(itemIndex + 1),
      ];
      const total = calculateTotal(newItems);
      state.value = { items: newItems, total };
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
