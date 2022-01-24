import { Professional } from '../../../IMDB.borrar/clases/professional';
import { Imdb } from '../clases/imdb';
import { Movie } from '../clases/movie';

// Devuelve array de peliculas a partir del JSON recibido
export function getArrayPeliculas(json: Imdb): Movie[] {
    let arrayPeliculas: Movie[] = [];    
    // Iteramos el JSON para crear nuevas instancias de Movie y las añadimos a arrayPeliculas
    for(let pelicula of json.peliculas){
        let peliculaAux: Movie = new Movie(pelicula.title, pelicula.releaseYear, pelicula.nationality);
        pelicula.actors.forEach((actor) => {
            peliculaAux.actors.push(nuevoProfesional(actor));
        });
        peliculaAux.director = nuevoProfesional(pelicula.director);
        peliculaAux.writer = nuevoProfesional(pelicula.writer);
        peliculaAux.producer = nuevoProfesional(pelicula.producer);
        peliculaAux.language = pelicula.language;
        peliculaAux.platform = pelicula.platform;
        peliculaAux.isMCU = pelicula.isMCU;
        peliculaAux.mainCharacterName = pelicula.mainCharacterName;
        peliculaAux.genre = pelicula.genre;
        arrayPeliculas.push(peliculaAux);
    };
    return arrayPeliculas;
}

// Devuelve una nueva instancia de Profesional creada a partir datos en formato JSON
function nuevoProfesional(professional: Professional): Professional {
    return new Professional(professional.name,
                            professional.age,
                            professional.genre,
                            professional.weight,
                            professional.height,
                            professional.hairColor,
                            professional.eyeColor,
                            professional.race,
                            professional.isRetired,
                            professional.nationality,
                            professional.oscarsNumber,
                            professional.profession);
}