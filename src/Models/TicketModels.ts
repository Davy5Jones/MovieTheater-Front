import { Link, PageInfo, PageLinks } from "./BaseModels";

export interface TicketDao {
  screeningId: string;
  rowId: number;
  seatId: number;
}
  export interface Links {
    self: Link;
  }

  export interface TicketDto {
    id: string;
    dateTime: Date;
    purchaseTime: Date;
    duration: number;
    theaterName: string;
    userEmail: string;
    userId: number;
    movieName: string;
    rowId: number;
    seatId: number;
    used: boolean;
    _links: Links;
  }






  export interface Content {
    ticketModelDtoList: TicketDto[];
  }




  export interface TicketPage {
    _embedded: Content;
    _links: PageLinks;
    page: PageInfo;
  }

