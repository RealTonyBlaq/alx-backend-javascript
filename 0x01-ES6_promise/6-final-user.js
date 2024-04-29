import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, filename) {
  if (firstName && lastName && filename) {
    const signUp = await new signUpUser(firstName, lastName);
    const upload = await new uploadPhoto(filename);
    return ([{ status, signUp }, { status, upload }]);
  }
  throw Error;
}

export default handleProfileSignup;
