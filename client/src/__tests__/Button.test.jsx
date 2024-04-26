import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button";
import { BrowserRouter } from "react-router-dom";

describe("Button", () => {
  test("renders button", () => {
    const typeProp = "add";
    const childrenProp = "add button";
    const onClickProp = () => {};

    render(
      <BrowserRouter>
        <Button type={typeProp} onClick={onClickProp}>
          {childrenProp}
        </Button>
      </BrowserRouter>
    );

    expect(screen.getByText("add button")).toBeDefined();
  });
});
