// Para test de la clase Movie
import { Movie } from '../clases/movie';
import { Professional } from '../clases/professional';

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

// Crear array de actores
let arrayActores: Professional[] = [actor2, actor4, actor5];

// Instanciar Movie
let pelicula1: Movie = new Movie("Matrix", 1999, "Estadounidense");

// Añadir resto datos (directamente ya que son públicos)
pelicula1.actors = arrayActores;
pelicula1.director = director1;
pelicula1.writer = guionista1;
pelicula1.language = "Inglés";
pelicula1.platform = "Cine";
pelicula1.isMCU = false;
pelicula1.mainCharacterName = "Neo";
pelicula1.producer = productor;
pelicula1.distributor = "Warner Bros"
pelicula1.genre = "Ciencia ficción";

pelicula1.printMovie();