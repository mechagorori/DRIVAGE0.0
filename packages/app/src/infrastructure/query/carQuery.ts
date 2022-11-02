import { Car } from "../../domain/model/car";
import { Firestore, getDoc, doc, Timestamp } from "firebase/firestore";

export interface CarDto {
  address: string;
  meta: string;
}

export class CarQuery {
  private handler: Firestore;
  private collection = "cars";
  constructor(handler: Firestore) {
    this.handler = handler;
  }

  find = async (address: string) => {
    const docSnap = await getDoc(doc(this.handler, this.collection, address));
    if (docSnap.exists()) {
      const data = docSnap.data() as CarDto;
      return this.converter(data);
    } else {
      return null;
    }
  };

  converter = (target: CarDto) =>
    new Car({
      ...target,
    });
}
