const path = require("path");

const knex = require("knex")({
    cliente: 'sqlite3',
    connection: {
        filename: path.resolve(_dirname, "database.sqlite3")
    },
    useNullAsDefalt: true,
});

module.exports = knex;