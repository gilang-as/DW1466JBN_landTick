import {
  GET_TRAINS,
  ADD_TRAIN,
  UPDATE_TRAIN,
  DELETE_TRAIN
} from "../config/Constants";

const initialState = {
  data: [],
  add_train: [],
  update_train: [],
  delete_train: [],
  loading: false,
  error: false
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case `${DELETE_TRAIN}_PENDING`:
    case `${UPDATE_TRAIN}_PENDING`:
    case `${ADD_TRAIN}_PENDING`:
    case `${GET_TRAINS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TRAINS}_FULFILLED`:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case `${DELETE_TRAIN}_REJECTED`:
    case `${UPDATE_TRAIN}_REJECTED`:
    case `${ADD_TRAIN}_REJECTED`:
    case `${GET_TRAINS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case `${ADD_TRAIN}_FULFILLED`:
      return {
        ...state,
        loading: false,
        add_train: action.payload
      };
    case `${UPDATE_TRAIN}_FULFILLED`:
      return {
        ...state,
        loading: false,
        update_train: action.payload
      };
    case `${DELETE_TRAIN}_FULFILLED`:
      return {
        ...state,
        loading: false,
        delete_train: action.payload
      };
    default:
      return state;
  }
};

export default User;
