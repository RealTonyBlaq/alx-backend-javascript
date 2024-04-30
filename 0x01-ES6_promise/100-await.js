import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  const myPromise = Promise.allSettled([photo, user])
    .then((results) => ({
      photo: results[0].value,
      user: results[1].value,
    }))
    .catch(() => ({
      photo: null,
      user: null,
    }));

  return myPromise;
}
