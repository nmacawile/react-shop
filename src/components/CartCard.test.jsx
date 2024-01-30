import { describe, it, expect, beforeEach } from "vitest";
import { screen, act, fireEvent } from "@testing-library/react";
import CartCard from "./CartCard.jsx";
import {
  store,
  renderWithReduxAndBrowserRouter,
} from "../helpers/testHelpers.jsx";

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

  const reduxLatestAction = () => {
    return store.getActions().pop();
  };

  beforeEach(() => {
    // store state value is empty; the product isn't in the store
    // but it will not be checked as it is only mocked
    renderWithReduxAndBrowserRouter(
      <CartCard item={{ id: sampleProduct.id, quantity: 3 }} />
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

        expect(reduxLatestAction()).toEqual({
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

        expect(reduxLatestAction()).toEqual({
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

        expect(reduxLatestAction()).toEqual({
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

        expect(reduxLatestAction()).toEqual({
          type: "cart/removeItem",
          payload: "1",
        });
      });
    });
  });
});
