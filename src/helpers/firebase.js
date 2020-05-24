import firebase from "firebase";
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
  universityId,
  dietaryRequirements,
  email
) => {
  try {
    await studentsCollection.add({
      name,
      studentNumber,
      universityId,
      dietaryRequirements,
      email,
    });
  } catch (error) {
    console.log(error);
  }
};

export const registerUniversity = async (
  name,
  contactName,
  contactEmail,
  contactNumber
) => {
  try {
    await universitiesCollection.add({
      name,
      contactName,
      contactEmail,
      contactNumber,
      isConfirmed: false,
    });
  } catch (error) {
    console.log(error);
  }
};
