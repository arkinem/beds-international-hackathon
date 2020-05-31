import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../constants/firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const firestore = firebase.firestore();

export const universitiesCollection = firestore.collection(`universities`);
export const studentsCollection = firestore.collection(`students`);
