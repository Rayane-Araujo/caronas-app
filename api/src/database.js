const path = require("path");

const knex = require("knex")({
    cliente: 'sqlite3',
    connection: {
        filename: path.resolve(_dirname, "caronasappdatabase.sqlite3")
    },
    useNullAsDefalt: true,
});

module.exports = knex;