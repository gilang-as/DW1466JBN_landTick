import { GET_USERS } from "../config/Constants";
import { API } from "../config/Api";

//Get All Pet by ID USER via Token
export const actionGetUsers = () => {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await API.get(`/users`);
      return res.data.data;
    }
  };
};
