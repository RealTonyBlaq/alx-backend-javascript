import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploaded = uploadPhoto();
  const created = createUser();

  return Promise.all([uploaded, created])
    .then((values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
}
