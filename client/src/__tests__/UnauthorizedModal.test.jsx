import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { UnauthorizedModal } from "../components/UnauthorizedModal";
import { BrowserRouter } from "react-router-dom";

describe("UnauthorizedModal", () => {
  const prop1 = () => {};
  const prop2 = () => {};
  const childrenProp = "child";
  test("renders unauth modal", () => {
    render(
      <BrowserRouter>
        <UnauthorizedModal
          showUnauthorizedModal={prop1}
          setShowUnauthorizedModal={prop2}
        />
      </BrowserRouter>
    );

    expect(
      screen.findByText(
        `Warning: you are not authorized to perform this action!${childrenProp}`
      )
    ).toBeDefined();
  });
});
