import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, filename) {
  if (firstName && lastName && filename) {
    const signUp = await signUpUser(firstName, lastName);
    const upload = await uploadPhoto(filename);

    const [signUp, upload] = await Promise.allSettled([signUpPromise, uploadPromise]);
    
    const signUpResult = {
      status: signUp.status,
      value: signUp.status === 'fulfilled' ? signUp.value : null
    };
    
    const uploadResult = {
      status: upload.status,
      value: upload.status === 'fulfilled' ? upload.value : null
    };

    return [signUpResult, uploadResult];
    return ([{ status, signUp }, { status, upload }]);
  }
  throw new Error();
}

export default handleProfileSignup;
