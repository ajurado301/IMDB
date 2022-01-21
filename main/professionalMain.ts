// Para test de la clase Professional
import { Professional } from '../clases/professional';

// Instanciar Professiona
let profesional1: Professional = new Professional("Charlize Theron", 46, "Femenino", 58, 177, "Rubio", "Azul", "Caucásico", false, "Sudafricana", 1, "Actriz");
let profesional2: Professional = new Professional("Keanu Reeves", 57, "Masculino", 82, 186, "Negro", "Negro", "Caucásico", false, "Libanesa", 0, "Actor");
let profesional3: Professional = new Professional("Uma Thurman", 51, "Femenino", 71, 180, "Rubio", "Azul", "Caucásico", false, "Estadounidense", 0, "Actriz");
let profesional4: Professional = new Professional("James Cameron", 67, "Masculino", 81, 187, "Blanco", "Gris", "Caucásico", false, "Canadiense", 3, "Director");
let profesional5: Professional = new Professional("Quentin Tarantino", 58, "Masculino", 92, 185, "Marrón oscuro", "Café", "Caucásico", false, "Estadounidense", 2, "Guionista");
let profesional6: Professional = new Professional("Joel Silver", 69, "Masculino", 84, 175, "Negro", "Negro", "Caucásico", false, "Estadounidense", 0, "Productor");



let arrayProfesionales: Professional[] = [profesional1, profesional2, profesional3, profesional4, profesional5, profesional6];
arrayProfesionales.forEach((profesional) => {
    profesional.printProfessional();
    console.log();
});