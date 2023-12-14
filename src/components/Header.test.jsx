import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header.jsx";

describe("Header component test", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("renders the search form", () => {
    expect(screen.getByTestId("search-form")).toBeInTheDocument();
  });

  it("renders the header title", () => {
    expect(screen.getByText("Shop")).toBeInTheDocument();
  });
});
