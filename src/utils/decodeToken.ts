import jwtDecode from "jwt-decode";
import { JwtPayloadCustom } from "../types";

const decodeToken = (token: string) => {
  const jwtPayload: JwtPayloadCustom = jwtDecode(token);

  return {
    id: jwtPayload.id,
    userName: jwtPayload.userName,
    email: jwtPayload.email,
  };
};

export default decodeToken;
