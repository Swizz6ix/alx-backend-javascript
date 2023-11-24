const { default: mapRoutes } = require("./routes");
const express = require('express')

const app = express();
const PORT = 1245;

mapRoutes(app);
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});

export default app;
