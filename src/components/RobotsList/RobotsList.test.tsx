import { screen } from "@testing-library/react";
import { mockRobotsList } from "../../mocks/mockRobots";
import mockRobotsState from "../../mocks/mockRobotsState";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import RobotsList from "./RobotsList";

describe("Given a RobotsList component", () => {
  describe("When it's rendered with a list of robots in the store", () => {
    test("Then it should show a list with 2 robot cards with level 3 headings with the robot's name inside", () => {
      const robotsList = mockRobotsList;
      const [robot1, robot2] = robotsList;
      const expectedLevel = 3;

      renderWithProviders(<RobotsList />, {
        preloadedState: { robots: mockRobotsState },
      });

      const renderedRobot1 = screen.queryByRole("heading", {
        level: expectedLevel,
        name: robot1.name,
      });
      const renderedRobot2 = screen.queryByRole("heading", {
        level: expectedLevel,
        name: robot2.name,
      });

      expect(renderedRobot1).toBeInTheDocument();
      expect(renderedRobot2).toBeInTheDocument();
    });
  });
});
