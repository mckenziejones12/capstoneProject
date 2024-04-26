import { describe, expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { SearchBar } from "../components/SearchBar";
import userEvent from "@testing-library/user-event";

describe("SearchBar", () => {
  test("renders search bar", () => {
    // Fake on search
    const onSearch = () => {};
    render(<SearchBar onSearch={onSearch} />);

    expect(screen.getByPlaceholderText("Find by last name")).toBeDefined();
  });

  describe("when user types in search bar", () => {
    test("calls event handler", async () => {
      const user = userEvent.setup();

      // Fake on search
      const onSearch = vitest.fn();
      render(<SearchBar onSearch={onSearch} />);

      const element = screen.getByPlaceholderText("Find by last name");
      await user.type(element, "test");

      expect(onSearch).toHaveBeenCalled();
    });
  });
});
