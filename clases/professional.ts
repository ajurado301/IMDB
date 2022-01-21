// Clase Professional
export class Professional {

    // Atributos privados
    name: string;
    age: number;
    genre: string;
    weight: number;
    height: number;
    hairColor: string;
    eyeColor: string;
    race: string;
    isRetired: boolean;
    nationality: string;
    oscarsNumber: number;
    profession:string;
    
    // Constructor
    constructor(name        : string,
                age         : number,
                genre       : string,
                weight      : number,
                height      : number,
                hairColor   : string,
                eyeColor    : string,
                race        : string,
                isRetired   : boolean,
                nationality : string,
                oscarsNumber: number,
                profession  : string,) {
            
        this.name         = name;
        this.age          = age;
        this.genre        = genre;
        this.weight       = weight;
        this.height       = height;
        this.hairColor    = hairColor;
        this.eyeColor     = eyeColor;
        this.race         = race;
        this.isRetired    = isRetired;
        this.nationality  = nationality
        this.oscarsNumber = oscarsNumber;
        this.profession   = profession;
    }

    // getters y setters
    // name
    public getName(): string { return this.name };
    public setName(name: string): void { this.name = name };
    // age
    public getAge(): number { return this.age };
    public setAge(age: number): void { this.age = age };
    // genre
    public getGenre(): string { return this.genre };
    public setGenre(genre: string): void { this.genre = genre };
    // weight
    public getWeight(): number { return this.weight };
    public setWeight(weight: number): void { this.weight = weight };
    // height
    public getHeight(): number { return this.height };
    public setHeight(height: number): void { this.height = height };
    // hairColor
    public getHairColor(): string { return this.hairColor };
    public setHairColor(hairColor: string): void { this.hairColor = hairColor };
    // eyeColor
    public getEyeColor(): string { return this.eyeColor };
    public setEyeColor(eyeColor: string): void { this.eyeColor = eyeColor };
    // race
    public getRace(): string { return this.race };
    public setRace(race: string): void { this.race = race };
    // isRetired
    public getisRetired(): boolean { return this.isRetired };
    public setisRetired(isRetired: boolean): void { this.isRetired = isRetired };
    // nationality
    public getNationalityName(): string { return this.nationality };
    public setNationalityName(nationality: string): void { this.nationality = nationality };
    // oscarsNumber
    public getOscarsNumber(): number { return this.oscarsNumber };
    public setOscarsNumber(oscarsNumber: number): void { this.oscarsNumber = oscarsNumber };
    // profession
    public getProfession(): string { return this.profession };
    public setProfession(profession: string): void { this.name = profession };

    // Métodos públicos
    public printProfessional(): void {
        console.log("Atributos de", this.name);
        for(let atributo in this) {
            console.log(atributo+":",this[atributo]);
        };
    }
}