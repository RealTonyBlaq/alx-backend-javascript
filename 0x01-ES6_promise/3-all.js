import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const uploaded = uploadPhoto();
  const created = createUser();

  Promise.all([uploaded, created])
  .then((value) => {
    for (const);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
