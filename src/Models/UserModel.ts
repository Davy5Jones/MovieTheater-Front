  export interface Links {
    self: string;
    tickets: string;
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
