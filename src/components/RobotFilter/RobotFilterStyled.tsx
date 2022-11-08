import styled from "styled-components";
import "@fontsource/orbitron";

export const RobotFilterStyled = styled.form`
  display: flex;
  color: ${(props) => props.theme.colorPrimary};
  justify-content: flex-start;
  font-size: 1.5rem;
  align-items: center;
  min-width: 300px;
  padding: 15px;
  display: flex;
  margin: 20px auto;
  font-family: "Orbitron";
  font-weight: 600;

  input {
    border: none;
    color: ${(props) => props.theme.colorPrimary};
    font-weight: 400;
    border-bottom: 1px solid white;
    padding: 0 10px;
    width: 100%;
    background-color: transparent;
    text-align: center;
    font-size: 1rem;
    padding: 5px;
    margin: 10px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      text-align: center;
      font-size: 1rem;
      color: #e8e8e8;
      font-weight: 400;
    }
  }
  @media screen and (min-width: 890px) {
    position: absolute;
    right: 0;
    top: 0;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    width: 76%;
    label {
      font-size: 1.3rem;
    }
    input {
      width: 350px;
    }
  }
`;
