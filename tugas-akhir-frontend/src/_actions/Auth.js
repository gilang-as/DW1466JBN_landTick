import { AUTH_LOGIN, AUTH_STATUS, AUTH_LOGOUT } from "../config/constants";
import { API } from "../config/api";

export const actionLogin = data => {
  return {
    type: AUTH_LOGIN,
    payload: async () => {
      const res = await API.post("/auth/login", data);
      localStorage.setItem("jwtToken", res.data.token);
      return res.data;
    }
  };
};

// export const actionRegister = data => {
//   return {
//     type: AUTH_REGISTER,
//     payload: async () => {
//       const res = await API.post("/auth/register", data);
//       localStorage.setItem("jwtToken", res.data.token);
//       return res.data;
//     }
//   };
// };

export const actionLogout = () => {
  return {
    type: AUTH_LOGOUT,
    payload: async () => {
      localStorage.clear();
      return false;
    }
  };
};

export const actionCheckAuth = () => {
  return {
    type: AUTH_STATUS,
    payload: async () => {
      const data = localStorage.getItem("jwtToken");
      if (data) {
        return true;
      } else {
        return false;
      }
    }
  };
};
