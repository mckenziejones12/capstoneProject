import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { RegisterAccountPage } from "../components/RegisterAccountPage";
import { BrowserRouter } from "react-router-dom";

describe("Register Account Page", () => {
  test("renders register page", () => {
    render(
      <BrowserRouter>
        <RegisterAccountPage />
      </BrowserRouter>
    );
    expect(screen.findByLabelText("Username")).toBeDefined();
  });
});
