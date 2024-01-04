import { describe, it, expect, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Categories from "./Categories.jsx";

describe("Categories component test", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Categories />
      </BrowserRouter>
    );
  });

  it("has links to different categories", () => {
    const categories = [
      "clothes",
      "electronics",
      "shoes",
      "furniture",
      "miscellaneous",
    ];

    for (const category of categories) {
      expect(
        screen.getByRole("link", { name: RegExp(category, "i") })
      ).toHaveAttribute("href", `/categories/${category}`);
    }
  });
});
