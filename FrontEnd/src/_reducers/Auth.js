import {
  AUTH_LOGIN,
  AUTH_STATUS,
  AUTH_LOGOUT,
  AUTH_REGISTER
} from "../config/Constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  authentication: false,
  authStatus: false,
  loading: false,
  error: false
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case `${AUTH_REGISTER}_PENDING`:
    case `${AUTH_LOGIN}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${AUTH_REGISTER}_FULFILLED`:
    case `${AUTH_LOGIN}_FULFILLED`:
      const { token, status, message } = action.payload;
      if (status) {
        localStorage.setItem("token", token);
        return {
          ...state,
          token,
          message,
          message_status: "success",
          authentication: true,
          loading: false
        };
      } else {
        return {
          ...state,
          message,
          message_status: "danger",
          authentication: false,
          loading: false
        };
      }
    case `${AUTH_REGISTER}_REJECTED`:
    case `${AUTH_LOGIN}_REJECTED`:
      return {
        ...state,
        loading: false,
        authentication: false,
        error: true
      };

    // AUTH STATUS
    case `${AUTH_STATUS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${AUTH_STATUS}_FULFILLED`:
      return {
        ...state,
        authStatus: action.payload,
        authentication: action.payload,
        message: "",
        loading: false
      };
    case `${AUTH_STATUS}_REJECTED`:
      return {
        ...state,
        error: true,
        loading: false
      };

    // AUTH LOGOUT
    case `${AUTH_LOGOUT}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${AUTH_LOGOUT}_FULFILLED`:
      return {
        ...state,
        authStatus: action.payload,
        authentication: false,
        loading: false
      };
    case `${AUTH_LOGOUT}_REJECTED`:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};

export default Auth;
