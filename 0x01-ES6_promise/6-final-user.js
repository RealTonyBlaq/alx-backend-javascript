import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, filename) {
  if (firstName && lastName && filename) {
    const signUpPromise = await signUpUser(firstName, lastName);
    const uploadPromise = await uploadPhoto(filename);

    const [signUp, upload] = await Promise.allSettled([signUpPromise, uploadPromise]);

    const signUpResult = {
      status: signUp.status,
      value: signUp,
    };

    const uploadResult = {
      status: upload.status,
      value: upload,
    };

    return [signUpResult, uploadResult];
  }
  throw new Error();
}

export default handleProfileSignup;
