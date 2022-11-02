import { StandardCar } from "../../const/car";
import { storage } from "../firebase";
import { ref, uploadString, FirebaseStorage } from "firebase/storage";

export class CarStorage {
  handler: FirebaseStorage;
  basePath = "cars";
  constructor(handler: FirebaseStorage) {
    this.handler = handler;
  }

  save = async (value: string, fileName: string) => {
    const storageRef = ref(this.handler, `${this.basePath}/${fileName}`);
    await uploadString(storageRef, value).then((snapshot) => {
      console.log("Uploaded a raw string!");
    });
  };
}

// const test = () => {
//   const handler = new CarStorage(storage);
//   handler.save(JSON.stringify(StandardCar), "test.json");
// };
// test();
