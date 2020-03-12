import {
  GET_ROUTES,
  ADD_ROUTE,
  UPDATE_ROUTE,
  DELETE_ROUTE
} from "../config/Constants";
import { API } from "../config/Api";

//Get All Pet by ID USER via Token
export const actionGetRoutes = () => {
  return {
    type: GET_ROUTES,
    payload: async () => {
      const res = await API.get(`/routes`);
      return res.data.data;
    }
  };
};
export const actionAddRoute = data => {
  return {
    type: ADD_ROUTE,
    payload: async () => {
      const res = await API.post(`/route`, data);
      return res.data;
    }
  };
};
export const actionUpdateRoute = value => {
  const { id, data } = value;
  return {
    type: UPDATE_ROUTE,
    payload: async () => {
      const res = await API.patch(`/route/${id}`, data);
      return res.data;
    }
  };
};
export const actionDeleteRoute = id => {
  return {
    type: DELETE_ROUTE,
    payload: async () => {
      const res = await API.delete(`/route/${id}`);
      return res.data;
    }
  };
};
