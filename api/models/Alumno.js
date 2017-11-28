/**
 * Alumno.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: 'true'
    },

    apellido: {
      type: 'string',
      required: 'true'
    },
    edad: {
      type: 'integer',
      required: 'true',
      min: '0'
    },
    promedio: {
      type: 'float',
      required: 'true',
      min: '1.0',
      max: '7.0'
    }
  }
};

