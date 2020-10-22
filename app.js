const { argv } = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
const { boolean } = require('yargs');


let comando = argv._[0];

switch(comando)
{
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;
    case 'listar':
        let listado = porHacer.getListado();
        for(let tarea of listado)
        {
            console.log("====Por hacer====".green);
            console.log(tarea.descripcion);
            if(tarea.completado)
            {
                console.log("Estado: ".green, tarea.completado);
            }
            else{
                console.log("Estado: ".red, tarea.completado);
            }
            console.log("===================".green);
        }
    break;

    case 'actualizar':
        let estado = false;
        if(argv.completado == 'true') estado = true;
        else estado = false;
        let actualizado = porHacer.actualizar(argv.descripcion, estado);
        console.log(actualizado);
    break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log("Comando no reconocido");
    break;
}

