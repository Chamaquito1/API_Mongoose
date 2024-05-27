import { Timestamp } from "bson";
import mongoose from "mongoose"; // primero importar la bd

const ArticleSchema = new mongoose.Schema ({ //importando un esquema (que es el PLANO), donde se le dice que propiedades debe de tener
    title: {
        type: String, 
        type: String, require: true, //es requerido
    },
    description: {
        type: String, // no es requerido
    },
    content: {
        type: String, 
        type: String, require: true, //es requerido
    }
}, {timestamps : true}) // que agregue los timestamps

const ArticleModel = mongoose.model("Article", ArticleSchema);
export default ArticleModel //crea un modelo que es la instancea del PLANO, que haga acciones ya teniendo el esquema