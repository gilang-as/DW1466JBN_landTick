import {
  GET_STATIONS,
  ADD_STATION,
  UPDATE_STATION,
  DELETE_STATION
} from "../config/Constants";
import { API } from "../config/Api";

export const actionGetStations = () => {
  return {
    type: GET_STATIONS,
    payload: async () => {
      const res = await API.get(`/stations`);
      return res.data.data;
    }
  };
};
export const actionAddStation = data => {
  return {
    type: ADD_STATION,
    payload: async () => {
      const res = await API.post(`/station`, data);
      return res.data;
    }
  };
};
export const actionUpdateStation = value => {
  const { id, data } = value;
  return {
    type: UPDATE_STATION,
    payload: async () => {
      const res = await API.patch(`/station/${id}`, data);
      return res.data;
    }
  };
};
export const actionDeleteStation = id => {
  return {
    type: DELETE_STATION,
    payload: async () => {
      const res = await API.delete(`/station/${id}`);
      return res.data;
    }
  };
};
