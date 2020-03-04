import { AUTH_LOGIN, AUTH_STATUS } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  authentication: false,
  loading: false,
  error: false,
  authStatus: false
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    // case `${AUTH_REGISTER}_PENDING`:
    case `${AUTH_LOGIN}_PENDING`:
      return {
        ...state,
        loading: true
      };
    // case `${AUTH_REGISTER}_FULFILLED`:
    case `${AUTH_LOGIN}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        authentication: true,
        loading: false
      };
    // case `${AUTH_REGISTER}_REJECTED`:
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
        ...state
      };
    case `${AUTH_STATUS}_FULFILLED`:
      return {
        ...state,
        authStatus: action.payload
      };
    case `${AUTH_STATUS}_REJECTED`:
      return {
        ...state,
        error: true
      };

    //LOGOUT
    // case `${AUTH_LOGOUT}_PENDING`:
    //   return {
    //     ...state
    //   };
    // case `${AUTH_LOGOUT}_FULFILLED`:
    //   return {
    //     ...state,
    //     authentication: false,
    //     authStatus: action.payload
    //   };
    // case `${AUTH_LOGOUT}_REJECTED`:
    //   return {
    //     ...state,
    //     error: true
    //   };
    default:
      return state;
  }
};

export default Auth;
