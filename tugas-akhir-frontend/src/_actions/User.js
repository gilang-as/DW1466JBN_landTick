import { GET_USER } from "../config/constants";
import { API, setAuthToken } from "../config/api";

export function actionGetUser() {
  return {
    type: GET_USER,
    payload: async () => {
      const token = await localStorage.getItem("jwtToken");
      setAuthToken(token);
      const res = await API.get("/user");
      return res.data;
    }
  };
}
