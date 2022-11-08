import { Robot, User } from "../../../types";

export interface RobotsState {
  list: Robot[];
}

export interface UserState extends User {
  isLogged: boolean;
}
