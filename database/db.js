const msql = require("mysql2");

const conexion = msql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "b30e092629424a",
  password: "42388474",
  database: "heroku_a494ae218faea4b",
});

conexion.connect((error) => {
  if (error) {
    console.log("error base de datos " + error);
    return;
  }
  console.log("exito base de datos");
});

module.exports = conexion;
