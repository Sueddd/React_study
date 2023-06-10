import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    // json 토큰
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  // 따로 신경쓰지 않아도 쿠키 설정 가능?
  withCredentials: true,
});
