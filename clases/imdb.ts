import { Movie } from './movie';
import { getArrayPeliculas } from '../main/libreria';

// Importamos fs (instalado desde la terminal con 'npm install @types/node --save-dev')
import * as fs from "fs";

// Ruta a la carpeta de ficheros bbdd
const path: string = "../bbdd/"

// Clase Imdb
export class Imdb {

    // Atributos públicos
    public peliculas: Movie[];

    // Constructor
    constructor(peliculas: Movie[]) {
        this.peliculas = peliculas;
    }

    //métodos
    public escribirEnFicheroJSON(nombreFichero:string) {
        let cadenaJSON: string = JSON.stringify(this);
        fs.writeFileSync(path + nombreFichero, cadenaJSON);
    }

    // método estático que devuelve una instancia Imdb leido del archivo json especificado
    public static obtenerInstanciaIMDB(nombreFichero: string): Imdb {
        let cadenaJSON: string = fs.readFileSync(path + nombreFichero).toString();
        let json: Imdb = JSON.parse(cadenaJSON);
        return new Imdb(getArrayPeliculas(json));
    }
}
