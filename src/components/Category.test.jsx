import { describe, it, expect, beforeEach, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Category from "./Category.jsx";

describe("Category component test", () => {
  describe("when category is valid", () => {
    it("renders the category title", () => {
      const categories = [
        { slug: "apparel-and-fashion", name: "Apparel and Fashion" },
        { slug: "electronics", name: "Electronics" },
        { slug: "home-and-furniture", name: "Home and Furniture" },
        { slug: "health-and-beauty", name: "Health and Beauty" },
        { slug: "sports-and-outdoors", name: "Sports and Outdoors" },
        { slug: "toys-and-games", name: "Toys and Games" },
      ];

      categories.forEach((category) => {
        render(
          <>
            <MemoryRouter initialEntries={[`/categories/${category.slug}`]}>
              <Routes>
                <Route path="/categories/:category" element={<Category />} />
              </Routes>
            </MemoryRouter>
          </>
        );

        expect(
          screen.getByText(RegExp(category.name, "i"))
        ).toBeInTheDocument();
      });
    });
  });

  describe("when category is invalid", () => {
    it("renders 'Category not available'", () => {
      render(
        <>
          <MemoryRouter initialEntries={[`/categories/invalid-category`]}>
            <Routes>
              <Route path="/categories/:category" element={<Category />} />
            </Routes>
          </MemoryRouter>
        </>
      );

      expect(screen.getByText("Category not available")).toBeInTheDocument();
    });
  });
});