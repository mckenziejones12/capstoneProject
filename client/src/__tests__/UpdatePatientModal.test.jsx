import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { UpdatePatientModal } from "../components/UpdatePatientModal";
import { BrowserRouter } from "react-router-dom";

describe("UpdatePatientModal", () => {
  test("renders modal", () => {
    const prop1 = () => {};
    const prop2 = () => {};
    const patient = {
      firstName: "john",
      lastName: "smith",
      streetName: "2 cool street",
      city: "Austin",
      state: "TX",
      phoneNumber: "123-456-7890",
      d_birth: "02-10-1990",
    };
    const prop4 = () => {};

    render(
      <BrowserRouter>
        <UpdatePatientModal
          showUpdatePatientModal={prop1}
          setShowUpdatePatientModal={prop2}
          singlePatient={patient}
          setStale={prop4}
        />
      </BrowserRouter>
    );

    expect(screen.findByLabelText("First Name:")).toBeDefined();
  });
});
