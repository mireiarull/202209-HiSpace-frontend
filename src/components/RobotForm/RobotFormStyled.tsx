import styled from "styled-components";

const RobotFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  width: 80%;
  max-width: 600px;

  .form__label {
    font-weight: 400;
  }
  .form__item {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 5px;
  }
  span {
    margin-top: 10px;
  }
  fieldset {
    width: 100%;
  }
  legend {
    text-align: center;
  }

  .button {
    margin: 1rem 2rem;
    width: 180px;
  }

  input {
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin: 5px 0;

    &:focus {
      outline: none;
    }
  }
`;

export default RobotFormStyled;
