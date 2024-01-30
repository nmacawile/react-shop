import { vi, describe, it, expect, beforeEach } from "vitest";
import { screen, act } from "@testing-library/react";
import CartDrawer from "./CartDrawer.jsx";
import { renderWithReduxAndBrowserRouter } from "../helpers/testHelpers.jsx";

describe("CartDrawer component test", () => {
  let setIsOpen;

  beforeEach(() => {
    setIsOpen = vi.fn();

    renderWithReduxAndBrowserRouter(
      <CartDrawer isOpen={false} setIsOpen={setIsOpen} />
    );
  });

  describe("closing trigger test", () => {
    it("closes when backdrop is clicked", () => {
      const backdrop = screen.getByTestId("cart-drawer-backdrop");
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
