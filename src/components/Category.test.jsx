import { describe, it, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { screen } from "@testing-library/react";
import Category from "./Category.jsx";
import { renderWithRedux } from "../helpers/testHelpers.jsx";
import { categories } from "../data/categories.js";

describe("Category component test", () => {
  describe("when category is valid", () => {
    it("renders the category title", () => {
      categories.forEach((category) => {
        renderWithRedux(
          <MemoryRouter initialEntries={[`/category/${category.slug}`]}>
            <Routes>
              <Route path="/category/:category" element={<Category />} />
            </Routes>
          </MemoryRouter>
        );

        expect(screen.getByText(RegExp(category.name))).toBeInTheDocument();
      });
    });
  });

  describe("when category is invalid", () => {
    it("renders 'Category not available'", () => {
      renderWithRedux(
        <MemoryRouter initialEntries={[`/category/invalid-category`]}>
          <Routes>
            <Route path="/category/:category" element={<Category />} />
          </Routes>
        </MemoryRouter>
      );

      expect(screen.getByText("Category not available")).toBeInTheDocument();
    });
  });
});
