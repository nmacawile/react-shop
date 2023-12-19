import { describe, it, expect, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header.jsx";

describe("Header component test", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it("renders the search form", () => {
    expect(screen.getByTestId("search-form")).toBeInTheDocument();
  });

  it("renders the header title", () => {
    expect(
      screen.getByRole("link", { name: /Shop/ })
    ).toHaveAttribute("href", "/");
  });
});
