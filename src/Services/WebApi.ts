import axios, { AxiosResponse } from "axios";
import { LoginModel } from "../Models/BaseModels";
import { ScreeningRootObject } from "../Models/ScreeningModel";
import { UserObject } from "../Models/UserModel";
import store from "../Redux/Store";
import global from "./ConstantService";
import tokenAxios from "./AxiosIntreceptor";


class WebApi {
  private baseUrl = global.urls;

  public customerLogin(login: LoginModel) {
    return axios.post<string>(
      "http://localhost:8080/home/login/customer",
      login
    );
  }
  public customerDetails(): Promise<AxiosResponse<UserObject>> {
    return tokenAxios.get<UserObject>("http://localhost:8080/api/customer");
  }

  public screeningPage(
    url?: string
  ): Promise<AxiosResponse<ScreeningRootObject>> {
    return tokenAxios.get<ScreeningRootObject>(
      "http://localhost:8080/api/customer/screenings"
    );
  }
}

const webApi = new WebApi();
export default webApi;
