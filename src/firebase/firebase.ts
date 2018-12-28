import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { firebaseDevConfig } from "../../config.dev.js";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseDevConfig);
}

export const auth = firebase.auth();
export const db = firebase.database();
