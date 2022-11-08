import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colorPrimary};
  color: ${(props) => props.theme.backgroundColor};
  padding: 0.2rem 2rem;
  border: none;
  border-radius: 5px;
  margin: 20px;
  font-size: 1.25rem;
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${(props) => props.theme.colorPrimary};
    background-color: ${(props) => props.theme.featuredColor};
    font-weight: bold;
  }
`;

export default ButtonStyled;
