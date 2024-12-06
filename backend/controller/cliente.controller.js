import test from "node:test";
//Faltaba la ruta de la importacion
import { modeloCliente } from "../model/clientes.model.js";

modeloCliente.create({
    name:"Daniel",
    appat:"Lopez",
    edad:21,
    
},
{
    name:"Vanesa",
    appat:"Hernandez",
    edad:24,
},
{
    name:"salma",
    appat:"tapia",
    edad:21,
}
)

export const test=()=>{
    console.log("Si funciona el controlador")
}