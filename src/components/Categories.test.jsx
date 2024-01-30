import { describe, it, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import Categories from "./Categories.jsx";
import { renderWithReduxAndBrowserRouter } from "../helpers/testHelpers.jsx";

describe("Categories component test", () => {
  beforeEach(() => {
    renderWithReduxAndBrowserRouter(<Categories />);
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
      expect(
        screen.getByRole("link", { name: RegExp(category.name, "i") })
      ).toHaveAttribute("href", `/category/${category.slug}`);
    }
  });
});
