import {PageInfo, PageLinks} from "./BaseModels";
  export interface MovieLinks {
    self: string;
    screenings: string;
  }

  export interface MovieModelDto {
    id: string;
    name: string;
    description: string;
    duration: number;
    category: string;
    rating: number;
    active: boolean;
    _links: MovieLinks;
  }

  export interface Content {
    movieModelDtoList: MovieModelDto[];
  }
  export interface RootObject {
    _embedded: Content;
    _links: PageLinks;
    page: PageInfo;
  }

