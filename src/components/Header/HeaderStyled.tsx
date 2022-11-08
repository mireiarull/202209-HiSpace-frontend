import styled from "styled-components";
import "@fontsource/orbitron";

const HeaderStyled = styled.header`
  color: ${(props) => props.theme.colorPrimary};
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  font-family: "Orbitron";
  font-weight: 600;
  border-bottom: 2.5px solid ${(props) => props.theme.featuredColor};
  img {
    height: 50px;
  }

  h1 {
    padding-top: 7px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colorPrimary};
    margin: 20px;
  }

  .header__nav {
    display: flex;
    flex: 1;
    justify-content: right;
    text-align: right;

    &-item {
      padding-bottom: 10px;
    }

    .active {
      padding-bottom: 5px;
      border-bottom: 2px solid #4c3775;
    }
  }
`;

export default HeaderStyled;
