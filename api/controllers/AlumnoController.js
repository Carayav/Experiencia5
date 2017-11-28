/**
 * AlumnoController
 *
 * @description :: Server-side logic for managing alumnoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  mostrar: function (req, res) {
    Alumno.find(function foundAlumno(err, alumnos) {
      if (err) console.log(err);
      return res.view('notas', {
        alumnos: alumnos
      });
    });
},
};

