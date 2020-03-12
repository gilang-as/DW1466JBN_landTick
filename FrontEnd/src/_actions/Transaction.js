import { GET_TRANSACTIONS, UPDATE_TRANSACTION } from "../config/Constants";
import { API } from "../config/Api";

export const actionGetTransactions = () => {
  return {
    type: GET_TRANSACTIONS,
    payload: async () => {
      const res = await API.get(`/transactions`);
      return res.data.data;
    }
  };
};

export const actionUpdateTransaction = value => {
  const { id, data } = value;
  return {
    type: UPDATE_TRANSACTION,
    payload: async () => {
      const res = await API.patch(`/transaction/${id}`, data);
      return res.data;
    }
  };
};
