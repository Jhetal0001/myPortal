import { Timestamp } from "firebase/firestore";

export interface Comments {
  nombre: string,
  textArea: string,
  time: Timestamp
}
