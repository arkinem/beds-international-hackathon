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
