import { User } from "../../domain/model/user";
import { Firestore, getDoc, doc, Timestamp } from "firebase/firestore";

export interface UserDto {
  address: string;
  name: string | null;
  icon: string | null;
  cars: {
    address: string;
    meta: string;
    isSelected: boolean;
  }[];
  seasons: {
    id: string;
    title: string;
    startDate: Timestamp;
    endDate: Timestamp;
    amount: number;
  }[];
  anzns: {
    address: string;
    details: {
      id: string;
      title: string;
      isSuccess: boolean;
    }[];
    startDate: Timestamp;
    endDate: Timestamp;
  }[];
}

export class UserQuery {
  private handler: Firestore;
  private collection = "users";
  constructor(handler: Firestore) {
    this.handler = handler;
  }

  find = async (address: string) => {
    const docSnap = await getDoc(doc(this.handler, this.collection, address));
    if (docSnap.exists()) {
      const data = docSnap.data() as UserDto;
      return this.converter(data);
    } else {
      return null;
    }
  };

  converter = (target: UserDto) =>
    new User({
      ...target,
      seasons: target.seasons.map((i) => ({
        ...i,
        startDate: i.startDate.toDate(),
        endDate: i.endDate.toDate(),
      })),
      anzns: target.anzns.map((i) => ({
        ...i,
        startDate: i.startDate.toDate(),
        endDate: i.endDate.toDate(),
      })),
    });
}
