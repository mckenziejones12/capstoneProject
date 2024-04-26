import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { LoginPage } from "../components/LoginPage";
import { BrowserRouter } from "react-router-dom";

describe("Login Page", () => {
  test("renders log in page", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.findByLabelText("Username")).toBeDefined();
  });
});
