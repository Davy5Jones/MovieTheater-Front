import exp from "constants";
import {Link, PageInfo, PageLinks} from "./BaseModels";
  export interface MovieLinks {
    self: Link;

    screenings: Link;
  }
    export interface RecommendedMovieList {
      _embedded: MovieList;
    }

  export interface MovieModelDto {
    id: string;
    name: string;
    description: string;
    duration: number;
    category: string;
    rating: number;
    img:string;
    trailer:string;
    active: boolean;
    _links: MovieLinks;
  }
  export interface MovieList {
    movieModelDtoList: MovieModelDto[];
  }
  export interface MovieRootObject {
    _embedded: MovieList;
    _links: PageLinks;
    page: PageInfo;
  }


