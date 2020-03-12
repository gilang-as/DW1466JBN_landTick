import {
  GET_TRAINS,
  ADD_TRAIN,
  UPDATE_TRAIN,
  DELETE_TRAIN
} from "../config/Constants";
import { API } from "../config/Api";

export const actionGetTrains = () => {
  return {
    type: GET_TRAINS,
    payload: async () => {
      const res = await API.get(`/trains`);
      return res.data.data;
    }
  };
};
export const actionAddTrain = data => {
  return {
    type: ADD_TRAIN,
    payload: async () => {
      const res = await API.post(`/train`, data);
      return res.data;
    }
  };
};
export const actionUpdateTrain = value => {
  const { id, data } = value;
  return {
    type: UPDATE_TRAIN,
    payload: async () => {
      const res = await API.patch(`/train/${id}`, data);
      return res.data;
    }
  };
};
export const actionDeleteTrain = id => {
  return {
    type: DELETE_TRAIN,
    payload: async () => {
      const res = await API.delete(`/train/${id}`);
      return res.data;
    }
  };
};
