const knex = require("../database");

class loginController{
    async create(req, res) {
        try {
            

            const user = await knex("users").where({ email: req.body.userEmail });

            if(req.body.valueInputEmail)
            
          res.status(200).json({ status: "ok", dataRes: data });
          console.log(data);
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    }
 
}

module.exports = new loginController();