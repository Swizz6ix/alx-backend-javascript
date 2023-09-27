import {uploadPhoto} from "./utils";
import { createUser } from "./utils";

export default async function asyncUploadUser() {
    await Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
        return {
            photo,
            user
        }
    })
}