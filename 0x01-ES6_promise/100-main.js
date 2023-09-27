import asyncUploadUser from "./100-main";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
