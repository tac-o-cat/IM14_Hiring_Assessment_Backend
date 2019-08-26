const express = require("express");
const app = express();
const http = require("http").createServer(app);
const PORT = process.env.NODE_ENV === "production" ? 3001 : 3002;
const cors = require("cors");
const morgan = require("morgan");
var router = require("./routes");
var db = require("./db/models");

const miniMorgan = (request, response, next) => {
  console.log(
    `리퀘스트 메소드: ${request.method}, 리퀘스트 url: ${request.url}`
  );
  next();
};

app.use(cors());
app.use(express.json());
app.use(miniMorgan);
app.use("/", router);

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
