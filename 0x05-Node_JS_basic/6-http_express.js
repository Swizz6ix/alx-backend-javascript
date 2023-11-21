const express = require("express");

export const app = express()

app.get("/", (_, res) => {
    res.send("Hello Holberton School");
})
app.listen(1245, () => {
    console.log("server started and listening to port 1245");
});