import {
  GET_SEARCH_TICKETS,
  BUY_TICKET,
  GET_MY_TICKET
} from "../config/Constants";
import { API, setAuthToken } from "../config/Api";

export const actionSearchTickets = data => {
  return {
    type: GET_SEARCH_TICKETS,
    payload: async () => {
      const res = await API.post("/search-tickets", data);
      return res.data;
    }
  };
};
export const actionBuyTicket = data => {
  return {
    type: BUY_TICKET,
    payload: async () => {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      const res = await API.post("/order", data);
      return res.data;
    }
  };
};
export const actionGetMyTickets = () => {
  return {
    type: GET_MY_TICKET,
    payload: async () => {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      const res = await API.get(`/my-tickets`);
      return res.data;
    }
  };
};
