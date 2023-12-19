import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Home from "./Home.jsx";

describe("Home component test", () => {
  it("renders the components", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByTestId("home-carousel-component")).toBeInTheDocument();
    expect(screen.getByTestId("categories-component")).toBeInTheDocument();
  });
});
