import { describe, it, expect } from "vitest";
import { render, screen, act, fireEvent } from "@testing-library/react";
import Quantity from "./Quantity.jsx";

describe("Quantity component test", () => {
  let increaseButton;
  let decreaseButton;
  let inputField;

  beforeEach(() => {
    render(<Quantity />);
    increaseButton = screen.getByTestId("quantity-increase-button");
    decreaseButton = screen.getByTestId("quantity-decrease-button");
    inputField = screen.getByTestId("quantity-field");
  });

  describe("Input field", () => {
    it("accepts input values", () => {
      act(() => {
        fireEvent.change(inputField, { target: { value: "50" } });
      });

      expect(inputField).toHaveValue(50);
    });
  });

  describe("Increase button", () => {
    it("increments the quantity when clicked", () => {
      act(() => {
        for (let i = 0; i < 4; i++) {
          increaseButton.dispatchEvent(
            new MouseEvent("click", { bubbles: true })
          );
        }
      });

      expect(inputField).toHaveValue(5);
    });
  });

  describe("Decrease button", () => {
    it("decrements the quantity when clicked", () => {
      act(() => {
        fireEvent.change(inputField, { target: { value: "50" } });
        for (let i = 0; i < 4; i++) {
          decreaseButton.dispatchEvent(
            new MouseEvent("click", { bubbles: true })
          );
        }
      });

      expect(inputField).toHaveValue(46);
    });
  });
});
