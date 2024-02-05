import { describe, it, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import Categories from "./Categories.jsx";
import { renderWithReduxAndBrowserRouter } from "../helpers/testHelpers.jsx";
import { categories } from "../data/categories.js";

describe("Categories component test", () => {
  beforeEach(() => {
    renderWithReduxAndBrowserRouter(<Categories />);
  });

  it("has links to different categories", () => {
    for (const category of categories) {
      expect(
        screen.getByRole("link", { name: RegExp(category.name) })
      ).toHaveAttribute("href", `/category/${category.slug}`);
    }
  });
});
