import {
  loginUserActionCreator,
  logOutUserActionCreator,
} from "../redux/features/robots/userSlice";
import { useAppDispatch } from "../redux/hooks";
import { UserCredentials } from "../types";
import decodeToken from "../utils/decodeToken";

const useUser = () => {
  const dispatch = useAppDispatch();

  const url = process.env.REACT_APP_API_ROBOTS!;

  const getUserToken = async (userData: UserCredentials) => {
    const responseData = await fetch(`${url}/users/login`, {
      method: "POST",
      body: JSON.stringify({
        username: userData.userName,
        password: userData.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const { accessToken: token } = await responseData.json();

    const userLogged = decodeToken(token);

    dispatch(
      loginUserActionCreator({
        ...userLogged,
        userName: userData.userName,
        token: token,
      })
    );
    localStorage.setItem("token", token);
  };

  const logOut = () => {
    localStorage.setItem("token", "");
    dispatch(logOutUserActionCreator());
  };

  return { getUserToken, logOut };
};

export default useUser;
