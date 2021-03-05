import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css'],
})
export class ForfaitCompletComponent implements OnInit {
  @Input() name = '';
  @Input() price = '';
  @Input() destination = '';
  @Input() departure = '';
  @Input() date = '';
  @Input() length = '';
  @Input() rating = '';
  @Input() image = '';
  @Input() discount = 0;
  @Input() vedette = false;
  @Input() priceDiscount = 0;  
  @Input() forfaitImage = "";
  constructor() {}

  ngOnInit(): void {
  }
}
