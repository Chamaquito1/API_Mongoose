import mongoose from "mongoose"; // importando la libreria para la bd de moongose
 
export default function connectDB() { //
  const url = "mongodb://127.0.0.1/blog_db"; //url de donde se encuentra la bd
 
  try {
    mongoose.connect(url); //para que se conecte a la bd por la url
  } catch (err) {
    console.error(err.message);
    process.exit(1); // si no encuentra la bd se va a cerrar
  }
  const dbConnection = mongoose.connection; // una vez que se haya coectado a la bd haga esto:
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });
 
  dbConnection.on("error", (err) => { // sino se conecto o hubo un error haz esto
    console.error(`connection error: ${err}`);
  });
  return;
}