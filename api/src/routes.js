const express = require('express');
const knex = require("./database");
const usersController = require("./controllers/offer");
const usersController = require("./controllers/request");
const usersController = require("./controllers/search");
const usersController = require("./controllers/users");
const appRoutes = express.Router();

// ROTAS USERS

appRoutes.post("/users", usersController.create);
appRoutes.get("users", usersController.getAll);

//ROTAS REQUEST

appRoutes.post("/request", usersController.create);
appRoutes.get("/request", usersController.getAll);
appRoutes.put("request", usersController.put);
appRoutes.delete("request", usersController.delete);


//ROTAS SEARCH

appRoutes.get("/search", usersController.getAll);

//ROTAS OFFER

appRoutes.post("/offer", usersController.create);
appRoutes.get("/offer", usersController.getAll);
appRoutes.put("/offer", usersController.put);
appRoutes.delete("/offer", usersController.delete);






module.exports = appRoutes;
