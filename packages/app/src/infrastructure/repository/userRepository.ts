import { User } from "../../domain/model/user";
import { IRepository } from "../../domain/repository";
import { Firestore, setDoc, doc } from "firebase/firestore";

export class UserRepository implements IRepository<User> {
  private handler: Firestore;
  constructor(handler: Firestore) {
    this.handler = handler;
  }
  save = async (model: User) => {
    await setDoc(
      doc(this.handler, "users", model.getAddress()),
      {
        address: model.getAddress(),
        name: model.getName(),
      },
      { merge: true }
    );
  };
}
// import { db } from "../firebase";
// const test = () => {
//   const model = new User({
//     address: "test",
//     name: "test",
//     icon: null,
//     cars: [],
//     parts: [],
//     seasons: [],
//     anzns: [],
//   });
//   const repo = new UserRepository(db);
//   repo
//     .save(model)
//     .catch((e) => console.log(e))
//     .then(() => console.log("success"));
// };
// test();
