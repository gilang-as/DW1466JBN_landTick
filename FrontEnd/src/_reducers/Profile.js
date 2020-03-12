import { GET_USER } from "../config/Constants";

// Setup Reducer for Redux
const initialState = {
  myprofile: "",
  error: false
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return {
        ...state
      };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        myprofile: action.payload
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default User;
