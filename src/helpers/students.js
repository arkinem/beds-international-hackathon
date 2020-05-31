import { studentsCollection } from "./firebase";

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

export const fetchStudents = async () => {
  let result = {
    error: null,
    students: [],
  };

  try {
    const studentsSnapshot = await studentsCollection.get();

    if (!studentsSnapshot.empty) {
      studentsSnapshot.forEach((doc) => {
        result.students.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    }
  } catch (error) {
    result.error = error;
  }
  console.log("fetchStudents", result);
  return result;
};
