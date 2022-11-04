import { User } from "../../domain/model/user";
import { IRepository } from "../../domain/repository";
import { Firestore, setDoc, doc, Timestamp } from "firebase/firestore";

export class UserRepository implements IRepository<User> {
  private handler: Firestore;
  constructor(handler: Firestore) {
    this.handler = handler;
  }
  save = async (model: User) => {
    await setDoc(
      doc(this.handler, "users", model.getAddress()),
      this.converter(model),
      { merge: true }
    );
  };
  converter = (model: User) => ({
    address: model.getAddress(),
    name: model.getName(),
    icon: model.getIcon(),
    cars: model.getCars()?.map((i) => ({
      address: i.getAddress(),
      meta: i.getMeta(),
      isSelected: i.getIsSelected(),
    })),
    seasons: model.getSeasons().map((i) => ({
      id: i.getId(),
      title: i.getTitle(),
      startDate: Timestamp.fromDate(i.getStartDate()),
      endDate: Timestamp.fromDate(i.getEndDate()),
    })),
    anzns: model.getAnzns().map((i) => ({
      address: i.getAddress(),
      totalPoint: i.getTotalPoint(),
      details: i.getDetails().map((d) => ({
        id: d.getId(),
        title: d.getTitle(),
        point: d.getPoint(),
      })),
      startDate: Timestamp.fromDate(i.getStartDate()),
      endDate: Timestamp.fromDate(i.getEndDate()),
    })),
  });
}
