import { vi, describe, it, expect, beforeEach } from "vitest";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartCard from "./CartCard.jsx";
import renderWithProviderWrapper, {
  store,
} from "../helpers/renderWithProviderWrapper.jsx";

describe("CartCard component", () => {
  const sampleProduct = {
    id: "1",
    name: "Smartphone XYZ",
    price: 599.99,
    description: "A powerful and feature-rich smartphone for your daily needs.",
    rating: 4.5,
    category: "Electronics",
    image: "https://via.placeholder.com/300",
  };

  // const store = mockStore({
  //   cart: { value: [{ id: sampleProduct.id, quantity: 5 }] },
  // });

  beforeEach(() => {
    render(
      renderWithProviderWrapper(
        <BrowserRouter>
          <CartCard item={{ id: sampleProduct.id, quantity: 3 }} />
        </BrowserRouter>
      )
    );
  });

  it("should display the product name", () => {
    const productName = screen.getByText(sampleProduct.name);
    expect(productName).toBeInTheDocument();
  });

  it("should display the formatted sub-total", () => {
    const productPrice = screen.getByText("$1,799.97");
    expect(productPrice).toBeInTheDocument();
  });

  describe("Quantity controls", () => {
    describe("Increase button", () => {
      it("increments the current quantity by 1", () => {
        const increaseButton = screen.getByTestId("cart-item-increase-button");
        act(() => {
          increaseButton.dispatchEvent(
            new MouseEvent("click", { bubbles: true })
          );
        });

        const latestAction = store.getActions().pop();

        expect(latestAction).toEqual({
          type: "cart/updateQuantity",
          payload: { id: "1", quantity: 4 },
        });
      });
    });

    describe("Decrease button", () => {
      it("decrements the current quantity by 1", () => {
        const increaseButton = screen.getByTestId("cart-item-decrease-button");
        act(() => {
          increaseButton.dispatchEvent(
            new MouseEvent("click", { bubbles: true })
          );
        });

        const latestAction = store.getActions().pop();

        expect(latestAction).toEqual({
          type: "cart/updateQuantity",
          payload: { id: "1", quantity: 2 },
        });
      });
    });

    describe("Quantity input", () => {
      it("accepts input values", () => {
        const inputField = document.getElementById("quantity-field-1");
        act(() => {
          fireEvent.change(inputField, { target: { value: "50" } });
        });

        const latestAction = store.getActions().pop();

        expect(latestAction).toEqual({
          type: "cart/updateQuantity",
          payload: { id: "1", quantity: 50 },
        });
      });
    });

    describe("'Remove from Cart' button", () => {
      it("Removes the item from the cart", () => {
        const increaseButton = screen.getByTestId("cart-item-remove-button");
        act(() => {
          increaseButton.dispatchEvent(
            new MouseEvent("click", { bubbles: true })
          );
        });

        const latestAction = store.getActions().pop();

        expect(latestAction).toEqual({
          type: "cart/removeItem",
          payload: "1",
        });
      });
    });
  });
});
