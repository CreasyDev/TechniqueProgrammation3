import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulaire-recherche',
  templateUrl: './formulaire-recherche.component.html',
  styleUrls: ['./formulaire-recherche.component.css'],
})

export class FormulaireRechercheComponent implements OnInit {
  showFiller = false;
  searchInfo = {
    days: 7,
    rating: 1,
    date: null,
    characterisctic: [],
  };
  characteristics = [
    'Face à la plage',
    "Situé à proximité d'un parc",
    'Ascenseur',
    'Miniclub',
    'Mariages',
    'Plage',
  ];
  selected = '';
  thumbLabel = true;
  @Output() newsearch: EventEmitter<any> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  ratingChange(rating: any) {
    this.searchInfo.rating = rating.value;
  }
  selectChange(days: any) {
    this.searchInfo.days = days;
  }
  dateChange(date: any) {
    this.searchInfo.date = date.toDateString().slice(0, 10);
  }

  search() {
    this.newsearch.emit(this.searchInfo);
  }
  characChanged(value: any) {
    this.selected = value;
    this.searchInfo.characterisctic.push(value);
  }
}
