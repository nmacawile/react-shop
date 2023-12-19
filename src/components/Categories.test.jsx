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
    const categories = {
      clothes: "Clothes",
      electronics: "Electronics",
      shoes: "Shoes",
      furniture: "Furniture",
      misc: "Miscellaneous",
    };

    for (const [link, heading] of Object.entries(categories)) {
      expect(
        screen.getByRole("link", { name: RegExp(heading) })
      ).toHaveAttribute("href", `/${link}`);
    }
  });
});
