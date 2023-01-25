export interface User {
  id?: string ;
  name?: string | null;
  lastname?: string ;
  sex?: string ;
  email?: string | null;
  phone?: string | null;
  country?: string ;
  city?: string ;
  address?: string ;
  imgurl?: string | null;
  emailVerified?: boolean;
  imgFront?: string | null;
}
