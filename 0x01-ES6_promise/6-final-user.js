import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, filename) {
  if (firstName && lastName && filename) {
    const signup = await new signUpUser(firstName, lastName);
    const upload = await new uploadPhoto(filename);
    return ([{ status, signup }, { status, upload }]);
  }
  throw Error;
}

export default handleProfileSignup;
