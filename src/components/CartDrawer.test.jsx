import { vi, describe, it, expect, beforeEach } from "vitest";
import { screen, act } from "@testing-library/react";
import CartDrawer from "./CartDrawer.jsx";
import {
  renderWithReduxAndBrowserRouter,
  mockStore,
} from "../helpers/testHelpers.jsx";

describe("CartDrawer component test", () => {
  let setIsOpen;
  const sampleProduct1 = {
    id: "testproductid1211",
    name: "Test Product 1",
    price: 22129.99,
    description: "A test product.",
    rating: 4.5,
    category: "Electronics",
    image: "https://via.placeholder.com/300",
  };
  const sampleProduct2 = {
    id: "testproductid22323",
    name: "Test Product 2",
    price: 2999.99,
    description: "Another test product.",
    rating: 4.4,
    category: "Electronics",
    image: "https://via.placeholder.com/300",
  };

  beforeEach(() => {
    setIsOpen = vi.fn();

    renderWithReduxAndBrowserRouter(
      <CartDrawer isOpen={true} setIsOpen={setIsOpen} />,
      mockStore({
        cart: {
          value: {
            items: [
              { product: sampleProduct1, quantity: 10 },
              { product: sampleProduct2, quantity: 10 },
            ],
            total: 999.9,
          },
        },
      })
    );
  });

  it("shows the formatted total value of all cart items", () => {
    const totalEl = screen.getByText("$999.90");
    expect(totalEl).toBeInTheDocument();
  });

  it("has a link to the checkout page", () => {
    expect(screen.getByText("Check Out")).toHaveAttribute("href", "/checkout");
  });

  describe("item count", () => {
    it("shows the number of items in cart", () => {
      const itemCountEl = screen.getByText(`Total (2 items):`);
      expect(itemCountEl).toBeInTheDocument();
    });
  });

  describe("closing trigger test", () => {
    it("closes when backdrop is clicked", () => {
      const backdrop = document.getElementById("cart-drawer-backdrop");
      act(() => {
        backdrop.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      expect(setIsOpen).toHaveBeenCalledWith(false);
    });

    it('closes when "Keep Shopping" button is clicked', () => {
      const keepShoppingButton = screen.getByText("Keep Shopping");
      act(() => {
        keepShoppingButton.dispatchEvent(
          new MouseEvent("click", { bubbles: true })
        );
      });
      expect(setIsOpen).toHaveBeenCalledWith(false);
    });

    it("closes when close button is clicked", () => {
      const closeButton = screen.getByTestId("cart-close-button");
      act(() => {
        closeButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      expect(setIsOpen).toHaveBeenCalledWith(false);
    });

    it("doesn't close when a click is made within the drawer", () => {
      const drawerHeader = document.getElementById("cart-drawer-label");
      act(() => {
        drawerHeader.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      expect(setIsOpen).not.toHaveBeenCalled();
    });
  });
});
