import { vi, describe, it, expect, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen, act } from "@testing-library/react";
import Header from "./Header.jsx";

describe("Header component test", () => {
  const setCartIsOpen = vi.fn();

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header setCartIsOpen={setCartIsOpen} />
      </BrowserRouter>
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
  });
});
