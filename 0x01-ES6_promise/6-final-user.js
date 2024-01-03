import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.all([userPromise, photoPromise])
    .then((values) =>
      values.map((value) => ({
        status: value instanceof Error ? 'rejected' : 'resolved',
        value: value instanceof Error ? value.message : value,
      }))
    )
    .catch((error) => {
      return [
        {
          status: 'rejected',
          value: error instanceof Error ? error.message : error,
        },
      ];
    });
}
