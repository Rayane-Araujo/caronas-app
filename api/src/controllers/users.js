const knex = require('../database');

class usersController{
    async getAll(req, res) {
        try {
      
          const data = await knex("users");
          res.status(200).json({ status: "ok" });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    }
    
    async create(req, res) {
        try {
          res.status(200).json({ status: "ok" });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    }
    
    async delete(req, res) {
        try {
          const data = await knex("users");
      
          res.status(200).json({ status: "ok" });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    };
}

module.exports = new usersController();