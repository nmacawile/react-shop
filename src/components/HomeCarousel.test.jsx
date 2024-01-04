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
    const links = ["clothes", "electronics", "shoes", "furniture", "miscellaneous"];

    for (const link of links) {
      expect(screen.getByTestId(`${link}-link`)).toHaveAttribute(
        "href",
        `/categories/${link}`
      );
    }
  });
});
