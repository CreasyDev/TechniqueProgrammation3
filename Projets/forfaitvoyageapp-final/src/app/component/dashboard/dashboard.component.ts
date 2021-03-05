import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { element } from 'protractor';
import { ForfaitsService } from 'src/app/services/forfaits.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('drawer') drawer = null;
  totalForfait = 3;
  forfaits: any = [
    
  ];

  forfaitscomplet: any = [
   
  ];

  forfaitscompletOrigin: any = [
   
  ];
  showFormulairForfait = false;
  showFiller = false;
  constructor(private forfaitService:ForfaitsService) {}

  ngOnInit(): void {
    this.forfaitService.getForfait().subscribe(response=> 
      {
        var arr = Object.entries(response).map(([type, value]) => ({type, value}));

        console.log(response)
        console.log(arr)
       this.forfaits = arr.filter(forfait=>forfait.value.vedette === true  && forfait.value.userId == "567c92bd-4213-4a7b-9629-3393b6948aa3");  //.slice(0, this.totalForfait);
       console.log(this.forfaits)
      
       this.forfaitscompletOrigin = arr.filter(forfait=> forfait.value.userId == "567c92bd-4213-4a7b-9629-3393b6948aa3" && forfait.value.prix != 0); //arr.filter(forfait=>forfait.value.forfaitComplet === true);

       this.forfaitscompletOrigin.forEach(element => {
        var dd:any = new Date(element.value.dateDepart);
        var dr:any = new Date(element.value.dateRetour);
         element.value.dure = Math.floor((dr - dd) / (1000 * 60 * 60 * 24));
       });

       this.forfaitscomplet = this.forfaitscompletOrigin
      }
      )
  }

  formatDate(givenDate:string){
    var currentDate = new Date(givenDate);

    var day = currentDate.getDay();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    return new Date(year, month,day );
  }

  calculateDiscount(price:number, discount:number){
    if(discount == 0)
      return 0;
    
      return price - discount;
  }

  calculateDuration(dateDepart:string, dateRetour:string):number{
    var dd:any = new Date(dateDepart);
    var dr:any = new Date(dateRetour);

    return Math.floor((dr - dd) / (1000 * 60 * 60 * 24));
  }
  onSearch(value: any) {
    debugger
    console.log("from this.forfaitscompletOrigin", this.formatDate(this.forfaitscompletOrigin[0].value.dateDepart))
    this.forfaitscomplet = this.forfaitscompletOrigin.filter(
      (element) =>
      // this.formatDate(element.value.dateDepart) == this.formatDate(value.date) && // Prb de format de date
        element.value.dure === parseInt(value.days.split(" ")[0]) &&
        parseInt(element.value.hotel.nombreEtoiles) === value.rating
    );
    this.drawer.close();
  }
  
}
