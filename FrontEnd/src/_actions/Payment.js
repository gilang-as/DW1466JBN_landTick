import { UPLOAD_PAYMENT } from "../config/constants";
import { API, setAuthToken } from "../config/api";
export const uploadPayment = (image, id, body) => {
  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append("image", image);
  return {
    type: UPLOAD_PAYMENT,
    payload: async () => {
      setAuthToken(token);
      await API.post(`/uploadfile/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      //   const res = await API.patch(`/user/transaction/${id}`, body);
      //   const { data } = res.data;
      //   return data;
      return { message: "success" };
    }
  };
};
