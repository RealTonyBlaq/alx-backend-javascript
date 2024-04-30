import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const myPromise = await Promise.allSettled([uploadPhoto(), createUser()])
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
