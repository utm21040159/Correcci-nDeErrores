
//Flataba la importacion
import { model, Schema } from "mongoose";

const SchemaEmpleados = new Schema ({
    name:{
        type:String
    },

    appat:{
        type:String
        
    },

    noEmpleado:{
        type:Number
    }

})


//Faltaba Exportalo
export const modeloEmpleados = new model ("Empleados", SchemaEmpleados)