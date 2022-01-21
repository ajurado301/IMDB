import { Movie } from './movie';

// Clase Imdb
export class Imdb {

    // Atributos públicos
    public peliculas: Movie[];

    // Constructor
    constructor(peliculas: Movie[]) {
        this.peliculas = peliculas;
    }
}
