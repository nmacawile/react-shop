import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import renderWithProviderWrapper from "./helpers/renderWithProviderWrapper.jsx";

describe("App component test", () => {
  it("renders the components", () => {
    render(
      renderWithProviderWrapper(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
    );

    expect(screen.getByTestId("header-component")).toBeInTheDocument();
  });
});
