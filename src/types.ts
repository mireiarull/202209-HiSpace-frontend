export interface Robot {
  _id: string;
  name: string;
  image: string;
  features: {
    speed: number;
    endurance: number;
    creationDate: string;
  };
}

export interface User {
  id: string;
  userName: string;
  email: string;
  token: string;
}

export interface UserCredentials {
  userName: string;
  password: string;
}

export interface UserRegisterCredentials extends UserCredentials {
  email: string;
}

export interface JwtPayloadCustom {
  id: string;
  userName: string;
  email: string;
}
