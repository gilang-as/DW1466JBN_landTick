import {
  GET_STATIONS,
  ADD_STATION,
  UPDATE_STATION,
  DELETE_STATION
} from "../config/Constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  add_station: [],
  update_station: [],
  delete_station: [],
  loading: false,
  error: false
};

const Station = (state = initialState, action) => {
  switch (action.type) {
    case `${DELETE_STATION}_PENDING`:
    case `${UPDATE_STATION}_PENDING`:
    case `${ADD_STATION}_PENDING`:
    case `${GET_STATIONS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_STATIONS}_FULFILLED`:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case `${DELETE_STATION}_REJECTED`:
    case `${UPDATE_STATION}_REJECTED`:
    case `${ADD_STATION}_REJECTED`:
    case `${GET_STATIONS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case `${ADD_STATION}_FULFILLED`:
      return {
        ...state,
        loading: false,
        add_station: action.payload
      };
    case `${UPDATE_STATION}_FULFILLED`:
      return {
        ...state,
        loading: false,
        update_station: action.payload
      };
    case `${DELETE_STATION}_FULFILLED`:
      return {
        ...state,
        loading: false,
        delete_station: action.payload
      };
    default:
      return state;
  }
};

export default Station;
