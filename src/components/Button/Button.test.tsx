import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

const buttonAction = jest.fn();

describe("Given a Button component", () => {
  describe("When it is rendered with the text 'send' and an action", () => {
    test("Then it should show the text 'send' and the action should be called on click", async () => {
      const buttonText = "send";

      render(<Button text={buttonText} action={buttonAction} />);

      const renderedButton = screen.queryByRole("button", { name: buttonText });
      await userEvent.click(renderedButton!);

      expect(renderedButton).toBeInTheDocument();
      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
