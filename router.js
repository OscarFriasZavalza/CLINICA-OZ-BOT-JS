const express = require("express");
const router = express.Router();
const app = express();
const conexion = require("./database/db");


//*MOSTRAR Pacientes al administrador, archivo pacientes1.ejs
router.get("/pacientes1", (req, res) => {
  conexion.query(
    "SELECT idPacientes,CLI_Nombre,CLI_ApPaterno,CLI_ApMaterno,CLI_Sexo,CLI_FeNac,CLI_Telefono,CLI_Correo,CLI_Colonia,CLI_Direccion,CLI_Estado,CLI_Municipio FROM cliente;",
    (error, results) => {
      if (error) {
        console.log("Error en consulta");
      } else {
        res.render("pacientes1", { results: results });
      }
    }
  );
});
//*MOSTRAR Encargados al administrador, archivo pacientes1.ejs
router.get("/encargados", (req, res) => {
    conexion.query(
      "SELECT idMedico,nombre,apellidoP,apellidoM,sexo,fechaNacimiento,telefono,correo,contra,idServicio FROM encargado;",
      (error, results) => {
        if (error) {
          console.log("Error en consulta");
        } else {
          res.render("encargados", { results: results });
        }
      }
    );
  });

//*MOSTRAR citas Privadas en Pagina citasPrivadas.ejs
router.get("/citasPrivadas", (req, res) => {
  console.log("el correo de login es " + crud.correo);
  conexion.query(
    "SELECT idCitas,nombrePaciente,apellidoPaciente,correoPaciente,idServicio,fecha FROM citas WHERE correoPaciente = ?",
    [crud.correo],
    async (error, results, fields) => {
      if (error) {
        console.log("Error en consulta mostrar citas privadas");
      } else {
        res.render("citasPrivadas", { results: results });
      }
    }
  );
});

//*MOSTRAR citas Privadas encargado
router.get("/citasPrivadasEncargado", (req, res) => {
  console.log("el correo de login es " + crud.correo);
  conexion.query(
    "SELECT idCitas,nombrePaciente,apellidoPaciente,correoPaciente,idServicio,fecha,asistio FROM citas WHERE idServicio = ?",
    [crud.idServicio],
    async (error, results, fields) => {
      if (error) {
        console.log("Error en consulta mostrar citas privadas");
      } else {
        res.render("citasPrivadasEncargado", { results: results });
      }
    }
  );
});

//*Crear paciente en crearPaciente3.ejs
router.get('/createPaciente3',(req,res)=>{
    res.render('createPaciente3')
})
//*crear paciente
router.get('/createPaciente',(req,res)=>{
    res.render('createPaciente')
})
//*crear laboratorista
router.get('/crearLaboratorista',(req,res)=>{
    res.render('crearLaboratorista')
})
//*DASH
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});
//!CREAR MED
router.get("/createMedico", (req, res) => {
  res.render("createMedico");
});
//*CREAR CITA
router.get("/crearCita", (req, res) => {
  res.render("crearCita");
});

router.get("/crearCita2", (req, res) => {
  res.render("crearCita2");
});
//*DIRECCIONAMINTOS DE EJS

//index
router.get("/index", (req, res) => {
  res.render("index");
});

router.get("/adminses", (req, res) => {
  res.render("adminses");
});
router.get("/loginEncargado", (req, res) => {
  res.render("loginEncargado");
});
//ELEC
router.get("/electrocardiograma", (req, res) => {
  res.render("electrocardiograma");
});
//lab
router.get("/laboratorio", (req, res) => {
  res.render("laboratorio");
});
//lentes
router.get("/lentes", (req, res) => {
  res.render("lentes");
});
//masto
router.get("/mastografia", (req, res) => {
  res.render("mastografia");
});
//rayos
router.get("/rayos", (req, res) => {
  res.render("rayos");
});
//rayos
router.get("/resonancia", (req, res) => {
  res.render("resonancia");
});
//tomo
router.get("/tomografia", (req, res) => {
  res.render("tomografia");
});
//ultrasonido
router.get("/ultrasonido", (req, res) => {
  res.render("ultrasonido");
});

//*EDITAR ENCARGADO
router.get("/editarLaboratorista/:idMedico", (req, res) => {
  const idMedico = req.params.idMedico;

  conexion.query(
    "SELECT * FROM encargado WHERE idMedico=?",
    [idMedico],
    (error, results) => {
      if (error) {
        console.log("Error en consulta");
      } else {
        res.render("editarLaboratorista", { encargado: results[0] });
      }
    }
  );
});
//*EDITAR CITA
router.get("/editarCita/:idCitas", (req, res) => {
  const idCitas = req.params.idCitas;

  conexion.query(
    "SELECT * FROM citas WHERE idCitas=?",
    [idCitas],
    (error, results) => {
      if (error) {
        console.log("Error en consulta");
      } else {
        res.render("editarCita", { citas: results[0] });
      }
    }
  );
});
//*EDITAR CITA desde encargado
router.get("/editarCitaEncargado/:idCitas", (req, res) => {
  const idCitas = req.params.idCitas;

  conexion.query(
    "SELECT * FROM citas WHERE idCitas=?",
    [idCitas],
    (error, results) => {
      if (error) {
        console.log("Error en consulta");
      } else {
        res.render("editarCitaEncargado", { citas: results[0] });
      }
    }
  );
});
//*ELIMINAR PACIENTE
router.get("/deletePaciente/:idPacientes", (req, res) => {
  const idPacientes = req.params.idPacientes;
  conexion.query(
    "DELETE FROM cliente WHERE idPacientes = ?",
    [idPacientes],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/pacientes1");
      }
    }
  );
});
//*ELIMINAR CITA
router.get("/deleteCita/:idCitas", (req, res) => {
  const idCitas = req.params.idCitas;
  conexion.query(
    "DELETE FROM citas WHERE idCitas = ?",
    [idCitas],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/citasPrivadas");
      }
    }
  );
});

router.get("/deleteEncargado/:idMedico", (req, res) => {
    const idMedico = req.params.idMedico;
    conexion.query(
      "DELETE FROM encargado WHERE idMedico = ?",
      [idMedico],
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          res.redirect("/encargados");
        }
      }
    );
  });
  
//!INVOCACIONES DEL METOO POST

const crud = require("./controllers/crud");
//paceinte
router.post("/save", crud.save);
router.post("/save2", crud.save2);
router.post("/update", crud.update);
//citas
router.post("/crearCita", crud.crearCita);
router.post("/saveCita", crud.saveCita);//! pendiente
router.post("/editarCita", crud.editarCita);
//Encargados
router.post("/saveEncargado", crud.saveEncargado);
router.post("/editarEncargado", crud.editarEncargado);
router.post("/editarCitaEncargado", crud.editarCitaEncargado);


//login
router.post("/auth", crud.auth);

router.post("/auth2", crud.auth2);
router.post("/authEncargado",crud.authEncargado)

module.exports = router;
