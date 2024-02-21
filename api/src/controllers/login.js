const knex = require("../database");

class loginController {
  async create(req, res) {
    try {
      const user = await knex("users")
        .where({ email: req.body.valueInputEmail })
        .first();


      if (user.length === 0) {
        return res.status(400).json({
          status: "ERROR",
          msg: "E-mail nao cadastrado"
        });
      }
      const pass = req.body.valueInputEmail;
      const userPassword = await knex.select("password").from("users").where([req.body.valueInputEmail]);
      console.log("eeee", userPassword, pass);

      // if (userPassword ) {
      //   return res.status(400).json({
      //     status: "ERROR",
      //     msg: "Senha incorreta"
      //   });
      // }

      const data = {
        email: req.body.valueInputEmail,
        password: req.body.valueInputPassword,
      };

      res.status(200).json({ status: "OK", dataRes: data  });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: "usuário nao cadastrado" });
    }
  }
}

module.exports = new loginController();
