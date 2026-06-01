import { dummyProfile, simulateDelay } from "./dummyData";

export async function getProfile(token, setProfile) {
  await simulateDelay(300);
  setProfile({
    firstName: dummyProfile.first_name,
    lastName: dummyProfile.last_name,
    email: dummyProfile.email,
    phone: dummyProfile.phone_number,
  });
}

export async function editProfile(profileId, editedProfile, token) {
  await simulateDelay(300);
  return { success: true };
}

export async function deleteProfile(profileId, token) {
  await simulateDelay(300);
  return { success: true };
}
