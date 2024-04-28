import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { PatientFormModal } from "../components/PatientFormModal";
import { BrowserRouter } from "react-router-dom";

describe("PatientFormModal", () => {
  test("renders modal", () => {
    const prop1 = () => {};
    const prop2 = () => {};
    const prop3 = () => {};

    render(
      <BrowserRouter>
        <PatientFormModal
          showModal={prop1}
          setShowModal={prop2}
          setStale={prop3}
        />
      </BrowserRouter>
    );

    expect(screen.findByLabelText("First Name: ")).toBeDefined();
  });
});
