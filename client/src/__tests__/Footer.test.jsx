import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "../components/Footer";
import { BrowserRouter } from "react-router-dom";

describe("Footer", () => {
  test("renders footer", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.findByText("&copy; McKenzie Jones 2024")).toBeDefined();
  });
});
