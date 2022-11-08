import { mockOneRobot, mockRobotsList } from "../../../mocks/mockRobots";
import {
  createOneRobotActionCreator,
  deleteOneRobotActionCreator,
  loadOneRobotActionCreator,
  loadRobotsActionCreator,
  robotsReducer,
} from "./robotsSlice";

describe("Given a function robotsReducer", () => {
  describe("When it's invoked with an empty state and an empty type", () => {
    test("Then it should return an empty list of robots", () => {
      const currentEmptyState = {
        list: [],
      };
      const emptyActionCreator = { type: "unknown" };

      const newRobotsState = robotsReducer(
        currentEmptyState,
        emptyActionCreator
      );

      expect(newRobotsState.list).toStrictEqual([]);
    });
  });

  describe("When the loadRobotsActionCreator is invoked with an empty current state and two robots", () => {
    test("Then it should return a new state with two robots", () => {
      const currentEmptyState = {
        list: [],
      };
      const loadTwoRobotsAction = loadRobotsActionCreator(mockRobotsList);

      const newRobotsState = robotsReducer(
        currentEmptyState,
        loadTwoRobotsAction
      );
      const expectedRobotsState = { list: mockRobotsList };

      expect(newRobotsState).toStrictEqual(expectedRobotsState);
    });
  });

  describe("When the loadOneRobotActionCreator is invoked with an empty current state and one robot", () => {
    test("Then it should return a new state with the robot", () => {
      const currentEmptyState = {
        list: [],
      };
      const loadOneRobotAction = loadOneRobotActionCreator(mockOneRobot);

      const newRobotsState = robotsReducer(
        currentEmptyState,
        loadOneRobotAction
      );
      const expectedRobotsState = { list: [mockOneRobot] };

      expect(newRobotsState).toStrictEqual(expectedRobotsState);
    });
  });

  describe("When the createOneRobotActionCreatot is invoked with a current empty state and a new one robot", () => {
    test("Then it should return a new state with the new robot added", () => {
      const currentEmptyState = {
        list: [],
      };
      const createOneRobotAction = createOneRobotActionCreator(mockOneRobot);

      const newRobotsState = robotsReducer(
        currentEmptyState,
        createOneRobotAction
      );
      const expectedRobotsState = { list: [mockOneRobot] };

      expect(newRobotsState).toStrictEqual(expectedRobotsState);
    });
  });

  describe("When the deleteOneRobotAcionCreator is invoked with the current state and an id of a robot to delete", () => {
    test("Then it should return a new state without the robot to delete", () => {
      const currentRobotsState = {
        list: mockRobotsList,
      };
      const idToDelete = "2";

      const expectedRobotsState = {
        list: mockRobotsList.filter((robot) => robot._id !== idToDelete),
      };

      const newRobotsState = robotsReducer(
        currentRobotsState,
        deleteOneRobotActionCreator(mockRobotsList[1])
      );

      expect(newRobotsState).toStrictEqual(expectedRobotsState);
    });
  });
});
