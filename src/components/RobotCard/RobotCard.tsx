import useApi from "../../hooks/useApi";
import { Robot } from "../../types";
import Button from "../Button/Button";
import RobotCardStyled from "./RobotCardStyled";
import { Link } from "react-router-dom";

interface RobotCardProps {
  robot: Robot;
}

const dateTransformer = (date: string) => {
  const dateInString = String(date);
  const year = dateInString.slice(0, 4);
  const month = dateInString.slice(4, 6);
  const day = dateInString.slice(6, 8);

  const newDate = `${day}-${month}-${year}`;
  return newDate;
};

const RobotCard = ({
  robot: {
    _id,
    name,
    image,
    features: { speed, endurance, creationDate },
  },
}: RobotCardProps): JSX.Element => {
  const { deleteOneRobotApi } = useApi();

  return (
    <RobotCardStyled className="robot">
      <div className="robot__head">
        <h3 className="robot__name">{name}</h3>
        <div className="robot__buttons-wrapper">
          <Button
            text="Delete"
            classCss="button__icon button__icon--delete"
            action={() => deleteOneRobotApi(_id)}
          />
          {/*  <Button
            text="Edit"
            classCss="button__icon button__icon--edit"
            action={() => {}}
          /> */}
          <Link
            className="button button__icon button__icon--edit"
            to={`/create/${_id}`}
          ></Link>
          {/* <Link
            className="button button__icon button__icon--edit"
            to={`/create`}
          ></Link> */}
        </div>
      </div>
      <div className="robot__inner">
        <img src={image} alt={name} width="150" height="150" />

        <ul className="robot__features">
          <li className="robot__speed">
            <span>Speed:</span> {speed}
          </li>
          <li className="robot__endurance">
            <span>Endurance:</span> {endurance}
          </li>
          <li className="robot__date-creation">
            <span>Creation date:</span> {dateTransformer(creationDate)}
          </li>
          <li className="robot__id">
            <span>Id:</span> {_id}
          </li>
        </ul>
      </div>
    </RobotCardStyled>
  );
};

export default RobotCard;
