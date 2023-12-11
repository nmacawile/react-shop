import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App component test", () => {
  it("renders the components", () => {
    render(<App />);

    expect(screen.getByTestId("header-component")).toBeInTheDocument();
    expect(screen.getByTestId("home-carousel-component")).toBeInTheDocument();
    expect(screen.getByTestId("categories-component")).toBeInTheDocument();
  });
});
