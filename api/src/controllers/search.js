const knex = require('../database');

class searchController{
    async getAll(req, res) {
      try {
        const dataOffer = await knex("offerRide");
        const dataRequest = await knex("requestRide");
        const data = {
          dataOffer,
          dataRequest
        };
          res.status(200).json({ status: "ok", dataRes: data });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    }
    

};

module.exports = new searchController();