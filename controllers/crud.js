const conexion = require("../database/db");
const bcrypt = require("bcryptjs");

//*FUNCIONES DEL CLIENTE///////////////////////////////////////////////////////////////////////////

//!GUARDAR DATOS DE CLIENTE
exports.save = async (req, res) => {
  const nombre = req.body.nombre;
  const apellidoP = req.body.apellidoP;
  const apellidoM = req.body.apellidoM;
  const sexo = req.body.sexo;
  const fechaNac = req.body.fechaNac;
  const telefono = req.body.telefono;
  const correo = req.body.correo;
  const CLI_Contra = req.body.CLI_Contra;
  const servicio = req.body.servicio;
  const colonia = req.body.colonia;
  const cd = req.body.cd;
  const direccion = req.body.direccion;
  const municipio = req.body.municipio;
  const estado = req.body.estado;
  const pais = req.body.pais;

  conexion.query(
    "INSERT INTO cliente SET ?",
    {
      CLI_Nombre: nombre,
      CLI_ApPaterno: apellidoP,
      CLI_ApMaterno: apellidoM,
      CLI_Sexo: sexo,
      CLI_FeNac: fechaNac,
      CLI_Telefono: telefono,
      CLI_Correo: correo,
      CLI_Contra: CLI_Contra,
      idServicio: servicio,
      CLI_Colonia: colonia,
      CLI_CP: cd,
      CLI_Direccion: direccion,
      CLI_Municipio: municipio,
      CLI_Estado: estado,
      CLI_Pais: pais,
    },
    async (error, results) => {
      if (error) {
        console.log("hubo un erro" + error);
      } else {
        res.render("createPaciente", {
          alert: true,
          alertTitle: "Registration",
          alertMessage: "¡Successful Registration!",
          alertIcon: "success",
          showConfirmButton: false,
          timer: 4000,
          ruta: "pacientes",
        });
      }
    }
  );
};
//*Crear Paciente archivo CrearPaciente3.ejs
exports.save2 = async (req, res) => {
  const nombre = req.body.nombre;
  const apellidoP = req.body.apellidoP;
  const apellidoM = req.body.apellidoM;
  const sexo = req.body.sexo;
  const fechaNac = req.body.fechaNac;
  const telefono = req.body.telefono;
  const correo = req.body.correo;
  const CLI_Contra = req.body.CLI_Contra;
  const colonia = req.body.colonia;
  const cd = req.body.cd;
  const direccion = req.body.direccion;
  const municipio = req.body.municipio;
  const estado = req.body.estado;
  const pais = req.body.pais;

  conexion.query(
    "INSERT INTO cliente SET ?",
    {
      CLI_Nombre: nombre,
      CLI_ApPaterno: apellidoP,
      CLI_ApMaterno: apellidoM,
      CLI_Sexo: sexo,
      CLI_FeNac: fechaNac,
      CLI_Telefono: telefono,
      CLI_Correo: correo,
      CLI_Contra: CLI_Contra,
      CLI_Colonia: colonia,
      CLI_CP: cd,
      CLI_Direccion: direccion,
      CLI_Municipio: municipio,
      CLI_Estado: estado,
      CLI_Pais: pais,
    },
    async (error, results) => {
      if (error) {
        console.log("hubo un erro" + error);
      } else {
        res.render("createPaciente", {
          alert: true,
          alertTitle: "Registration",
          alertMessage: "¡Successful Registration!",
          alertIcon: "success",
          showConfirmButton: false,
          timer: 4000,
          ruta: "./index",
        });
      }
    }
  );
};

