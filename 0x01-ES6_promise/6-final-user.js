import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, filename) {
  if (firstName && lastName && filename) {
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPromise = uploadPhoto(filename);

    return Promise.allSettled([signUpPromise, uploadPromise])
      .then((values) => values.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason.message,
      })))
      .catch(() => {
        console.log(new Error('Error occurred'));
      });
  }
  throw new Error('Incomplete parameters');
}

export default handleProfileSignup;
