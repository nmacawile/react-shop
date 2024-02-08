import { describe, beforeEach, it } from "vitest";
import { screen } from "@testing-library/react";
import {
  renderWithReduxAndBrowserRouter,
  mockStore,
} from "../helpers/testHelpers";
import { Checkout } from "./Checkout.jsx";

describe("Checkout component test", () => {
  const sampleProduct = {
    id: "testproductid1211",
    name: "Test Product",
    price: 5.0,
    description: "A test product.",
    rating: 4.5,
    category: "Electronics",
    image: "https://via.placeholder.com/300",
  };

  describe("Cart has an item", () => {
    let testStore;

    beforeEach(() => {
      testStore = mockStore({
        cart: {
          value: {
            items: [{ product: sampleProduct, quantity: 2 }],
            total: 10.0,
          },
        },
      });
      renderWithReduxAndBrowserRouter(<Checkout />, testStore);
    });

    it("renders the heading", () => {
      expect(screen.getByText("Checkout")).toBeInTheDocument();
    });

    it("renders the name of the product", () => {
      expect(screen.getByText("Test Product")).toBeInTheDocument();
    });

    it("renders the total amount of the order", () => {
      expect(screen.getByText(/\$20\.00/)).toBeInTheDocument();
    });

    it("renders the link back to home page", () => {
      expect(screen.getByRole("link", { name: /Back/ })).toHaveAttribute(
        "href",
        "/"
      );
    });
  });

  describe("Cart is empty", () => {
    beforeEach(() => {
      renderWithReduxAndBrowserRouter(<Checkout />);
    });

    it("renders the heading", () => {
      expect(screen.getByText("Checkout")).toBeInTheDocument();
    });

    it("renders 'Your cart is empty.'", () => {
      expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
    });

    it("renders the link back to home page", () => {
      expect(screen.getByRole("link", { name: /Back/ })).toHaveAttribute(
        "href",
        "/"
      );
    });
  });
});
