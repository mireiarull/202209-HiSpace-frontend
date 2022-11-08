import styled from "styled-components";

const RobotsListStyled = styled.ul`
  @media screen and (min-width: 890px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 100px;
  }
`;

export default RobotsListStyled;
