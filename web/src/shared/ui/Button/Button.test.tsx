import { describe, test, expect } from "@jest/globals";
import Button, { ThemeButton } from "./Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";

describe("Test Button.tsx", () => {
    test("test with children", () => {
        render(<Button>TEST</Button>);
        const buttonEl = screen.getByText("TEST");
        expect(buttonEl).toContainHTML("TEST");
        expect(buttonEl).toHaveClass("Button");
    });

    test("test classes", () => {
        render(<Button className={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
    });
});
