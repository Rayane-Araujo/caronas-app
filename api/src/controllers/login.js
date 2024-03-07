const knex = require("../database");

class loginController {
  async create(req, res) {
    try {
      const { body } = req;

      //buscando o usuario
      const user = await knex("users")
        .where({
          email: body.email,
        })
        .first();

      //usuario existe
      if (user === undefined) {
        return res.status(400).json({
          status: "ERROR",
          msg: "E-mail nao cadastrado",
        });
      }

      //valida senha
      if (user.password !== body.pass) {
        return res.status(400).json({
          status: "ERROR",
          msg: "Senha invalida",
        });
      }
      const userId = (await knex.select("users.id").from("users").where("email", body.email));
      res.status(200).json({ status: "OK", userId: userId});
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: "Usuário não cadastrado!" });
    }
  }
}

module.exports = new loginController();
