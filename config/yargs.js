const argv = require('yargs').command('crear','Crea una nueva tarea en la lista de cosas por hacer',
{
    descripcion: {
        demand: true,
        alias: 'd'
                }
}).command('actualizar', 'Actualiza el estado completado de una tarea',{
    descripcion:{
        demand: true,
        alias: 'd',
    },
    completado: {
        alias: 'c',
        desc: "Marca como completado o pendiente la tarea"
    }
}).command('borrar', 'Elimina una tarea de la lista',{
    descripcion: {
        demand: true,
        alias: 'd',
        desc: "Metodo para eliminar una tarea de la lista de cosas por hacer"
    }
})

.help().argv;
            

module.exports = {
    argv
}
