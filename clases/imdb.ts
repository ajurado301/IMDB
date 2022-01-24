import { Movie } from './movie';
import * as fs from "fs";


// Clase Imdb
export class Imdb {

    // Atributos públicos
    public peliculas: Movie[];

    // Constructor
    constructor(peliculas: Movie[]) {
        this.peliculas = peliculas;
    }

    //métodos
    escribirEnFicheroJSON(nombreFichero:string) {
    let cadenaJSON: string = JSON.stringify(this);
    fs.writeFileSync("../bbdd/" + nombreFichero, cadenaJSON);
    }

}
