import { Professional } from './professional';

// Clase Movie
export class Movie {

    // Atributos públicos
    public title: string;
    public releaseYear: string;
    public actors: Professional[];
    public nationality: string;
    public director!: Professional; // Preguntar conmo inicializar nulo un atributo con tipo Professional
    public writer!: Professional;
    public language: string;
    public platform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer!: Professional;
    public distributor: string;
    public genre:string;

    // Constructor
    constructor(title: string, releaseYear: string, nationality: string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = [];
        this.nationality = nationality;
        this.language = "";
        this.platform = "";
        this.isMCU = false;
        this.mainCharacterName = "";
        this.distributor = "";
        this.genre = "";
    }

    // Métodos públicos
    public printMovie(): void {
        console.log("Atributos de la película", this.title);
        for(let atributo in this) {
            console.log(atributo+":",this[atributo]);
        };
    }
    
}