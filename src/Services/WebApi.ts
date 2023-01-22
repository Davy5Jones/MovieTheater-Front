import axios, { AxiosResponse } from "axios";
import { LoginModel } from "../Models/BaseModels";
import { ScreeningModelDto, ScreeningRootObject } from "../Models/ScreeningModel";
import { UserObject } from "../Models/UserModel";
import global from "./ConstantService";
import tokenAxios from "./AxiosIntreceptor";
import { MovieList, MovieModelDto, MovieRootObject, RecommendedMovieList } from "../Models/MovieModel";
import { TicketDao, TicketDto, TicketPage } from "../Models/TicketModels";


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
    url: string
  ): Promise<AxiosResponse<ScreeningRootObject>> {
    return tokenAxios.get<ScreeningRootObject>(
      url || "http://localhost:8080/api/customer/screenings"
    );
  }
  public screeningPageByMovieId(
    movieId: string
  ): Promise<AxiosResponse<ScreeningRootObject>> {
    return tokenAxios.get<ScreeningRootObject>(
      "http://localhost:8080/api/customer/screenings",
      {
        params: {
          movieId: movieId,
        },
      }
    );
  }
  public moviePage(url: string): Promise<AxiosResponse<MovieRootObject>> {
    return tokenAxios.get<MovieRootObject>(
      url || "http://localhost:8080/api/customer/movies"
    );
  }
  public recommendedMovies(): Promise<AxiosResponse<RecommendedMovieList>> {
    return tokenAxios.get<RecommendedMovieList>(
      "http://localhost:8080/api/customer/movies/recommended"
    );
  }

  public singleMovie(id: string): Promise<AxiosResponse<MovieModelDto>> {
    return tokenAxios.get<MovieModelDto>(
      "http://localhost:8080/api/customer/movies/" + id
    );
  }

  public singleScreening(
    id: string
  ): Promise<AxiosResponse<ScreeningModelDto>> {
    return tokenAxios.get<ScreeningModelDto>(
      "http://localhost:8080/api/customer/screenings/" + id
    );
  }

  public BuyTicket(ticket: TicketDao): Promise<AxiosResponse<TicketDto>> {
    return tokenAxios.post<TicketDto>(
      "http://localhost:8080/api/customer/purchases",
      ticket
    );
  }
  public GetTickets(url: string): Promise<AxiosResponse<TicketPage>> {
    return tokenAxios.get<TicketPage>(
      url || "http://localhost:8080/api/customer/purchases"
    );
  }
  public SingleTicket(id: string): Promise<AxiosResponse<TicketDto>> {
    return tokenAxios.get<TicketDto>(
      "http://localhost:8080/api/customer/purchases/" + id
    );
  }
}


const webApi = new WebApi();
export default webApi;
