const knex = require('../database');

class offerController{
    async create(req, res) {
      try {
        if (!req.body.origin || req.body.origin == "") {
          return res.status(400).json({
            status: ("ERROR"),
            msg: ("O campo Origem é Obrigatório! ")
          })
        };

        if (!req.body.time || req.body.time == "") {
          return res.status(400).json({
            status: ("ERROR"),
            msg: ("O Horário é Obrigatório! ")
          })
        };
        
        if (!req.body.destiny || req.body.destiny == "") {
          return res.status(400).json({
            status: ("ERROR"),
            msg: ("O campo Destino é Obrigatório! ")
          })
        };

        if (!req.body.date || req.body.date == "") {
          return res.status(400).json({
            status: ("ERROR"),
            msg: ("O campo Horário é Obrigatório! ")
          })
        };
        if (!req.body.type || req.body.time == "") {
          return res.status(400).json({
            status: ("ERROR"),
            msg: ("O campo Tipo é Obrigatório!")
          })
        };

        const data = {
          origin: req.body.valueInputOrigin,
          destination: req.body.valueInputDestiny,
          time: req.body.valueInputHour,
          date: req.body.valueInputDate,
          animals: req.body.valueCheckBoxAnimals,
          baggage: req.body.valueCheckBoxBaggage,
          observation: req.body.valueTextFieldDescribe
        }
        await knex("ride").insert(data);

          
          res.status(201).json({ status: "ok" });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    };
    
    async getAll(req, res) {
        try {
          const data = await knex("ride");
          res.status(200).json({ status: "ok", dataRes: data });
        } catch (error) {
          console.log(error);
          res.status(400).json({ status: "ERROR", msg: error });
        }
    };
};

module.exports = new offerController();