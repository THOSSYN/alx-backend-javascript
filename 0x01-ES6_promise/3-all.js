import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return Promise.all([photoPromise, userPromise]).then(
    (values) => {
      const [photo, user] = values;
      const result = `${photo.body} ${user.firstName} ${user.lastName}`;
      console.log(result);
      return { photo, user };
    },
    () => {
      console.log(new Error('Signup system offline'));
    },
  );
}
