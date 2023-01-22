import { Link } from "./BaseModels";

  export interface Links {
    self: Link;
    tickets: Link;
  }

  export interface UserObject {
    id: number;
    emailAddress: string;
    customerName: string;
    _links: Links;
  }

   export interface User {
    details: UserObject;
    token: string;
   }
