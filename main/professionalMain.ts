// Para test de la clase Professional
import { Professional } from '../clases/professional';

// Instanciar Professional
let profesional1: Professional = new Professional("Nombre provisional", 50, "Genero provisonal", 60, 150, "Verde", "Marron", "Malaya", true, "Española", 0, "Actor");
let profesional2: Professional = new Professional("Keanu Reeves", 57, "Masculino", 82, 186, "Negro", "Negro", "Caucásica", false, "Libanesa", 0, "Actor");
let profesional3: Professional = new Professional("Uma Thurman", 51, "Femenino", 71, 180, "Rubio", "Azul", "Caucásica", false, "Estadounidense", 0, "Actriz");
let profesional4: Professional = new Professional("James Cameron", 67, "Masculino", 81, 187, "Blanco", "Gris", "Caucásica", false, "Canadiense", 3, "Director");
let profesional5: Professional = new Professional("Quentin Tarantino", 58, "Masculino", 92, 185, "Marrón oscuro", "Café", "Caucásica", false, "Estadounidense", 2, "Guionista");
let profesional6: Professional = new Professional("Joel Silver", 69, "Masculino", 84, 175, "Negro", "Negro", "Caucásica", false, "Estadounidense", 0, "Productor");

// let profesional1: Professional = new Professional("Charlize Theron", 46, "Femenino", 58, 177, "Rubio", "Azul", "Caucásico", false, "Sudafricana", 1, "Actriz");
// Probar método printProfessional
let arrayProfesionales: Professional[] = [profesional1, profesional2, profesional3, profesional4, profesional5, profesional6];
console.log("\nMostrando datos de arrayProfesionales con printProfessional():")
arrayProfesionales.forEach((profesional) => {
    profesional.printProfessional();
    console.log();
});