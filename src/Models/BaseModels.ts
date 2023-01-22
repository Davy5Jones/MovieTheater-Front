
  export interface PageLinks {
    first: string;
    previous?: string;
    self: string;
    next?: string;
    last: string;
  }

   export interface PageInfo {
     size: number;
     totalElements: number;
     totalPages: number;
     number: number;
   }

   export interface LoginModel{
    email: string;
    password: string;
    stayLoggedIn: boolean;
   }


   