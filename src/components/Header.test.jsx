import { vi, describe, it, expect, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen, act } from "@testing-library/react";
import Header from "./Header.jsx";
import renderWithProviderWrapper, {
  mockStore,
} from "../helpers/renderWithProviderWrapper.jsx";

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
    render(
      renderWithProviderWrapper(
        <BrowserRouter>
          <Header setCartIsOpen={setCartIsOpen} />
        </BrowserRouter>,
        testStore
      )
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
