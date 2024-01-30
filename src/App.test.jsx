import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import App from "./App.jsx";
import { renderWithReduxAndBrowserRouter } from "./helpers/testHelpers.jsx";

describe("App component test", () => {
  it("renders the components", () => {
    renderWithReduxAndBrowserRouter(<App />);
    expect(screen.getByTestId("header-component")).toBeInTheDocument();
  });
});
