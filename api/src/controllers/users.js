const knex = require("../database");

class usersController {
  async getAll(req, res) {
    try {
      const data = await knex("users");
      res.status(200).json({ status: "ok", dataRes: data });
      console.log(data);
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: error });
    }
  }

  async create(req, res) {
    try {
      res.status(200).json({ status: "ok" });

      const data = {
        name: req.body.valueInputName,
        email: req.body.valueInputEmail,
        telephone: req.body.valueInputPhone,
        date_birth: req.body.valueInputDate,
        password: req.body.valueInputPassword,
      };

      await knex("users").insert(data);
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: error });
    }
  }

  async delete(req, res) {
    try {
      // const data = await knex("users").where("id", req.params.id).first();

      await knex("users").where("id", req.params.id).delete();

      res.status(200).json({ status: "ok" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: "ERROR", msg: error });
    }
  }
}

module.exports = new usersController();
