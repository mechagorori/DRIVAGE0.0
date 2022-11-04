import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGEING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
  // @ts-ignore
} from "@env";

const firebaseConfig = {
  apiKey: API_KEY as string,
  authDomain: AUTH_DOMAIN as string,
  projectId: PROJECT_ID as string,
  storageBucket: STORAGE_BUCKET as string,
  messagingSenderId: MESSAGEING_SENDER_ID as string,
  appId: APP_ID as string,
  measurementId: MEASUREMENT_ID as string,
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
