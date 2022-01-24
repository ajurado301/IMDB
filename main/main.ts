// Para test de la parte avanzada
// Clases
import { Imdb } from '../clases/imdb';
import { Movie } from '../clases/movie';
import { Professional } from '../clases/professional';
// Funciones
import { getArrayPeliculas } from './libreria';

// Importamos fs (instalado desde la terminal con 'npm install @types/node --save-dev')
import * as fs from "fs";

// Creamos un IMDB para pasarlo a fichero (con los mismos datos que usamos en "imdbMain.ts")
// Instanciar Professional
let actor1: Professional = new Professional("Charlize Theron", 46, "Femenino", 58, 177, "Rubio", "Azul", "Caucásica", false, "Sudafricana", 1, "Actriz");
let actor2: Professional = new Professional("Keanu Reeves", 57, "Masculino", 82, 186, "Negro", "Negro", "Caucásica", false, "Libanesa", 0, "Actor");
let actor3: Professional = new Professional("Uma Thurman", 51, "Femenino", 71, 180, "Rubio", "Azul", "Caucásica", false, "Estadounidense", 0, "Actriz");
let actor4: Professional = new Professional("Laurence John Fishburne", 60, "Masculino", 87, 184, "Calvo", "Negro", "Negra", false, "Estadounidense", 0, "Actor");
let actor5: Professional = new Professional("Carrie-Anne Moss", 54, "Femenino", 57, 173, "Negro", "Negro", "Caucásica", false, "Canadiense", 0, "Actriz");
let director1: Professional = new Professional("Lana Wachowski", 56, "Femenino", 70, 179, "Rojo", "Negro", "Caucásica", false, "Estadounidense", 0, "Director");
let director2: Professional = new Professional("James Cameron", 67, "Masculino", 81, 187, "Blanco", "Gris", "Caucásica", false, "Canadiense", 3, "Director");
let guionista1: Professional = new Professional("Lilly Wachowski:", 54, "Femenino", 92, 173, "Rubio", "Castaño", "Caucásica", false, "Estadounidense", 0, "Guionista");
let guionista2: Professional = new Professional("Quentin Tarantino", 58, "Masculino", 92, 185, "Marrón oscuro", "Café", "Caucásica", false, "Estadounidense", 2, "Guionista");
let productor: Professional = new Professional("Joel Silver", 69, "Masculino", 84, 175, "Negro", "Negro", "Caucásica", false, "Estadounidense", 0, "Productor");

// Instanciar Movie
let pelicula1: Movie = new Movie("Matrix", "1999", "Estadounidense");
// Añadir resto datos (directamente ya que son públicos)
pelicula1.actors = [actor2, actor4, actor5];
pelicula1.director = director1;
pelicula1.writer = guionista1;
pelicula1.language = "Inglés";
pelicula1.platform = "Cine";
pelicula1.isMCU = false;
pelicula1.mainCharacterName = "Neo";
pelicula1.producer = productor;
pelicula1.distributor = "Warner Bros"
pelicula1.genre = "Ciencia ficción";
// Instanciar Movie
let pelicula2: Movie = new Movie("Titanic", "1995", "Canadiense");
// Añadir resto datos (directamente ya que son públicos)
pelicula2.actors = [actor1, actor2, actor3];
pelicula2.director = director2;
pelicula2.writer = guionista2;
pelicula2.language = "Español";
pelicula2.platform = "Streamer";
pelicula2.isMCU = false;
pelicula2.mainCharacterName = "Jack Dawson";
pelicula2.producer = productor;
pelicula2.distributor = "20th Century Studios"
pelicula2.genre = "Histórica";
// Instanciar Movie
let pelicula3: Movie = new Movie("Spider-Man", "2005", "Inglesa");
// Añadir resto datos (directamente ya que son públicos)
pelicula3.actors = [actor1, actor3, actor5];
pelicula3.director = director1;
pelicula3.writer = guionista2;
pelicula3.language = "Alemán";
pelicula3.platform = "TV";
pelicula3.isMCU = true;
pelicula3.mainCharacterName = "Piter Parker";
pelicula3.producer = productor;
pelicula3.distributor = "Marbel Studios"
pelicula3.genre = "Superhéroes";

// Crear array de peliculas
let arrayPeliculas: Movie[] = [pelicula1, pelicula2, pelicula3];

// Instanciar Isdb con tres películas como punto de partida
let imdb: Imdb = new Imdb(arrayPeliculas);

// Convertir objeto imdb en string y guardar fichero
escribirEnFicheroJSON("imdbBBDD.json")


// Leemos el fichero
let cadenaJSON = fs.readFileSync(nombreArchivo).toString();
// TODO: ¿Como asignar el resultado a la instancia sin perder métodos de sus atributos? lo comentado abajo no funciona
// imdb = JSON.parse(cadenaJSON);
// console.log(imdb.peliculas[0].printMovie());


// PRUEBAS: obtener nuevo objeto Imdb a partir del JSON asegurando los métodos
let json: Imdb = JSON.parse(cadenaJSON);  // creamos json a partir de los datos leídos y de tipo Imdb para obtener su interface

// Creamos una nueva instancia de Imdb sin películas
let nuevoImdb = new Imdb([]);

// Obtenemos las películas con getArrayPeliculas a partir de json (función importada de libreria.ts)
nuevoImdb.peliculas = getArrayPeliculas(json);

// Mostrar peliculas de la nueva instancia nuevoImdb (creando así la nueva instancia los métodos de las clases funcionan)
nuevoImdb.peliculas.forEach((pelicula) => {
    pelicula.printMovie();
});
function escribirEnFicheroJSON(arg0: string) {
    throw new Error('Function not implemented.');
}

