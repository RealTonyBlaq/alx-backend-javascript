import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, filename) {
  if (firstName && lastName && filename) {
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPromise = uploadPhoto(filename);

    const [signUp, upload] = await Promise.allSettled([signUpPromise, uploadPromise])
      .catch((error) => {
        console.error(new Error('Error signing up the User'), error);
        return ([]);
      });

    const signUpResult = {
      status: signUp.status,
      value: signUp.status === 'fulfilled' ? signUp.value : signUp.reason.message,
    };

    const uploadResult = {
      status: upload.status,
      value: upload.status === 'fulfilled' ? upload.value : upload.reason.message,
    };

    return [signUpResult, uploadResult];
  }
  throw new Error('Incomplete parameters');
}

export default handleProfileSignup;
