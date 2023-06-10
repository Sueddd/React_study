const { axiosInstance } = require("./core");
const PATH = "/user";
const AuthApi = {
  async login(email, password) {
    return axiosInstance.get(PATH + "/login", { email, password });
  },

  signUp(email, password) {
    return axiosInstance.post(PATH + "/sign", { email, password });
  },

  logout() {
    return axiosInstance.post(PATH + "/logout");
  },
};

export default AuthApi;
