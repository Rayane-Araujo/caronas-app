const express = require("express");
const cors = require("cors");
const knex = require("./database");
const app = express();
const appRoutes = require("./routes");

app.use(express.json());
app.use(cors());

(async () => {
  if ((await knex.schema.hasTable("users")) == false) {
    await knex.schema.createTable("users", function (table) {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("telephone");
      table.date("date_birth");
    });

    console.log("criado a tabela users");
  }

  if ((await knex.schema.hasTable("offerRide")) == false) {
    await knex.schema.createTable("offerRide", function (table) {
      table.increments("id").primary();
      table.string("origin");
      table.string("destination");
      table.dateTime("time");
      table.integer("price");
      table.date("date");
      table.integer("telephone");
      table.string("description");
    });
    console.log("criado tabela offerRide");
  }

  if ((await knex.schema.hasTable("requestRide")) == false) {
    await knex.schema.createTable("requestRide", function (table) {
      table.increments("id").primary();
      table.string("origin");
      table.string("destination");
      table.dateTime("time");
      table.date("date");
      table.integer("telephone");
      table.string("description");
    });
    console.log("criado a tabela requestRide");
  }
  
})();

app.use("/", appRoutes);

app.listen("3333", function () {
  console.log("server rodando");
});

/*--------------------------USERS----------------------------*/
// app.post("/users", async function (req, res) {
//   try {
//     const data = await knex("users");

//     res.status(201).json({ status: "ok", dataRes: data});
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ status: "ERROR", msg: error });
//   }
  
// });

// app.get("/users", async function (req, res) {
//   try {

//     const data = await knex("users");
//     res.status(200).json({ status: "ok" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ status: "ERROR", msg: error });
//   }
// });

// app.put("/users", async function (req, res) {
//   try {
//     res.status(200).json({ status: "ok" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ status: "ERROR", msg: error });
//   }
// });

// app.delete("/users", async function (req, res) {
//   try {
//     const data = await knex("users");

//     res.status(200).json({ status: "ok" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ status: "ERROR", msg: error });
//   }
// });

/*--------------------------search----------------------------*/

// app.get("/search", async function (req, res) {
//   try {
//     const data = await knex("search");
//     res.status(200).json({ status: "ok" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ status: "ERROR", msg: error });
//   }
// });

/* -------------------------offer---------------------------*/

// app.post("/offer", async function (req, res) {
//   try {
//     const data = await knex("offer");
//     res.status(201).json({ status: "ok" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ status: "ERROR", msg: error });
//   }
// });

// app.get("/offer", async function (req, res) {
//   try {
//     const data = await knex("offer");
//     res.status(200).json({ status: "ok" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ status: "ERROR", msg: error });
//   }
// });

// app.put("/offer", async function (req, res) {
//   try {
//     const data = await knex("offer");
//     res.status(200).json({ status: "ok" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ status: "ERROR", msg: error });
//   }
// });

// app.delete("/offer", async function (req, res) {
//   try {
//     const data = await knex("offer");
//     res.status(200).json({ status: "ok" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ status: "ERROR", msg: error });
//   }
// });

/* -------------------------request---------------------------*/

// app.post("/request", async function (req, res) {
//   try {
//     const data = await knex("request");
//     res.status(201).json({ status: "ok" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ status: "ERROR", msg: error });
//   }
// });

// app.get("/request", async function (req, res) {
//   try {
//     const data = await knex("request");
//     res.status(200).json({ status: "ok" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ status: "ERROR", msg: error });
//   }
// });

// app.put("/request", async function (req, res) {
//   try {
//     const data = await knex("request");
//     res.status(200).json({ status: "ok" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ status: "ERROR", msg: error });
//   }
// });

// app.delete("/request", async function (req, res) {
//   try {
//     const data = await knex("request");
//     res.status(200).json({ status: "ok" });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ status: "ERROR", msg: error });
//   }
// });
