
import { modeloProductos } from "../model/producto.model.js";

modeloProductos.create({
    name:"Pasta",
    precio:20,
    descripcion:"Esta buena"
},
{
    // Faltaba agregar el atributo precio
    name:"Moto",
    precio:20000,
    descripcion:"Moto italika"
},
{
    name:"Xbox",
    precio:10000,
    descripcion:"Juega todo lo que quieras"
}
)


// Flataba Funcion Flecha 
export const test=()=>{
    console.log("Si funciona el controlador")
}