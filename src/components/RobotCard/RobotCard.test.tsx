import { screen } from "@testing-library/react";
import { mockOneRobot } from "../../mocks/mockRobots";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When it's rendered with a received robot", () => {
    test("Then it should show a heading and an image", () => {
      const robot = mockOneRobot;
      const expectedHeadingText = "wall-e";
      const expectedAltText = "wall-e";

      renderWithProviders(<RobotCard robot={robot} />);

      const renderedHeading = screen.queryByRole("heading", {
        name: expectedHeadingText,
      });

      const renderedImage = screen.queryByAltText(expectedAltText);

      expect(renderedHeading).toBeInTheDocument();
      expect(renderedImage).toBeInTheDocument();
    });
  });
});
