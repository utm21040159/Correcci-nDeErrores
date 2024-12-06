import { model, Schema } from "mongoose";

const SchemaClientes = new Schema ({
    name:{
        type:String
    },

    appat:{
        type:String
        
    },

    edad:{
        type:Number
    }

})

export const modeloCliente = new model ("Clientes", SchemaClientes)