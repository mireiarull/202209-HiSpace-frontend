import { useAppSelector } from "../../redux/hooks";
import RobotCard from "../RobotCard/RobotCard";
import RobotsListStyled from "./RobotsListStyled";

const RobotsList = (): JSX.Element => {
  const robots = useAppSelector(({ robots: Robots }) => Robots.list);

  return (
    <RobotsListStyled>
      {robots.map((robot) => (
        <li key={robot._id}>
          <RobotCard robot={robot} />
        </li>
      ))}
    </RobotsListStyled>
  );
};

export default RobotsList;
