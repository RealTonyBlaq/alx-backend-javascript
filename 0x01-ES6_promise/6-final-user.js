import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, filename) {
  if (firstName && lastName && filename) {
    const signUp = await signUpUser(firstName, lastName);
    const upload = await uploadPhoto(filename);
    return ([{ status, signUp }, { status, upload }]);
  }
  throw new Error();
}

export default handleProfileSignup;
