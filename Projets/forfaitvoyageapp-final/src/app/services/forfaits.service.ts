import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RandomUtil } from '../utils/randomUtil';

@Injectable({
  providedIn: 'root'
})
export class ForfaitsService {

  constructor(private http: HttpClient) { }

 
  getForfait(){
    return this.http.get("https://forfaits-voyages.herokuapp.com/api/forfaits");
  }

  addForfait(forfait:any){
    var ff = {
        
      "destination": forfait.destination,
      "villeDepart": forfait.villeDepart,
      "hotel": {
          "nom": forfait.hotel.nom,
          "coordonnees": forfait.hotel.coordonnees,
          "nombreEtoiles": forfait.hotel.nombreEtoiles,
          "nombreChambres": forfait.hotel.nombreChambres,
          "caracteristiques": forfait.hotel.caracteristiques
      },
      "dateDepart": forfait.dateDepart,
      "dateRetour": forfait.dateRetour,
      "dateDepartD": forfait.dateDepartD,
      "dateRetourD": forfait.dateRetourD,
      "prix":forfait.prix,
      "rabais": forfait.rabais,
      "vedette": forfait.vedette,
      "forfaitImage": "https://picsum.photos/200/"+new RandomUtil().randomInteger(100,300),
      "userId" : "567c92bd-4213-4a7b-9629-3393b6948aa3"
  };
    return this.http.post("https://forfaits-voyages.herokuapp.com/api/forfaits", ff );
  }

  deleteForfait(forfait:any){
    return this.http.delete("https://forfaits-voyages.herokuapp.com/api/forfaits/"+forfait._id);
  }


  updateForfait(forfait:any){
    return this.http.put("https://forfaits-voyages.herokuapp.com/api/forfaits/"+forfait._id, forfait);
  }

}
