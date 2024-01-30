import { vi, describe, it, expect, beforeEach } from "vitest";
import { screen, act } from "@testing-library/react";
import Header from "./Header.jsx";
import {
  mockStore,
  renderWithReduxAndBrowserRouter,
} from "../helpers/testHelpers.jsx";

describe("Header component test", () => {
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

  const setCartIsOpen = vi.fn();

  const testStore = mockStore({
    cart: {
      value: [
        { product: sampleProduct1, quantity: 1 },
        { product: sampleProduct2, quantity: 3 },
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
