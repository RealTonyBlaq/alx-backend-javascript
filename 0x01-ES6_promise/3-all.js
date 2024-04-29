import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const uploaded = uploadPhoto();
  const created = createUser();

  Promise.all([uploaded, created])
  .then((values) => {
    console.log(`values[0].body`)
  }).catch(() => {
    console.log('Signup system offline');
  });
}
