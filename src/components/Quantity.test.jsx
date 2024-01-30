import { describe, it, expect } from "vitest";
import { screen, act, fireEvent } from "@testing-library/react";
import Quantity from "./Quantity.jsx";
import {
  renderWithReduxAndBrowserRouter,
  mockStore,
} from "../helpers/testHelpers.jsx";

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
  let testStore;

  const reduxLatestAction = () => {
    return testStore.getActions().pop();
  };

  beforeEach(() => {
    testStore = mockStore({
      cart: { value: [{ id: sampleProduct.id, quantity: 10 }] },
    });
    renderWithReduxAndBrowserRouter(
      <Quantity productId={sampleProduct.id} />,
      testStore
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

      expect(reduxLatestAction()).toEqual({
        type: "cart/updateQuantity",
        payload: { id: "testproductid1211", quantity: 50 },
      });
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

      expect(reduxLatestAction()).toEqual({
        type: "cart/updateQuantity",
        payload: { id: "testproductid1211", quantity: 11 },
      });
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

      expect(reduxLatestAction()).toEqual({
        type: "cart/updateQuantity",
        payload: { id: "testproductid1211", quantity: 9 },
      });
    });
  });
});
