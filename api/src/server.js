const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.listen("3333", function () {
  console.log("server rodando");
});



app.post("/users", function (req, res) {
  res.send("Usuario Criado");
});

app.get('/users', function (req, res) {
  res.send('GetAll');
});

app.put('/users', function (req, res) {
  res.send('Atualizando usuário');
});

app.delete('/users', function (req, res) {
  res.send('usuário deletado');
});
