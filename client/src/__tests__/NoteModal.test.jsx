import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { NoteModal } from "../components/NoteModal";
import { BrowserRouter } from "react-router-dom";

describe("NoteModal", () => {
  test("renders modal", () => {
    const prop1 = () => {};
    const prop2 = () => {};
    const prop3 = () => {};

    render(
      <BrowserRouter>
        <NoteModal showModal={prop1} setShowModal={prop2} setStale={prop3} />
      </BrowserRouter>
    );

    expect(screen.findByLabelText("Date: ")).toBeDefined();
  });
});
