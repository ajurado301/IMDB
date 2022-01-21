// Para test de la clase Professional
import { Professional } from '../clases/professional';

// Instanciar Professiona
let profesional1: Professional = new Professional("Nombre provisional", 50, "Genero provisonal", 60, 150, "Verde", "Marron", "Malaya", true, "Española", 0, "Actor");
let profesional2: Professional = new Professional("Keanu Reeves", 57, "Masculino", 82, 186, "Negro", "Negro", "Caucásica", false, "Libanesa", 0, "Actor");
let profesional3: Professional = new Professional("Uma Thurman", 51, "Femenino", 71, 180, "Rubio", "Azul", "Caucásica", false, "Estadounidense", 0, "Actriz");
let profesional4: Professional = new Professional("James Cameron", 67, "Masculino", 81, 187, "Blanco", "Gris", "Caucásica", false, "Canadiense", 3, "Director");
let profesional5: Professional = new Professional("Quentin Tarantino", 58, "Masculino", 92, 185, "Marrón oscuro", "Café", "Caucásica", false, "Estadounidense", 2, "Guionista");
let profesional6: Professional = new Professional("Joel Silver", 69, "Masculino", 84, 175, "Negro", "Negro", "Caucásica", false, "Estadounidense", 0, "Productor");

// Probar getters y setters con profesional1
// getters
console.log("Valores actuales de profesional1 mostrados con getters:");
console.log("Nombre       :", profesional1.getName());
console.log("Edad         :", profesional1.getAge());
console.log("Genero       :", profesional1.getGenre());
console.log("Peso         :", profesional1.getWeight());
console.log("Altura       :", profesional1.getHeight());
console.log("Color de pelo:", profesional1.getHairColor());
console.log("Color de ojos:", profesional1.getEyeColor());
console.log("Raza         :", profesional1.getRace());
console.log("Retirado?    :", profesional1.getIsRetired());
console.log("Nacionalidad :", profesional1.getNationality());
console.log("Nº de Oscars :", profesional1.getOscarsNumber());
console.log("Profesión    :", profesional1.getProfession());
// setters
profesional1.setName("Charlize Theron");
profesional1.setAge(46);
profesional1.setGenre("Femenino")
profesional1.setWeight(58);
profesional1.setHeight(177);
profesional1.setHairColor("Rubio");
profesional1.setEyeColor("Azul");
profesional1.setRace("Caucásica");
profesional1.setIsRetired(false);
profesional1.setNationality("Sudafricana");
profesional1.setOscarsNumber(1);
profesional1.setProfession("Actriz");
// Volver a mostrar
console.log("Valores cambiados de profesional1 mostrados con getters:");
console.log("Nombre       :", profesional1.getName());
console.log("Edad         :", profesional1.getAge());
console.log("Genero       :", profesional1.getGenre());
console.log("Peso         :", profesional1.getWeight());
console.log("Altura       :", profesional1.getHeight());
console.log("Color de pelo:", profesional1.getHairColor());
console.log("Color de ojos:", profesional1.getEyeColor());
console.log("Raza         :", profesional1.getRace());
console.log("Retirado?    :", profesional1.getIsRetired());
console.log("Nacionalidad :", profesional1.getNationality());
console.log("Nº de Oscars :", profesional1.getOscarsNumber());
console.log("Profesión    :", profesional1.getProfession());

// let profesional1: Professional = new Professional("Charlize Theron", 46, "Femenino", 58, 177, "Rubio", "Azul", "Caucásico", false, "Sudafricana", 1, "Actriz");
// Probar método printProfessional
let arrayProfesionales: Professional[] = [profesional1, profesional2, profesional3, profesional4, profesional5, profesional6];
console.log("\nMostrando datos de arrayProfesionales con printProfessional():")
arrayProfesionales.forEach((profesional) => {
    profesional.printProfessional();
    console.log();
});