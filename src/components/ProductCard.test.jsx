import { describe, it, expect, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard.jsx";
import renderWithProviderWrapper, {
  store,
  mockStore,
} from "../helpers/renderWithProviderWrapper.jsx";

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

  beforeEach(() => {
    render(
      renderWithProviderWrapper(
        <BrowserRouter>
          <ProductCard product={sampleProduct} />
        </BrowserRouter>
      )
    );
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
      const actions = store.getActions();

      expect(actions).toEqual([
        { type: "cart/addItem", payload: "testproductid1211" },
      ]);
    });
  });

  describe("Remove from cart button test", () => {
    it("calls the removeItem reducer when clicked", () => {
      const testStore = mockStore({ cart: { value: [sampleProduct] } });

      render(
        renderWithProviderWrapper(
          <BrowserRouter>
            <ProductCard product={sampleProduct} />
          </BrowserRouter>,
          testStore
        )
      );

      fireEvent.click(screen.getByText("Remove"));
      const actions = testStore.getActions();

      expect(actions).toEqual([
        { type: "cart/removeItem", payload: "testproductid1211" },
      ]);
    });
  });
});
