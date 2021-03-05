import { Hotel } from "./Hotel";

export interface Forfait{
    destination: string,
    villeDepart: string,   
    dateDepart: Date,
    dateRetour: Date,
    dateDepartD: Date,
    dateRetourD: Date,
    prix: number,
    rabais: number,
    vedette: boolean,
    hotel:Hotel,
    userId:string
}