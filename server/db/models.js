var Sequelize = require("sequelize");
var usersAndTodos = new Sequelize("usersAndTodos", "root", "", {
  dialect: "mysql"
});

var Users = usersAndTodos.define("Users", {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  }
});

var ToDos = usersAndTodos.define("ToDos", {
  name: { allowNull: false, type: Sequelize.STRING },
  title: {
    allowNull: false,
    type: Sequelize.TEXT
  },
  completed: {
    allowNull: false,
    type: Sequelize.BOOLEAN
  }
});

Users.sync();
ToDos.sync();

module.exports = {
  users: {
    get: function(req, res) {
      Users.findAll()
        .then(user => {
          res.send(user);
        })
        .catch(err => console.log(err));
    }
  },
  todos: {
    get: function(req, res) {
      ToDos.findAll()
        .then(todo => res.send(todo))
        .catch(err => console.log(err));
    }
  }
};
