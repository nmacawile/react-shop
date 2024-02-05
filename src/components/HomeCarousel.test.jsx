import { describe, it, expect, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import HomeCarousel from "./HomeCarousel.jsx";
import { categories } from "../data/categories.js";

describe("HomeCarousel component test", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomeCarousel />
      </BrowserRouter>
    );
  });

  it("has links to different categories", () => {
    for (const category of categories) {
      expect(screen.getByTestId(`${category.slug}-link`)).toHaveAttribute(
        "href",
        `/category/${category.slug}`
      );
    }
  });
});
