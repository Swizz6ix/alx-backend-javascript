import { uploadPhoto } from "./utils";
import { createUser } from "./utils";

function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
        console.log(photo.body, user.firstName, user.lastName)
    })
    .catch((error) => {
        console.log("Signup system offline")
    })
}

export default handleProfileSignup;