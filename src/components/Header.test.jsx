import { vi, describe, it, expect, beforeEach } from "vitest";
import { screen, act } from "@testing-library/react";
import Header from "./Header.jsx";
import {
  mockStore,
  renderWithReduxAndBrowserRouter,
} from "../helpers/testHelpers.jsx";

describe("Header component test", () => {
  const setCartIsOpen = vi.fn();

  const testStore = mockStore({
    cart: {
      value: [
        { id: "prod1", quantity: 1 },
        { id: "prod2", quantity: 3 },
      ],
    },
  });

  beforeEach(() => {
    renderWithReduxAndBrowserRouter(
      <Header setCartIsOpen={setCartIsOpen} />,
      testStore
    );
  });

  it("renders the search form", () => {
    expect(screen.getByTestId("search-form")).toBeInTheDocument();
  });

  it("renders the header title", () => {
    expect(screen.getByRole("link", { name: /Shop/ })).toHaveAttribute(
      "href",
      "/"
    );
  });

  describe("Cart button test", () => {
    it("opens the cart drawer", () => {
      const cartButton = screen.getByTestId("cart-button");
      act(() => {
        cartButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      expect(setCartIsOpen).toHaveBeenCalledWith(true);
    });

    it("shows the number of items in cart", () => {
      const cartItemsCount = document.getElementById("cart-items-count");
      expect(cartItemsCount.textContent).toMatch("2");
    });
  });
});