//*Crear Laboratorista archivo crearLaboratorista.ejs
exports.saveEncargado = async (req, res) => {
  const nombre = req.body.nombre;
  const apellidoP = req.body.apellidoP;
  const apellidoM = req.body.apellidoM;
  const sexo = req.body.sexo;
  const fechaNacimiento = req.body.fechaNacimiento;
  const telefono = req.body.telefono;
  const correo = req.body.correo;
  const contra = req.body.contra;
  const idServicio = req.body.idServicio;

  conexion.query(
    "INSERT INTO encargado SET ?",
    {
      nombre: nombre,
      apellidoP: apellidoP,
      apellidoM: apellidoM,
      sexo: sexo,
      fechaNacimiento: fechaNacimiento,
      telefono: telefono,
      correo: correo,
      contra: contra,
      idServicio: idServicio,
    },
    async (error, results) => {
      if (error) {
        console.log("hubo un erro" + error);
      } else {
        res.render("crearLaboratorista", {
          alert: true,
          alertTitle: "Registration",
          alertMessage: "¡Successful Registration!",
          alertIcon: "success",
          showConfirmButton: false,
          timer: 4000,
          ruta: "./encargados",
        });
      }
    }
  );
};
//!EDITAR DATOS DE PACIENTES
//////GUARDAR CITA
exports.saveCita = (req, res) => {
  const nombrePaciente = req.body.nombrePaciente;
  const apellidoPaciente = req.body.apellidoPaciente;
  const correoPaciente = req.body.correoPaciente;
  const nombreTitular = req.body.nombreTitular;
  const numTarjeta = req.body.numTarjeta;
  const fechaExpiracion = req.body.fechaExpiracion;
  const cvv = req.body.cvv;

  conexion.query(
    "INSERT INTO citas SET ?",
    {
      nombrePaciente: nombrePaciente,
      apellidoPaciente: apellidoPaciente,
      correoPaciente: correoPaciente,
      nombreTitular: nombreTitular,
      numTarjeta: numTarjeta,
      fechaExpiracion: fechaExpiracion,
      cvv: cvv,
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/citas");
      }
    }
  );
};
//*SE CREA LA CITA QUE HACEMOS EN crearCita.ejs
exports.crearCita = (req, res) => {
  const nombrePaciente = req.body.nombrePaciente;
  const apellidoPaciente = req.body.apellidoPaciente;
  const correoPaciente = req.body.correoPaciente;
  const idServicio = req.body.idServicio;
  conexion.query(
    "INSERT INTO citas SET ?",
    {
      nombrePaciente: nombrePaciente,
      apellidoPaciente: apellidoPaciente,
      correoPaciente: correoPaciente,
      idServicio: idServicio,
      fecha: "Se le definira en 3 dias habiles ",
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log("El correo que se inserto es para : " + correoPaciente);
        res.redirect("/citasPrivadas");
      }
    }
  );
};
//*ACTUALIZAR un CITAS
exports.editarCita = (req, res) => {
  const idCitas = req.body.idCitas;
  const nombrePaciente = req.body.nombrePaciente;
  const apellidoPaciente = req.body.apellidoPaciente;
  const correoPaciente = req.body.correoPaciente;
  const idServicio = req.body.idServicio;
  console.log(correoPaciente);

  conexion.query(
    "UPDATE citas SET ? WHERE idCitas = ?",
    [
      {
        nombrePaciente: nombrePaciente,
        apellidoPaciente: apellidoPaciente,
        correoPaciente: correoPaciente,
        idServicio: idServicio,
      },
      idCitas,
    ],
    (error, results) => {
      if (error) {
        console.log("ERRRO EN EDITAR" + error);
      } else {
        console.log(idCitas);
        console.log(nombrePaciente);
        console.log(apellidoPaciente);
        res.redirect("/citasPrivadas");
      }
    }
  );
};

//*editar un CITAS desde encargado
exports.editarCitaEncargado = (req, res) => {
  const idCitas = req.body.idCitas;
  const nombrePaciente = req.body.nombrePaciente;
  const apellidoPaciente = req.body.apellidoPaciente;
  const correoPaciente = req.body.correoPaciente;
  const fecha = req.body.fecha;
  const asistio = req.body.asistio;
  console.log(`CORREO ${correoPaciente}, asistio = ${asistio}`);

  conexion.query(
    "UPDATE citas SET ? WHERE idCitas = ?",
    [
      {
        nombrePaciente: nombrePaciente,
        apellidoPaciente: apellidoPaciente,
        correoPaciente: correoPaciente,
        fecha: fecha,
        asistio: asistio,
      },
      idCitas,
    ],
    (error, results) => {
      if (error) {
        console.log("ERRRO EN EDITAR" + error);
      } else {
        console.log(idCitas);
        console.log(nombrePaciente);
        console.log(apellidoPaciente);
        console.log(fecha);
        res.redirect("/citasPrivadasEncargado");
      }
    }
  );
};

