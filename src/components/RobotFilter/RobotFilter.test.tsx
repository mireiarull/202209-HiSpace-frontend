import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import RobotFilter from "./RobotFilter";

beforeEach(() => jest.clearAllMocks());

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch(),
}));

describe("Given a RobotFilter component", () => {
  const expectedLabel = "Find a robot by its ID";
  const expectedButtonText = "Find";

  describe("Whn it's rendered", () => {
    test("Then it should show a label with 'Find a robot by its ID' and a submit button", () => {
      renderWithProviders(<RobotFilter />);

      const renderedLabel = screen.queryByRole("textbox", {
        name: expectedLabel,
      });
      const renderedButton = screen.queryByRole("button", {
        name: expectedButtonText,
      });

      expect(renderedLabel).toBeInTheDocument();
      expect(renderedButton).toBeInTheDocument();
    });
  });

  describe("When the user types the robot id '2' and clicks the send button", () => {
    test("Then the loadRobotByIdApi function should call the dispatcher", async () => {
      const idText = "2";

      renderWithProviders(<RobotFilter />);

      const renderedInput = screen.queryByRole("textbox", {
        name: expectedLabel,
      });
      const renderedButton = screen.queryByRole("button", {
        name: expectedButtonText,
      });

      userEvent.type(renderedInput!, idText);
      await userEvent.click(renderedButton!);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
