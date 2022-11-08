import { useState } from "react";
import { UserCredentials } from "../../types";
import Button from "../Button/Button";
import RobotFormStyled from "../RobotForm/RobotFormStyled";
import useUser from "../../hooks/useUser";

const LoginForm = (): JSX.Element => {
  const { getUserToken } = useUser();

  const intialFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(intialFormData);

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserCredentials = {
      userName: formData.username,
      password: formData.password,
    };

    getUserToken(formDataToSubmit);
  };

  return (
    <>
      <RobotFormStyled onSubmit={handleSubmit}>
        <div className="form__item">
          <label className="form__label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="userName"
            id="username"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <Button text="Send" action={() => {}}></Button>
      </RobotFormStyled>
    </>
  );
};

export default LoginForm;
