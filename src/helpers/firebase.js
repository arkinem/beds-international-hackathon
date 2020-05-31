import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "../constants/firebaseConfig";

firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
const firestore = firebase.firestore();

const universitiesCollection = firestore.collection(`universities`);
const studentsCollection = firestore.collection(`students`);

export const fetchUniversities = async () => {
  let result = {
    error: null,
    universities: [],
  };

  try {
    const universitiesSnapshot = await universitiesCollection
      .where("isConfirmed", "==", true)
      .get();

    if (!universitiesSnapshot.empty) {
      universitiesSnapshot.forEach((doc) => {
        result.universities.push({
          id: doc.id,
          name: doc.data().name,
        });
      });
    }
  } catch (error) {
    result.error = error;
  }
  console.log(result);
  return result;
};

export const registerStudent = async (
  name,
  studentNumber,
  email,
  universityId,
  dietaryRequirements
) => {
  let result = { success: false, error: null };

  try {
    await studentsCollection.add({
      name,
      studentNumber,
      email,
      universityId,
      dietaryRequirements,
    });

    result.success = true;
  } catch (error) {
    result.error = error;
  }

  return result;
};

export const registerUniversity = async (
  name,
  contactName,
  contactEmail,
  contactNumber
) => {
  let result = { success: false, error: null };

  try {
    await universitiesCollection.add({
      name,
      contactName,
      contactEmail,
      contactNumber,
      isConfirmed: false,
    });

    result.success = true;
  } catch (error) {
    result.error = error;
  }

  return result;
};
