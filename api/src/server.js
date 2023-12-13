const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.listen("3333", function () {
  console.log("server rodando");
});


/*--------------------------USERS----------------------------*/
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

/*--------------------------search----------------------------*/

app.get('/search', function (req, res) {
  res.send("pegando publicações");
});

/* -------------------------offer---------------------------*/

app.post("/offer", function (req, res) {
  res.send("oferecer carona Criado");
});

app.get("/offer", function (req, res) {
  res.send("pegando ofertas de Carona");
});

app.put("/offer", function (req, res) {
  res.send("atualizando ofertas");
});

app.delete("/offer", function (req, res) {
  res.send("deletendo oferta");
});

/* -------------------------request---------------------------*/

app.post("/request", function (req, res) {
  res.send("pedido de carona criado");
});

app.get("/request", function (req, res) {
  res.send("pegando os pedidos de carona");
});

app.put("/request", function (req, res) {
  res.send("atualizando pedido de carona");
});

app.delete("/request", function (req, res) {
  res.send("deletendo pedido de carona");
});