//*editar Laboratorista archivo editarLaboratorista.ejs
exports.editarEncargado = async (req, res) => {
  const idMedico = req.body.idMedico;
  const nombre = req.body.nombre;
  const apellidoP = req.body.apellidoP;
  const apellidoM = req.body.apellidoM;
  const sexo = req.body.sexo;
  const fechaNacimiento = req.body.fechaNacimiento;
  const telefono = req.body.telefono;
  const correo = req.body.correo;
  const contra = req.body.contra;
  const idServicio = req.body.idServicio;

  console.log(`laboratorista ${idMedico}`);

  conexion.query(
    "UPDATE encargado SET ? WHERE idMedico = ?",
    [
      {
        nombre: nombre,
        apellidoP: apellidoP,
        apellidoM: apellidoM,
        sexo: sexo,
        fechaNacimiento: fechaNacimiento,
        telefono: telefono,
        correo: correo,
        contra: contra,
        idServicio: idServicio,
      },
      idMedico,
    ],
    async (error, results) => {
      if (error) {
        console.log("hubo un erro" + error);
      } else {
        res.render("crearLaboratorista", {
          alert: true,
          alertTitle: "Registration",
          alertMessage: "¡Successful Registration!",
          alertIcon: "success",
          showConfirmButton: false,
          timer: 4000,
          ruta: "./encargados",
        });
      }
    }
  );
};
//ACTUALIZAR un REGISTRO
exports.update = (req, res) => {
  const id = req.body.idclientes;
  const nombre = req.body.nombre;
  const apellidoP = req.body.apellidoP;
  const apellidoM = req.body.apellidoM;
  const sexo = req.body.sexo;
  //const fechaNac=req.body.fechaNac;
  const telefono = req.body.telefono;
  const correo = req.body.correo;
  const servicio = req.body.servicio;
  const colonia = req.body.colonia;
  const cd = req.body.cd;
  const direccion = req.body.direccion;
  const municipio = req.body.municipio;
  const estado = req.body.estado;
  const pais = req.body.pais;

  conexion.query(
    "UPDATE cliente SET ? WHERE idclientes = ?",
    [
      {
        CLI_Nombre: nombre,
        CLI_ApPaterno: apellidoP,
        CLI_ApMaterno: apellidoM,
        CLI_Sexo: sexo,
        // CLI_FeNac:fechaNac,
        CLI_Telefono: telefono,
        CLI_Correo: correo,
        idServicio: servicio,
        CLI_Colonia: colonia,
        CLI_CP: cd,
        CLI_Direccion: direccion,
        CLI_Municipio: municipio,
        CLI_Estado: estado,
        CLI_Pais: pais,
      },
      id,
    ],
    (error, results) => {
      if (error) {
        console.log("ERRRO EN EDITAR" + error);
      } else {
        console.log("actualizacion correcta");
        res.redirect("/pacientes");
      }
    }
  );
};
//*OPERACIONES DEL ENCARGADO DE LABORATORIO
//GUARDAR DATOS DE ENCARGADO DE LABORATORIO
exports.savemedico = (req, res) => {
  const nombre = req.body.nombre;
  const apellidoP = req.body.apellidoP;
  const apellidoM = req.body.apellidoM;
  const sexo = req.body.sexo;
  const fechaNac = req.body.fechaNac;
  const telefono = req.body.telefono;
  const correo = req.body.correo;

  conexion.query(
    "INSERT INTO Medicos SET ?",
    {
      MED_Nombre: nombre,
      MED_ApellidoP: apellidoP,
      MED_ApellidoM: apellidoM,
      MED_Sexo: sexo,
      MED_FechaNac: fechaNac,
      MED_Telefono: telefono,
      MED_Correo: correo,
    },
    (error, results) => {
      if (error) {
        console.log("hubo un error" + error);
      } else {
        res.redirect("/medicos");
      }
    }
  );
};

