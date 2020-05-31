import { universitiesCollection } from "./firebase";

export const fetchUniversities = async (includeUnconfirmed) => {
  let result = {
    error: null,
    universities: [],
  };

  try {
    const universitiesSnapshot = includeUnconfirmed
      ? await universitiesCollection.get()
      : await universitiesCollection.where("isConfirmed", "==", true).get();

    if (!universitiesSnapshot.empty) {
      universitiesSnapshot.forEach((doc) => {
        result.universities.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    }
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
