import { describe, it, expect, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import HomeCarousel from "./HomeCarousel.jsx";

describe("HomeCarousel component test", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomeCarousel />
      </BrowserRouter>
    );
  });

  it("has links to different categories", () => {
    expect(screen.getByText(/Discover/)).toBeInTheDocument();
  });

  it("has links to different categories", () => {
    const categories = [
      { slug: "apparel-and-fashion", name: "Apparel and Fashion" },
      { slug: "electronics", name: "Electronics" },
      { slug: "home-and-furniture", name: "Home and Furniture" },
      { slug: "health-and-beauty", name: "Health and Beauty" },
      { slug: "sports-and-outdoors", name: "Sports and Outdoors" },
      { slug: "toys-and-games", name: "Toys and Games" },
    ];

    for (const category of categories) {
      expect(screen.getByTestId(`${category.slug}-link`)).toHaveAttribute(
        "href",
        `/categories/${category.slug}`
      );
    }
  });
});
