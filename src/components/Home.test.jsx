import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import Home from "./Home.jsx";
import { renderWithReduxAndBrowserRouter } from "../helpers/testHelpers.jsx";

describe("Home component test", () => {
  it("renders the components", () => {
    renderWithReduxAndBrowserRouter(<Home />);
    expect(screen.getByTestId("home-carousel-component")).toBeInTheDocument();
    expect(screen.getByTestId("categories-component")).toBeInTheDocument();
  });
});
