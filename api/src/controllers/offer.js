const knex = require('../database');

class offerController{
    async create(req, res) {
        try {
          const data = await knex("offer");
          res.status(201).json({ status: "ok" });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    };
    
    async getAll(req, res) {
        try {
          const data = await knex("offer");
          res.status(200).json({ status: "ok" });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    };
    
    async put(req, res) {
        try {
          const data = await knex("offer");
          res.status(200).json({ status: "ok" });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    };
    
    async delete(req, res) {
        try {
          const data = await knex("offer");
          res.status(200).json({ status: "ok" });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
      };
};

module.exports = new offerController();