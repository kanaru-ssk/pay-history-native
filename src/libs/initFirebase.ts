// firebase初期化

import {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE,
  REACT_APP_FIREBASE_MESSAGING_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
} from "@env";
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

// firebase設定
const config = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// firebase初期化
export const initFirebase = (): void => {
  const app = initializeApp(config);
  initializeFirestore(app, { ignoreUndefinedProperties: true });
};
