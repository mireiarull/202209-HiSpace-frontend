import { Robot } from "../types";

export const mockRobotsList: Robot[] = [
  {
    _id: "1",
    name: "wall-e",
    image: "image.jpg",
    features: {
      speed: 1,
      endurance: 1,
      creationDate: "1",
    },
  },
  {
    _id: "2",
    name: "R2D2",
    image: "image.jpg",
    features: {
      speed: 2,
      endurance: 2,
      creationDate: "2",
    },
  },
];

export const mockOneRobot: Robot = {
  _id: "",
  name: "wall-e",
  image: "image.jpg",
  features: {
    speed: 1,
    endurance: 1,
    creationDate: "1",
  },
};
