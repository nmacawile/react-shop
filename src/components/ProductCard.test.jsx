import { describe, it, expect, beforeEach } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard.jsx";
import {
  store,
  mockStore,
  renderWithReduxAndBrowserRouter,
} from "../helpers/testHelpers.jsx";

describe("ProductCard component test", () => {
  const sampleProduct = {
    id: "testproductid1211",
    name: "Test Product",
    price: 22129.99,
    description: "A test product.",
    rating: 4.5,
    category: "Electronics",
    image: "https://via.placeholder.com/300",
  };

  describe("store is empty", () => {
    beforeEach(() => {
      renderWithReduxAndBrowserRouter(<ProductCard product={sampleProduct} />);
    });

    it("renders the title", () => {
      expect(screen.getByText("Test Product")).toBeInTheDocument();
    });

    it("renders the formatted price with a separator and a currency symbol", () => {
      expect(screen.getByText("$22,129.99")).toBeInTheDocument();
    });

    it("renders the rating", () => {
      expect(screen.getByText("4.5")).toBeInTheDocument();
    });

    describe("Add to cart button test", () => {
      it("calls the addItem reducer when clicked", () => {
        fireEvent.click(screen.getByText("Add to Cart"));
        const latestAction = store.getActions().pop();

        expect(latestAction).toEqual({
          type: "cart/addItem",
          payload: { ...sampleProduct },
        });
      });
    });
  });

  describe("store has an item", () => {
    describe("Remove from cart button test", () => {
      it("calls the removeItem reducer when clicked", () => {
        const testStore = mockStore({
          cart: {
            value: {
              items: [{ product: sampleProduct, quantity: 1 }],
              total: 22129.99,
            },
          },
        });

        renderWithReduxAndBrowserRouter(
          <ProductCard product={sampleProduct} />,
          testStore
        );

        fireEvent.click(screen.getByText("Added"));
        const latestAction = testStore.getActions().pop();

        expect(latestAction).toEqual({
          type: "cart/removeItem",
          payload: "testproductid1211",
        });
      });
    });
  });
});
