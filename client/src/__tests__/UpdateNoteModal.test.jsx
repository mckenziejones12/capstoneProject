import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { UpdateNoteModal } from "../components/UpdateNoteModal";
import { BrowserRouter } from "react-router-dom";

describe("UpdateNoteModal", () => {
  test("renders modal", () => {
    const prop1 = () => {};
    const prop2 = () => {};
    const note = {
      date: new Date(),
      note: "test",
      patientId: "123",
    };
    const prop4 = () => {};

    render(
      <BrowserRouter>
        <UpdateNoteModal
          showUpdateNoteModal={prop1}
          setShowUpdateNoteModal={prop2}
          currentNote={note}
          setStale={prop4}
        />
      </BrowserRouter>
    );

    expect(screen.findByLabelText("First Name:")).toBeDefined();
  });
});
