const express = require("express");
const app = express();
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", require("./router"));

app.use(express.static(__dirname + "/assets"));

//VARIABLES DE SESION
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.listen(process.env.PORT || 5500, () => {
  console.log("servidor corriendo correctamente" );
});
