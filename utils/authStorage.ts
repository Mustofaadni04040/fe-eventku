import Cookies from "js-cookie";

type AuthData = {
  token?: string;
  firstName?: string;
  lastName?: string;
};

export const setAuth = (authData: AuthData) => {
  Cookies.set("auth", JSON.stringify(authData));
};

export const getAuth = (): AuthData => {
  const auth = Cookies.get("auth");
  return auth ? JSON.parse(auth) : {};
};

export const clearAuth = () => {
  Cookies.remove("auth");
};
