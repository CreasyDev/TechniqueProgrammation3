import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css'],
})
export class MiniForfaitComponent implements OnInit {
  @Input() name = '';
  @Input() price = 0;
  @Input() rating = 1;
  @Input() date = '';
  @Input() destination = '';
  @Input() depart = '';
  @Input() dure = '';
  @Input() discount = 0;
  @Input() priceDiscount = 0;
  constructor() {}

  ngOnInit(): void {}
}
