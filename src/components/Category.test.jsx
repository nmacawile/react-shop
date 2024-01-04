import { describe, it, expect, beforeEach, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Category from "./Category.jsx";

describe("Category component test", () => {
  it("renders the category title", () => {
    const categories = ["clothes", "electronics", "shoes", "furniture", "miscellaneous"];
    for (const category in categories) {
      render(
        <MemoryRouter initialEntries={[`/categories/${category}`]}>
          <Routes>
            <Route path="/categories/:category" element={<Category />} />
          </Routes>
        </MemoryRouter>
      );

      expect(screen.getByText(RegExp(category, "i"))).toBeInTheDocument();
    }
  });
});
