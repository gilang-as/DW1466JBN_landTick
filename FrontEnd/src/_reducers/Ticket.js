import {
  GET_SEARCH_TICKETS,
  BUY_TICKET,
  GET_MY_TICKET
} from "../config/Constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  buy_ticket: [],
  my_tickets: [],
  loading: false,
  error: false
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MY_TICKET}_PENDING`:
    case `${BUY_TICKET}_PENDING`:
    case `${GET_SEARCH_TICKETS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_SEARCH_TICKETS}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_MY_TICKET}_REJECTED`:
    case `${BUY_TICKET}_REJECTED`:
    case `${GET_SEARCH_TICKETS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case `${BUY_TICKET}_FULFILLED`:
      return {
        ...state,
        buy_ticket: action.payload,
        loading: false
      };
    case `${GET_MY_TICKET}_FULFILLED`:
      return {
        ...state,
        my_tickets: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default Auth;
