import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_STATUS,
  AUTH_LOGOUT
} from "../config/Constants";
import { API } from "../config/Api";

export const actionCheckAuth = () => {
  return {
    type: AUTH_STATUS,
    payload: async () => {
      const data = localStorage.getItem("token");
      if (data) {
        return true;
      } else {
        return false;
      }
    }
  };
};

export const actionLogin = data => {
  return {
    type: AUTH_LOGIN,
    payload: async () => {
      const res = await API.post("/auth/login", data);
      return res.data;
    }
  };
};
export const actionRegister = data => {
  return {
    type: AUTH_REGISTER,
    payload: async () => {
      const res = await API.post("/auth/register", data);
      return res.data;
    }
  };
};

export const actionLogout = () => {
  return {
    type: AUTH_LOGOUT,
    payload: () => {
      localStorage.clear();
      return false;
    }
  };
};
