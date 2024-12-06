import { model, Schema } from "mongoose";


const SchemaProductos = new Schema ({
    name:{
        type:String
    },

    precio:{
        type:Number
    },

    descrpcion:{
        type:String
    }

})

// Flataba el Nombre del schema 
export const modeloProductos = new model ("Productos", SchemaProductos)