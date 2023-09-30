import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";


export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
  .then(([signupRes, uploadRes]) => [
    {
      status: signupRes.status,
      value: signupRes.status === 'fulfilled'? signupRes.value : signupRes.reason
    },
    {
      status: uploadRes.status,
      value: uploadRes.status === 'fulfilled'? uploadRes.value : uploadRes.reason.message
    },
  ]);
}
