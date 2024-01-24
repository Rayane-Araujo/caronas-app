const express = require('express');
const knex = require("./database");
const offerController = require("./controllers/offer");
const requestController = require("./controllers/request");
const searchController = require("./controllers/search");
const usersController = require("./controllers/users");
const appRoutes = express.Router();

// ROTAS USERS

appRoutes.post("/users", usersController.create);
appRoutes.get("users", usersController.getAll);
appRoutes.delete("users", usersController.delete);

//ROTAS REQUEST

appRoutes.post("/request", requestController.create);
appRoutes.get("/request", requestController.getAll);
appRoutes.put("request", requestController.put);
appRoutes.delete("request", requestController.delete);


//ROTAS SEARCH

appRoutes.get("/search", searchController.getAll);

//ROTAS OFFER

appRoutes.post("/offer", offerController.create);
appRoutes.get("/offer", offerController.getAll);
appRoutes.put("/offer", offerController.put);
appRoutes.delete("/offer", offerController.delete);






module.exports = appRoutes;