//* LOGIN DEL CLIENTE
exports.auth = async (req, res) => {
  const CLI_Correo = req.body.CLI_Correo;
  const CLI_Contra = req.body.CLI_Contra;

  if (CLI_Correo && CLI_Contra) {
    conexion.query(
      "SELECT * FROM cliente WHERE CLI_Correo = ?",
      [CLI_Correo],
      async (error, results, fields) => {
        if (results.length == 0 || CLI_Contra != results[0].CLI_Contra) {
          res.render("index", {
            alert: true,
            alertTitle: "Error",
            alertMessage: "USUARIO y/o PASSWORD incorrectas",
            alertIcon: "error",
            showConfirmButton: true,
            timer: false,
            ruta: "index",
          });

          //Mensaje simple y poco vistoso
          //res.send('Incorrect Username and/or Password!');
        } else {
          //creamos una var de session y le asignamos true si INICIO SESSION
          exports.correo = CLI_Correo;
          res.render("index", {
            alert: true,
            alertTitle: "Conexión exitosa",
            alertMessage: "¡LOGIN CORRECTO!",
            alertIcon: "success",
            showConfirmButton: false,
            timer: 1500,
            ruta: "citasPrivadas",
          });
        }
        res.end();
      }
    );
  } else {
    res.send("Please enter user and Password!");
    res.end();
  }
};

//* LOGIN DEL encargado de laboratorio
exports.authEncargado = async (req, res) => {
  const correo = req.body.correo;
  const contra = req.body.contra;
  const idServicio = req.body.idServicio;
  console.log(`corre ${correo} contraseña ${contra} servicios ${idServicio}`);

  if (correo && contra) {
    conexion.query(
      "SELECT * FROM encargado WHERE correo = ?",
      [correo],
      async (error, results, fields) => {
        if (results.length == 0 || contra != results[0].contra) {
          res.render("index", {
            alert: true,
            alertTitle: "Error",
            alertMessage: "USUARIO y/o PASSWORD incorrectas",
            alertIcon: "error",
            showConfirmButton: true,
            timer: false,
            ruta: "index",
          });

          //Mensaje simple y poco vistoso
          //res.send('Incorrect Username and/or Password!');
        } else {
          //creamos una var de session y le asignamos true si INICIO SESSION
          exports.idServicio = idServicio;
          res.render("index", {
            alert: true,
            alertTitle: "Conexión exitosa",
            alertMessage: "¡LOGIN CORRECTO!",
            alertIcon: "success",
            showConfirmButton: false,
            timer: 1500,
            ruta: "citasPrivadasEncargado",
          });
        }
        res.end();
      }
    );
  } else {
    res.send("Please enter user and Password!");
    res.end();
  }
};

//*FUNCIONES DE ADMINISTRADOR
//* LOGIN ADMIN
exports.auth2 = async (req, res) => {
  const AD_Correo = req.body.AD_Correo;
  const AD_Pass = req.body.AD_Pass;

  console.log(AD_Correo);
  if (AD_Correo && AD_Pass) {
    conexion.query(
      "SELECT * FROM admin WHERE AD_Correo = ?",
      [AD_Correo],
      async (error, results, fields) => {
        if (results.length == 0 || AD_Pass != results[0].AD_Pass) {
          res.render("index", {
            alert: true,
            alertTitle: "Error",
            alertMessage: "USUARIO y/o PASSWORD incorrectas",
            alertIcon: "error",
            showConfirmButton: true,
            timer: false,
            ruta: "index",
          });

          //Mensaje simple y poco vistoso
          //res.send('Incorrect Username and/or Password!');
        } else {
          //creamos una var de session y le asignamos true si INICIO SESSION

          res.render("index", {
            alert: true,
            alertTitle: "Conexión exitosa",
            alertMessage: "¡LOGIN CORRECTO!",
            alertIcon: "success",
            showConfirmButton: false,
            timer: 1500,
            ruta: "dashboard",
          });
        }
        res.end();
      }
    );
  } else {
    res.send("Please enter user and Password!");
    res.end();
  }
};
//////////////
