const express = require("express");
const cors = require("cors");
const knex = require("");

const app = express();

app.use(express.json());
app.use(cors());



app.listen("3333", function () {
    console.log("server rodando");
});