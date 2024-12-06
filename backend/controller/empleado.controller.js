import { modeloEmpleados } from "../model/empleados.model.js";

modeloEmpleados.create({
    name:"Daniel",
    appat:"Lopez",
    noEmpleado:2001,
    
},
{
    name:"Vanesa",
    appat:"Hernandez",
    noEmpleado:2424,
},
{
    name:"salma",
    appat:"tapia",
    noEmpleado:2158,
}
)

export const test=()=>{
    console.log("Si funciona el controlador")
}