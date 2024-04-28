import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { PatientNotesSection } from "../components/PatientNotesSection";
import { BrowserRouter } from "react-router-dom";

describe("PatientNotesSection", () => {
  test("renders notes section", () => {
    render(
      <BrowserRouter>
        <PatientNotesSection />
      </BrowserRouter>
    );
    expect(screen.findByText("Date")).toBeDefined();
  });
});
