import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { element } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('drawer') drawer = null;
  totalForfait = 3;
  forfaits: any = [
    {
      name: 'Hôtel Punta cana',
      date: new Date().toDateString().slice(0, 10),
      price: 500,
      rating: 3,
      destination: 'Punta cana',
      departure: 'Montréal',
      dure: '7 jours',
    },
    {
      name: 'Hôtel San Salvador',
      date: new Date().toDateString().slice(0, 10),
      price: 700,
      rating: 4,
      destination: 'San Salvador',
      departure: 'Toronto',
      dure: '10 jours',
    },
    {
      name: 'Hôtel Puerto Plata',
      date: new Date().toDateString().slice(0, 10),
      price: 1500,
      rating: 5,
      destination: 'Puerto Plata',
      departure: 'Ottawa',
      dure: '14 jours',
    },
  ];

  forfaitscomplet: any = [
    {
      name: 'Hôtel Mexico',
      date: 'Tue Dec 29',
      price: 500,
      rating: 3,
      destination: 'Mexico',
      departure: 'Montréal',
      dure: '7 jours',
      image: '../../../assets/images/forfait_5.jpg'
    },
    {
      name: 'Hôtel San Francisco',
      date: 'Sun Dec 27',
      price: 700,
      rating: 4,
      destination: 'San Francisco',
      departure: 'Toronto',
      dure: '10 jours',
      image: '../../../assets/images/forfait_4.jpg'
    },
    {
      name: 'Hôtel Paris',
      date: 'Sun Dec 27',
      price: 1500,
      rating: 4,
      destination: 'Paris',
      departure: 'Ottawa',
      dure: '10 jours',
      image: '../../../assets/images/forfait_3.jpg'
    },
    {
      name: 'Hôtel Ottawa',
      date: 'Sat Dec 12',
      price: 1500,
      rating: 4,
      destination: 'Ottawa',
      departure: 'Ottawa',
      dure: '7 jours',
      image: '../../../assets/images/forfait_2.jpg'
    },
    {
      name: 'Hôtel Lyon',
      date: 'Wed Dec 09',
      price: 1500,
      rating: 5,
      destination: 'Lyon',
      departure: 'Ottawa',
      dure: '14 jours',
      image: '../../../assets/images/forfait_1.jpg'
    },
    {
      name: 'Hôtel Bordeaux',
      date: 'Fri Dec 25',
      price: 3500,
      rating: 2,
      destination: 'Bordeaux',
      departure: 'Ottawa',
      dure: '10 jours',
      image: '../../../assets/images/forfait_5.jpg'
    },
    {
      name: 'Hôtel Marseille',
      date: 'Fri Dec 18',
      price: 2500,
      rating: 1,
      destination: 'Marseille',
      departure: 'Ottawa',
      dure: '14 jours',
      image: '../../../assets/images/forfait_4.jpg'
    },
    {
      name: 'Hôtel Cancun',
      date: 'Thu Dec 10',
      price: 5000,
      rating: 5,
      destination: 'Cancun',
      departure: 'Ottawa',
      dure: '14 jours',
      image: '../../../assets/images/forfait_3.jpg'
    },
    {
      name: 'Hôtel Monaco',
      date: 'Thu Dec 24',
      price: 7000,
      rating: 4,
      destination: 'Monaco',
      departure: 'Ottawa',
      dure: '7 jours',
      image: '../../../assets/images/forfait_2.jpg'
    },
    {
      name: 'Hôtel Ibiza',
      date: 'Thu Dec 10',
      price: 8500,
      rating: 5,
      destination: 'Ibiza',
      departure: 'Ottawa',
      dure: '14 jours',
      image: '../../../assets/images/forfait_1.jpg'
    },
  ];
  showFormulairForfait = false;
  showFiller = false;
  constructor() {}

  ngOnInit(): void {}

  onSearch(value: any) {
    this.forfaitscomplet = this.forfaitscomplet.filter(
      (element) =>
        element.date === value.date &&
        element.dure === value.days &&
        element.rating === value.rating
    );
    this.drawer.close();
  }
}
