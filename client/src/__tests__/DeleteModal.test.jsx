import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { DeleteModal } from "../components/DeleteModal";
import { BrowserRouter } from "react-router-dom";

describe("Delete Modal", () => {
  const prop1 = () => {};
  const prop2 = () => {};
  test("renders delete modal", () => {
    render(
      <BrowserRouter>
        <DeleteModal
          showUnauthorizedModal={prop1}
          setShowUnauthorizedModal={prop2}
        />
      </BrowserRouter>
    );

    expect(
      screen.findByText(
        "This action cannot be undone. Are you sure you want to delete"
      )
    ).toBeDefined();
  });
});
