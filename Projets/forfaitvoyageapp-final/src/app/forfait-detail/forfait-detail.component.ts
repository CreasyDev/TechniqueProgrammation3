import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ForfaitsService } from '../services/forfaits.service';

@Component({
  selector: 'app-forfait-detail',
  templateUrl: './forfait-detail.component.html',
  styleUrls: ['./forfait-detail.component.css']
})
export class ForfaitDetailComponent implements OnInit {
    data: Data;
    location:any[];

  constructor(private activatedRoute: ActivatedRoute, private forfaitService:ForfaitsService) { 
    this.data= this.activatedRoute.snapshot.data;
  }

  ngOnInit(): void {
    this.forfaitService.getForfait().subscribe(response=>{
      var arr = Object.entries(response).map(([type, value]) => ({type, value}));

      console.log(response)
      console.log(arr)
      var filteredArray = arr.filter(forfait=> forfait.value.userId == "567c92bd-4213-4a7b-9629-3393b6948aa3" && forfait.value.destination !== "" && forfait.value.destination !== undefined && forfait.value.hotel !== undefined)
     
      
      filteredArray.forEach(element => {
        var dd:any = new Date(element.value.dateDepart);
        var dr:any = new Date(element.value.dateRetour);
         element.value.dure = Math.floor((dr - dd) / (1000 * 60 * 60 * 24));
       });

debugger
      this.location = filteredArray.filter(forfait=>forfait.value.destination.toLowerCase() === this.data.name.toLowerCase())
// console.log( this.location)
    })
  }

}
