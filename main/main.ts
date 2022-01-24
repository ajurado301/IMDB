// Para test de la parte avanzada
// Clases
import { Imdb } from '../clases/imdb';
import { Movie } from '../clases/movie';
import { Professional } from '../clases/professional';

// Importar módulo node para peticiones síncronas por consola (instalado con npm install prompt-sync)
const prompt = require('prompt-sync')();

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
let pelicula1: Movie = new Movie("Matrix", 1999, "Estadounidense");
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
let pelicula2: Movie = new Movie("Titanic", 1995, "Canadiense");
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
let pelicula3: Movie = new Movie("Spider-Man", 2005, "Inglesa");
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

// Instanciar Imdb con tres películas como punto de partida
let imdb: Imdb = new Imdb(arrayPeliculas);

// invocar método para guardar a fichero json
imdb.escribirEnFicheroJSON("imdbBBDD.json");

// invocar método para crear intancia Imdb a partir de un fichero
let nuevoImdb: Imdb = Imdb.obtenerInstanciaIMDB("imdbBBDD.json");

// Mostrar peliculas de la nueva instancia nuevoImdb (creando así la nueva instancia los métodos de las clases funcionan)
nuevoImdb.peliculas.forEach((pelicula) => {
    pelicula.printMovie();
});

// Pedir datos (solo tipo primitivo) de una película para añadirla al array de películas del objeto nuevoImdb
// Crear un objeto para pedir los datos por consola. (¿Quizás se debería crear una interface?)
let datosPelicula = {
    title: "",
    releaseYear: "",
    nationality: "",
    language: "",
    platform: "",
    isMCU: "",
    mainCharacterName: "",
    distributor: "",
    genre: ""
};

console.log("\nIntroduce los datos de la nueva película:\n");
// title
let invalido: boolean = true;
while (invalido) {
    datosPelicula.title = prompt("Introduce el título: ");
    if (datosPelicula.title.length == 0) {
        console.log("Este dato es obligatorio...\n");
    }else {
        console.log();
        invalido = false;
    };
};
// releaseYear
invalido = true;
while (invalido) {
    datosPelicula.releaseYear = prompt("Introduce el año de lanzamiento: ");
    if (isNaN(parseInt(datosPelicula.releaseYear))) {
        console.log("Debes introducir un número...\n");
    }else {
        console.log();
        invalido = false;
    };
};
// nationality
invalido = true;
while (invalido) {
    datosPelicula.nationality = prompt("Introduce la nacionalidad: ");
    if (datosPelicula.nationality.length == 0) {
        console.log("Este dato es obligatorio...\n");
    }else {
        console.log();
        invalido = false;
    };
};
// language
invalido = true;
while (invalido) {
    datosPelicula.language = prompt("Introduce el idioma: ");
    if (datosPelicula.language.length == 0) {
        console.log("Este dato es obligatorio...\n");
    }else {
        console.log();
        invalido = false;
    };
};
// platform
invalido = true;
while (invalido) {
    datosPelicula.platform = prompt("Introduce la plataforma: ");
    if (datosPelicula.platform.length == 0) {
        console.log("Este dato es obligatorio...\n");
    }else {
        console.log();
        invalido = false;
    };
};
// isMCU
invalido = true;
while (invalido) {
    datosPelicula.isMCU = prompt("Introduce si pertenece a Marvel (s/n): ");
    if (datosPelicula.isMCU.length == 0 || (datosPelicula.isMCU.toLowerCase() != "s" && datosPelicula.isMCU.toLowerCase() != "n")) {
        console.log("Este dato es obligatorio...\n");
    }else {
        console.log();
        invalido = false;
    };
};
// mainCharacterName
invalido = true;
while (invalido) {
    datosPelicula.mainCharacterName = prompt("Introduce el nombre del personaje principal: ");
    if (datosPelicula.mainCharacterName.length == 0) {
        console.log("Este dato es obligatorio...\n");
    }else {
        console.log();
        invalido = false;
    };
};
// distributor
invalido = true;
while (invalido) {
    datosPelicula.distributor = prompt("Introduce el nombre del distribuidor: ");
    if (datosPelicula.distributor.length == 0) {
        console.log("Este dato es obligatorio...\n");
    }else {
        console.log();
        invalido = false;
    };
};
// genre
invalido = true;
while (invalido) {
    datosPelicula.genre = prompt("Introduce el género de la película: ");
    if (datosPelicula.genre.length == 0) {
        console.log("Este dato es obligatorio...\n");
    }else {
        console.log();
        invalido = false;
    };
};

// Creamos una nueva película con los datos introducios y profesionales reutilizados
let nuevaPelicula: Movie = new Movie(datosPelicula.title, parseInt(datosPelicula.releaseYear), datosPelicula.nationality);
nuevaPelicula.language = datosPelicula.language;
nuevaPelicula.platform = datosPelicula.platform;
nuevaPelicula.isMCU = (datosPelicula.isMCU == "s") ? true : false;
nuevaPelicula.mainCharacterName = datosPelicula. mainCharacterName;
nuevaPelicula.distributor = datosPelicula. distributor;
nuevaPelicula.genre = datosPelicula.genre;
nuevaPelicula.actors = [actor2, actor4, actor5];
nuevaPelicula.director = director2;
nuevaPelicula.writer = guionista2;
nuevaPelicula.producer = productor;

// Añadimos la pelicula a la base de datos
nuevoImdb.peliculas.push(nuevaPelicula);

// Lo guardamos en disco
nuevoImdb.escribirEnFicheroJSON("imdbBBDD.json");
