import { GET_TRANSACTIONS, UPDATE_TRANSACTION } from "../config/Constants";

const initialState = {
  data: [],
  update_transaction: [],
  loading: false,
  error: false
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case `${UPDATE_TRANSACTION}_PENDING`:
    case `${GET_TRANSACTIONS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TRANSACTIONS}_FULFILLED`:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case `${UPDATE_TRANSACTION}_REJECTED`:
    case `${GET_TRANSACTIONS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case `${UPDATE_TRANSACTION}_FULFILLED`:
      return {
        ...state,
        loading: false,
        update_transaction: action.payload
      };
    default:
      return state;
  }
};

export default User;
