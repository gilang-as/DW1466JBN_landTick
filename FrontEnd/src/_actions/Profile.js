import { GET_USER } from "../config/Constants";
import { API, setAuthToken } from "../config/Api";

export function actionMyProfile() {
  return {
    type: GET_USER,
    payload: async () => {
      const token = await localStorage.getItem("token");
      setAuthToken(token);
      const res = await API.get("/profile");
      return res.data;
    }
  };
}
