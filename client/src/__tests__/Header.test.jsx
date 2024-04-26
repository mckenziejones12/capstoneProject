import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";
import { BrowserRouter } from "react-router-dom";

// Mock of navigate
const fakeNavigate = vitest.fn();

// Mocks react-router module
vitest.mock("react-router", () => {
  return {
    // Imports original module
    ...vitest.importActual("react-router"),
    // Overrwrites useNavigate to return a mock function
    // So that we can assert what it has been called with (the patient route)
    useNavigate: () => {
      return fakeNavigate;
    },
  };
});

describe("Header", () => {
  test("renders header", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText("Capstone Records")).toBeDefined();
  });
  describe("Header Onclick", () => {
    test("navigates to homepage", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const header = screen.getByText("Capstone Records");
      header.click();

      expect(fakeNavigate).toHaveBeenCalled();
    });
  });
});
