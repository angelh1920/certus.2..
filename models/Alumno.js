const mongoose = require ('mongoose');

const alumnoSchema = new mongoose.Schema({
    nombres : {type : String, require : true },
    apellido: {type : String, require : true },
    edad : {type : Number, require : true },
    genero : {type : String, require : true },
    carrera : {type :  String, require : true },
    comentarios : {type : String }

    },{
        timestamps: true 

});

module.exports = mongoose.model('Alumno' , alumnoSchema, 'alumnos');
