import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, filename) {
  if (firstName && lastName && filename) {
    const signup = await signUpUser(firstName, lastName);
    const upload = await uploadPhoto()
  }
}

export default handleProfileSignup;
