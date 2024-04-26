import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { PatientListTable } from "../components/PatientListTable";
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

describe("PatientListTable", () => {
  test("renders all patients", () => {
    const patients = [
      {
        _id: "123",
        firstName: "Bobby",
        lastName: "Bob",
      },
      {
        _id: "245",
        firstName: "Shrimp",
        lastName: "Bob",
      },
    ];
    render(
      <BrowserRouter>
        <PatientListTable patientList={patients} />
      </BrowserRouter>
    );
    expect(screen.getByText("Shrimp")).toBeDefined();
  });

  describe("when a patient row is clicked", () => {
    test("navigates to patient page", () => {
      const patients = [
        {
          _id: "123",
          firstName: "Doug",
          lastName: "Bob",
        },
        {
          _id: "245",
          firstName: "Dimmadome",
          lastName: "Bob",
        },
      ];
      render(
        <BrowserRouter>
          <PatientListTable patientList={patients} />
        </BrowserRouter>
      );
      // Click on a row
      const element = screen.getByText("Dimmadome");
      element.click();

      // Assert that it calls navigate
      expect(fakeNavigate).toHaveBeenCalledWith("patients/245");
    });
  });
});
