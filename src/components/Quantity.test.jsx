import { describe, it, expect } from "vitest";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";
import renderWithProviderWrapper from "../helpers/renderWithProviderWrapper.jsx";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

describe("Quantity component test", () => {
  const sampleProduct = {
    id: "testproductid1211",
    name: "Test Product",
    price: 22129.99,
    description: "A test product.",
    rating: 4.5,
    category: "Electronics",
    image: "https://via.placeholder.com/300",
  };

  let increaseButton;
  let decreaseButton;
  let inputField;

  const createStore = () => {
    return configureStore({
      reducer: { cart: cartReducer },
      preloadedState: {
        cart: { value: [{ id: sampleProduct.id, quantity: 10 }] },
      },
    });
  };

  beforeEach(() => {
    render(
      renderWithProviderWrapper(
        <BrowserRouter>
          <ProductCard product={sampleProduct} />
        </BrowserRouter>,
        createStore()
      )
    );
    increaseButton = screen.getByTestId("quantity-increase-button");
    decreaseButton = screen.getByTestId("quantity-decrease-button");
    inputField = screen.getByTestId("quantity-field");
  });

  describe("Input field", () => {
    it("accepts input values", () => {
      act(() => {
        fireEvent.change(inputField, { target: { value: "50" } });
      });

      expect(inputField).toHaveValue(50);
    });

    it("guards against values less than 1", () => {
      act(() => {
        fireEvent.change(inputField, { target: { value: "-50" } });
      });

      expect(inputField).toHaveValue(10);
    });
  });

  describe("Increase button", () => {
    it("increments the quantity when clicked", () => {
      for (let i = 0; i < 5; i++) {
        act(() => {
          increaseButton.dispatchEvent(
            new MouseEvent("click", { bubbles: true })
          );
        });
      }

      expect(inputField).toHaveValue(15);
    });

    it("guards against values greater than 999", () => {
      fireEvent.change(inputField, { target: { value: "999" } });
      for (let i = 0; i < 5; i++) {
        act(() => {
          increaseButton.dispatchEvent(
            new MouseEvent("click", { bubbles: true })
          );
        });
      }

      expect(inputField).toHaveValue(999);
    });
  });

  describe("Decrease button", () => {
    it("decrements the quantity when clicked", () => {
      for (let i = 0; i < 5; i++) {
        act(() => {
          decreaseButton.dispatchEvent(
            new MouseEvent("click", { bubbles: true })
          );
        });
      }

      expect(inputField).toHaveValue(5);
    });

    describe("when quantity value is 1", () => {
      it("removes the item from the cart", () => {
        fireEvent.change(inputField, { target: { value: "1" } });

        act(() => {
          decreaseButton.dispatchEvent(
            new MouseEvent("click", { bubbles: true })
          );
        });

        expect(screen.getByText("Add to Cart")).toBeInTheDocument();
      });
    });
  });
});
