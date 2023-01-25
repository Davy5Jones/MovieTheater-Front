import axios, { AxiosResponse } from "axios";
import { LoginModel } from "../Models/BaseModels";
import { ScreeningModelDto, ScreeningRootObject } from "../Models/ScreeningModel";
import { UserObject } from "../Models/UserModel";
import global from "./ConstantService";
import axiosInterceptor from "./AxiosInterceptor";
import {  MovieModelDto, MovieRootObject, RecommendedMovieList } from "../Models/MovieModel";
import { TicketDao, TicketDto, TicketPage } from "../Models/TicketModels";


class WebApi {
  private baseUrl = global.urls;

  public customerLogin(login: LoginModel) {
    return axiosInterceptor.post<UserObject>(
      "http://localhost:8080/home/login/customer",
      login,
      { withCredentials: true }
    );
  }
  public customerDetails(): Promise<AxiosResponse<UserObject>> {
    return axiosInterceptor.get<UserObject>(
      "http://localhost:8080/api/customer",
      { withCredentials: true }
    );
  }

  public screeningPage(
    url: string
  ): Promise<AxiosResponse<ScreeningRootObject>> {
    return axiosInterceptor.get<ScreeningRootObject>(
      url || "http://localhost:8080/api/customer/screenings",
      { withCredentials: true }
    );
  }
  public screeningPageByMovieId(
    movieId: string
  ): Promise<AxiosResponse<ScreeningRootObject>> {
    return axiosInterceptor.get<ScreeningRootObject>(
      "http://localhost:8080/api/customer/screenings",
      {
        params: {
          movieId: movieId,
        }
        ,
      headers:{ withCredentials: true }
      }
    );
  }
  public moviePage(url: string): Promise<AxiosResponse<MovieRootObject>> {
    return axiosInterceptor.get<MovieRootObject>(
      url || "http://localhost:8080/api/customer/movies",
      { withCredentials: true }
    );
  }
  public recommendedMovies(): Promise<AxiosResponse<RecommendedMovieList>> {
    return axiosInterceptor.get<RecommendedMovieList>(
      "http://localhost:8080/api/customer/movies/recommended",
      { withCredentials: true }
    );
  }

  public singleMovie(id: string): Promise<AxiosResponse<MovieModelDto>> {
    return axiosInterceptor.get<MovieModelDto>(
      "http://localhost:8080/api/customer/movies/" + id,
      { withCredentials: true }
    );
  }

  public singleScreening(
    id: string
  ): Promise<AxiosResponse<ScreeningModelDto>> {
    return axiosInterceptor.get<ScreeningModelDto>(
      "http://localhost:8080/api/customer/screenings/" + id,
      { withCredentials: true }
    );
  }

  public BuyTicket(ticket: TicketDao): Promise<AxiosResponse<TicketDto>> {
    return axiosInterceptor.post<TicketDto>(
      "http://localhost:8080/api/customer/purchases",
      ticket,
      { withCredentials: true }
    );
  }
  public GetTickets(url: string): Promise<AxiosResponse<TicketPage>> {
    return axiosInterceptor.get<TicketPage>(
      url || "http://localhost:8080/api/customer/purchases",
      { withCredentials: true }
    );
  }
  public SingleTicket(id: string): Promise<AxiosResponse<TicketDto>> {
    return axiosInterceptor.get<TicketDto>(
      "http://localhost:8080/api/customer/purchases/" + id,
      { withCredentials: true }
    );
  }
}


const webApi = new WebApi();
export default webApi;
