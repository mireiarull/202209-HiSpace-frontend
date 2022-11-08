import { useCallback } from "react";
import { useAppDispatch } from "../redux/hooks";
import {
  createOneRobotActionCreator,
  deleteOneRobotActionCreator,
  loadOneRobotActionCreator,
  loadRobotsActionCreator,
  updateOneRobotActionCreator,
} from "../redux/features/robots/robotsSlice";
import { Robot } from "../types";

const { REACT_APP_API_ROBOTS: url_local_api_robots } = process.env;

const useApi = () => {
  const dispatch = useAppDispatch();

  const loadRobotsApi = useCallback(async () => {
    const response = await fetch(`${url_local_api_robots}/robots`);
    const robotResultApi = await response.json();

    dispatch(loadRobotsActionCreator(robotResultApi.robots));
  }, [dispatch]);

  const loadRobotByIdApi = useCallback(
    async (id: string) => {
      const response = await fetch(`${url_local_api_robots}/robots/${id}`);
      const robotResultApi = await response.json();

      dispatch(loadOneRobotActionCreator(robotResultApi.robot));
    },
    [dispatch]
  );

  const createOneRobotApi = useCallback(
    async (robot: Robot) => {
      try {
        const response = await fetch(`${url_local_api_robots}/robots/create`, {
          method: "POST",
          body: JSON.stringify({
            name: robot.name,
            image: robot.image,
            features: {
              speed: robot.features.speed,
              endurance: robot.features.endurance,
              creationDate: robot.features.creationDate.replaceAll("-", ""),
            },
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        if (!response.ok) {
          throw new Error();
        }

        const newRobot = await response.json();

        dispatch(createOneRobotActionCreator(newRobot));
      } catch (error: unknown) {
        throw new Error(`There was an error: ${(error as Error).message}`);
      }
    },
    [dispatch]
  );

  const deleteOneRobotApi = useCallback(
    async (id: string) => {
      const response = await fetch(
        `${url_local_api_robots}/robots/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const robotResultApi = await response.json();

      dispatch(deleteOneRobotActionCreator(robotResultApi.robot));
    },
    [dispatch]
  );

  const updateOneRobotApi = useCallback(
    async (robot: Robot, id: string) => {
      const response = await fetch(`${url_local_api_robots}/robots/update`, {
        method: "PUT",
        body: JSON.stringify({
          _id: id,
          name: robot.name,
          image: robot.image,
          features: {
            speed: robot.features.speed,
            endurance: robot.features.endurance,
            creationDate: robot.features.creationDate.replaceAll("-", ""),
          },
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const robotResultApi = await response.json();

      dispatch(updateOneRobotActionCreator(robotResultApi));
    },
    [dispatch]
  );

  return {
    loadRobotsApi,
    loadRobotByIdApi,
    createOneRobotApi,
    deleteOneRobotApi,
    updateOneRobotApi,
  };
};

export default useApi;
