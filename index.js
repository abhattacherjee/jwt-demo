const express = require("express");
const auth = require("./routes/auth");

const app = express();

app.use(express.json());
app.use("/auth", auth);

const port = process.env.port || 3000;
const server = app.listen(port, () => console.log(`Listening to port ${port}`));
module.exports = server;
