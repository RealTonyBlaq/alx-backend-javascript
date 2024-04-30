import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, filename) {
  if (firstName && lastName && filename) {
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPromise = uploadPhoto(filename);

    return Promise.allSettled([signUpPromise, uploadPromise])
      .then((values) => values.map((result) => ({
        status: result.status,
        value: result.value === 'fulfilled' ? result.value : result.reason.message,
      })))
      .catch(() => {
        console.error(new Error('Error signing up the User'));
        return ([]);
      });
  }
  throw new Error('Incomplete parameters');
}

export default handleProfileSignup;
