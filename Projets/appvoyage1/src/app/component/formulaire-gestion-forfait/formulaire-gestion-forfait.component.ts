import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire-gestion-forfait',
  templateUrl: './formulaire-gestion-forfait.component.html',
  styleUrls: ['./formulaire-gestion-forfait.component.css'],
})
export class FormulaireGestionForfaitComponent implements OnInit {
  forfait = {
    destination: '',
    villeDepart: '',
    hotel: {
      nom: '',
      coordonnees: '',
      nombreEtoiles: 0,
      nombreChambres: 0,
      caracteristiques: [],
    },
    dateDepart: '',
    dateRetour: '',
    prix: 0,
    rabais: 0,
  };
  characteristics = [
    'Face à la plage',
    "Dans un lieu situé à proximité d'un parc/lieu naturel",
    'Ascenseur',
    'Miniclub',
    'Mariages',
    'Plage',
  ];
  constructor() {}

  ngOnInit(): void {}
}
