import { Link, PageInfo, PageLinks } from "./BaseModels";
export interface ScreeningLinks {
  self: Link;
  movie: Link;
}

export interface ScreeningModelDto {
  id: string;
  movieId: string;
  movieName: string;
  screenTime: Date;
  seats: boolean[][];
  theaterName: string;
  threeD: boolean;
  active: boolean;
  _links: ScreeningLinks;
}

export interface Content {
  screeningModelDtoList: ScreeningModelDto[];
}
export interface ScreeningRootObject {
  _embedded: Content;
  _links: PageLinks;
  page: PageInfo;
}
