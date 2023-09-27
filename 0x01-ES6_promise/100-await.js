import {uploadPhoto} from "./utils";
import { createUser } from "./utils";

export default async function asyncUploadUser() {
    await Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
        console.log(photo, user)
    })
}

const ss =  asyncUploadUser()
console.log("see",ss)