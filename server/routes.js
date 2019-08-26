var router = require("express").Router();
var cors = require("cors");
var db = require("./db/models");

router.get("/users", cors(), db.users.get);
router.get("/todos", cors(), db.todos.get);

module.exports = router;
