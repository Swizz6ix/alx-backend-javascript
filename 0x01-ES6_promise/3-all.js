import { uploadPhoto } from "./utils";
import { createUser } from "./utils";

function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
        console.log(photo.body, user.firstName, user.lastName)
    })
    .catch((error) => {
        return (new Error(error))
    })
}

export default handleProfileSignup;