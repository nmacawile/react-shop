import cartSlice, { addItem, removeItem, updateQuantity } from "./cartSlice";

describe("cartSlice", () => {
  describe("addItem reducer", () => {
    it("should add an item", () => {
      const initialState = { value: [] };
      const newState = cartSlice(initialState, addItem("1"));
      expect(newState).toEqual({ value: [{ id: "1", quantity: 1 }] });
    });

    it("should avoid adding duplicate items", () => {
      const initialState = { value: [{ id: "1", quantity: 1 }] };
      const newState = cartSlice(initialState, addItem("1"));
      expect(newState).toEqual({ value: [{ id: "1", quantity: 1 }] });
    });
  });

  describe("removeItem reducer", () => {
    it("should remove an item", () => {
      const initialState = {
        value: [
          { id: "1", quantity: 1 },
          { id: "2", quantity: 1 },
        ],
      };

      const newState = cartSlice(initialState, removeItem("1"));
      expect(newState).toEqual({ value: [{ id: "2", quantity: 1 }] });
    });
  });

  describe("updateQuantity reducer", () => {
    describe("when item exists", () => {
      it("should update an item", () => {
        const initialState = {
          value: [
            { id: "1", quantity: 1 },
            { id: "2", quantity: 1 },
          ],
        };

        const newState = cartSlice(
          initialState,
          updateQuantity({ id: "1", quantity: 40 })
        );
        expect(newState).toEqual({
          value: [
            { id: "1", quantity: 40 },
            { id: "2", quantity: 1 },
          ],
        });
      });

      it("should guard against values greater than 999", () => {
        const initialState = {
          value: [
            { id: "1", quantity: 1 },
            { id: "2", quantity: 1 },
          ],
        };

        const newState = cartSlice(
          initialState,
          updateQuantity({ id: "1", quantity: 9999 })
        );
        expect(newState).toEqual({
          value: [
            { id: "1", quantity: 1 },
            { id: "2", quantity: 1 },
          ],
        });
      });

      it("should guard against values less than 1", () => {
        const initialState = {
          value: [
            { id: "1", quantity: 1 },
            { id: "2", quantity: 1 },
          ],
        };

        const newState = cartSlice(
          initialState,
          updateQuantity({ id: "1", quantity: -10 })
        );
        expect(newState).toEqual({
          value: [
            { id: "1", quantity: 1 },
            { id: "2", quantity: 1 },
          ],
        });
      });
    });

    describe("when item doesn't exist", () => {
      it("should not update an item", () => {
        const initialState = {
          value: [
            { id: "1", quantity: 1 },
            { id: "2", quantity: 1 },
          ],
        };

        const newState = cartSlice(
          initialState,
          updateQuantity({ id: "0", quantity: 40 })
        );
        expect(newState).toEqual({
          value: [
            { id: "1", quantity: 1 },
            { id: "2", quantity: 1 },
          ],
        });
      });
    });
  });
});
