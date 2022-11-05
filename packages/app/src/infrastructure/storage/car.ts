import {
  ref,
  uploadString,
  FirebaseStorage,
  getDownloadURL,
} from "firebase/storage"

export class CarStorage {
  handler: FirebaseStorage
  basePath = "meta"
  constructor(handler: FirebaseStorage) {
    this.handler = handler
  }

  save = async (value: string, fileName: string) => {
    const storageRef = ref(this.handler, `${this.basePath}/${fileName}`)
    await uploadString(storageRef, value).then((snapshot) => {
      console.log("Uploaded a raw string!")
    })
    return await getDownloadURL(storageRef)
  }
}

// const test = () => {
//   const handler = new CarStorage(storage);
//   handler.save(JSON.stringify(StandardCar), "test.json");
// };
// test();
