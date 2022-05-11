import HttpService from "./HttpService";

class AuthService extends HttpService {
  register = async (userData) => {
    const { data } = await this.client.post("/account/register/", userData);
    return data;
  };

  login = async (credentials) => {
    const { data } = await this.client.post("/token/", credentials);
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
    return data;
  };

  logout = async () => {
    const { data } = await this.client.post("/account/logout/");
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    console.log(data);
    return data;
  };

  getActiveUser = async () => {
    const access = localStorage.getItem('access');
    const { data } = await this.client.get("/account/user/", access);
    return data.user;
  };
}

const authService = new AuthService();
export default authService;
