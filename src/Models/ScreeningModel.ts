import { PageInfo, PageLinks } from "./BaseModels";
export interface ScreeningLinks {
  self: string;
  movie: string;
}

export interface ScreeningModelDto {
  id: string;
  movieId: string;
  movieName: string;
  screenTime: Date;
  seats: boolean[][];
  theaterName: string;
  active: boolean;
  threeD: boolean;
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
