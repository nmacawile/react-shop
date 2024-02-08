import { vi, describe, it, expect, beforeEach } from "vitest";
import { screen, waitFor, fireEvent, act } from "@testing-library/react";
import { renderWithRedux, mockStore, store } from "../helpers/testHelpers";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Product from "./Product.jsx";
import productService from "../services/productService";

vi.mock("../services/productService");

describe("Product component", () => {
  const sampleProduct = {
    id: "testproductid1211",
    name: "Test Product",
    price: 22129.99,
    description: "A test product.",
    rating: 4.5,
    category: "Electronics",
    image: "https://via.placeholder.com/300",
  };

  productService.getProduct.mockResolvedValue(sampleProduct);

  describe("Product is not in cart", () => {
    beforeEach(() => {
      renderWithRedux(
        <MemoryRouter initialEntries={[`/product/${sampleProduct.id}`]}>
          <Routes>
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
        </MemoryRouter>
      );
    });

    it("initially renders the loading placeholder", () => {
      expect(screen.getByTestId("product-placeholder")).toBeInTheDocument();
    });

    it("renders the product name", async () => {
      await waitFor(() =>
        expect(screen.getByText(sampleProduct.name)).toBeInTheDocument()
      );
    });

    it("renders the product name", async () => {
      await waitFor(() =>
        expect(screen.getByText(sampleProduct.description)).toBeInTheDocument()
      );
    });

    describe("Add to cart button test", () => {
      it("calls the addItem reducer when clicked", async () => {
        let addToCartButton;

        await waitFor(() => {
          expect(screen.getByText("Add to Cart")).toBeInTheDocument();
          addToCartButton = screen.getByText("Add to Cart");
        });
        act(() => {
          fireEvent.click(addToCartButton);
        });
        const latestAction = store.getActions().pop();

        expect(latestAction).toEqual({
          type: "cart/addItem",
          payload: { ...sampleProduct },
        });
      });
    });
  });

  describe("Product is in cart", () => {
    const testStore = mockStore({
      cart: {
        value: {
          items: [{ product: sampleProduct, quantity: 1 }],
          total: 22129.99,
        },
      },
    });

    beforeEach(() => {
      renderWithRedux(
        <MemoryRouter initialEntries={[`/product/${sampleProduct.id}`]}>
          <Routes>
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
        </MemoryRouter>,
        testStore
      );
    });

    describe("Remove from cart button test", () => {
      it("calls the addItem reducer when clicked", async () => {
        let removeFromCart;

        await waitFor(() => {
          expect(screen.getByText("In Cart")).toBeInTheDocument();
          removeFromCart = screen.getByText("In Cart");
        });
        act(() => {
          fireEvent.click(removeFromCart);
        });

        const latestAction = testStore.getActions().pop();

        expect(latestAction).toEqual({
          type: "cart/removeItem",
          payload: sampleProduct.id,
        });
      });
    });
  });
});
