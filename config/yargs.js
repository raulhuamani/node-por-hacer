const descripcion = {
    demand: true, // Indica que este parametro base es obligatorio
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea por hacer', {
        descripcion
    })
    .help() // Configuramos el Help
    .argv; // Regresamos el argv


module.exports = {
    argv
}