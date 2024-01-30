const knex = require('../database');

class requestController{
    async create(req, res) {
        try {
        
          const data = {
            origin: req.body.valueInputOrigin,
            destination: req.body.valueInputDestiny,
            time: req.body.valueInputHour,
            date: req.body.valueInputDate,
            telephone: req.body.valueInputNumber
          }

          await knex("requestRide").insert(data);
          res.status(201).json({ status: "ok", dataRes: data });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    };
    
    async getAll(req, res) {
        try {
          const data = await knex("requestRide");
          res.status(200).json({ status: "ok", dataRes: data });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    };
    
    async put(req, res) {
        try {
          const data = await knex("requestRide");
          res.status(200).json({ status: "ok" });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    };
    
    async delete(req, res) {
        try {
          const data = await knex("requestRide");
          res.status(200).json({ status: "ok" });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
      };
};

module.exports = new requestController();