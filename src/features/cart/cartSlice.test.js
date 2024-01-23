import cartSlice, { addItem, removeItem } from "./cartSlice";

describe("cartSlice", () => {
  describe("addItem reducer", () => {
    it("should add an item", () => {
      const initialState = { value: [] };
      const newState = cartSlice(initialState, addItem(1));
      expect(newState).toEqual({ value: [{ id: 1, quantity: 1 }] });
    });

    it("should avoid adding duplicate items", () => {
      const initialState = { value: [{ id: 1, quantity: 1 }] };
      const newState = cartSlice(initialState, addItem(1));
      expect(newState).toEqual({ value: [{ id: 1, quantity: 1 }] });
    });
  });

  describe("removeItem reducer", () => {
    it("should remove an item", () => {
      const initialState = {
        value: [
          { id: 1, quantity: 1 },
          { id: 2, quantity: 1 },
        ],
      };

      const newState = cartSlice(initialState, removeItem(1));
      expect(newState).toEqual({ value: [{ id: 2, quantity: 1 }] });
    });
  });
});
