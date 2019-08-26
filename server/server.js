const express = require("express");
const app = express();
const http = require("http").createServer(app);
const PORT = process.env.NODE_ENV === "production" ? 3001 : 3002;
const cors = require("cors");
//const morgan = require("morgan");
var router = require("./routes");
var db = require("./db/models");

app.use(cors());
app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
