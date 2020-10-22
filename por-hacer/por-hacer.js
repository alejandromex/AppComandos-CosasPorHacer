const fs = require('fs');
const { isRegExp } = require('util');


let listadoPorhacer = [];

const crear = (descripcion) => {

    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorhacer.push(porHacer);
    guardarDb();
    return porHacer;
}

const guardarDb = () =>{
    let data = JSON.stringify(listadoPorhacer);
    fs.writeFile('db/data.json',data,(err)=>{
        if(err)
        {
            throw new Error("No se pudo grabar");
        }
    });
}

const cargarDb = () =>{
    try{
        listadoPorhacer = require('../db/data.json');
    }
    catch(error){
        listadoPorhacer = [];
    }
}

const getListado = () =>{
    cargarDb();
    return listadoPorhacer;
}

const actualizar = (descripcion, completado) => {
    cargarDb();
    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index != -1)
    {
        listadoPorhacer[index].completado = completado;
        guardarDb();
        return true;
    }
    else{
        return false;
    }


}

const borrar = (descripcion) =>{
    cargarDb();
    let nuevoListado = listadoPorhacer.filter( tarea => {
        return tarea.descripcion != descripcion;
    });

    if(nuevoListado.length == listadoPorhacer.length)
    {
        return false;
    }
    if(nuevoListado.length != listadoPorhacer.length)
    {
        listadoPorhacer = nuevoListado;
        guardarDb();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}