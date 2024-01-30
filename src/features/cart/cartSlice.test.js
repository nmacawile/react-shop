import cartSlice, { addItem, removeItem, updateQuantity } from "./cartSlice";

const sampleProduct1 = {
  id: "1",
  name: "Smartphone XYZ",
  price: 599.99,
  description: "A powerful and feature-rich smartphone for your daily needs.",
  rating: 4.5,
  category: "Electronics",
  image: "https://via.placeholder.com/300",
};

const sampleProduct2 = {
  id: "2",
  name: "Laptop ABC",
  price: 1299.99,
  description:
    "High-performance laptop with a sleek design for work and entertainment.",
  rating: 4.7,
  category: "Electronics",
  image: "https://via.placeholder.com/300",
};

describe("cartSlice", () => {
  describe("addItem reducer", () => {
    it("should add an item", () => {
      const initialState = { value: [] };
      const newState = cartSlice(initialState, addItem(sampleProduct1));
      expect(newState).toEqual({
        value: [
          {
            product: { ...sampleProduct1 },
            quantity: 1,
          },
        ],
      });
    });

    it("should avoid adding duplicate items", () => {
      const initialState = {
        value: [{ product: sampleProduct1, quantity: 1 }],
      };
      const newState = cartSlice(initialState, addItem(sampleProduct1));
      expect(newState).toEqual({
        value: [{ product: { ...sampleProduct1 }, quantity: 1 }],
      });
    });
  });

  describe("removeItem reducer", () => {
    it("should remove an item", () => {
      const initialState = {
        value: [
          { product: sampleProduct1, quantity: 1 },
          { product: sampleProduct2, quantity: 1 },
        ],
      };

      const newState = cartSlice(initialState, removeItem(sampleProduct1.id));
      expect(newState).toEqual({
        value: [{ product: { ...sampleProduct2 }, quantity: 1 }],
      });
    });
  });

  describe("updateQuantity reducer", () => {
    describe("when item exists", () => {
      it("should update an item", () => {
        const initialState = {
          value: [
            { product: sampleProduct1, quantity: 1 },
            { product: sampleProduct2, quantity: 1 },
          ],
        };

        const newState = cartSlice(
          initialState,
          updateQuantity({ id: sampleProduct1.id, quantity: 40 })
        );
        expect(newState).toEqual({
          value: [
            { product: { ...sampleProduct1 }, quantity: 40 },
            { product: { ...sampleProduct2 }, quantity: 1 },
          ],
        });
      });

      it("should guard against values greater than 999", () => {
        const initialState = {
          value: [
            { product: sampleProduct1, quantity: 1 },
            { product: sampleProduct2, quantity: 1 },
          ],
        };

        const newState = cartSlice(
          initialState,
          updateQuantity({ id: sampleProduct1.id, quantity: 9999 })
        );
        expect(newState).toEqual({
          value: [
            { product: sampleProduct1, quantity: 1 },
            { product: sampleProduct2, quantity: 1 },
          ],
        });
      });

      it("should guard against values less than 1", () => {
        const initialState = {
          value: [
            { product: sampleProduct1, quantity: 1 },
            { product: sampleProduct2, quantity: 1 },
          ],
        };

        const newState = cartSlice(
          initialState,
          updateQuantity({ id: sampleProduct1.id, quantity: -10 })
        );
        expect(newState).toEqual({
          value: [
            { product: sampleProduct1, quantity: 1 },
            { product: sampleProduct2, quantity: 1 },
          ],
        });
      });
    });

    describe("when item doesn't exist", () => {
      it("should not update an item", () => {
        const initialState = {
          value: [
            { product: sampleProduct1, quantity: 1 },
            { product: sampleProduct2, quantity: 1 },
          ],
        };

        const newState = cartSlice(
          initialState,
          updateQuantity({ id: "0", quantity: 40 })
        );
        expect(newState).toEqual({
          value: [
            { product: sampleProduct1, quantity: 1 },
            { product: sampleProduct2, quantity: 1 },
          ],
        });
      });
    });
  });
});
