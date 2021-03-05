import { Component,OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifierService } from 'angular-notifier';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ForfaitsService } from '../services/forfaits.service';
export interface UsersData {
  nom: string;
  id: number;
}


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box-graphic.component.html',
  styleUrls: ['./dialog-box-graphic.component.css']
})
export class DialogBoxGraphicComponent implements OnInit {

  action:string;
  local_data:any;


  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = [];
  
  lineChartData2: ChartDataSets[] = [
    { data: [], label: 'Series A' },
  ];

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  
  constructor(
    public dialogRef: MatDialogRef<DialogBoxGraphicComponent>,
    private forfaitService:ForfaitsService,
    private notifier:NotifierService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = data;
    // this.action = this.local_data.action;
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  destinationDataReducer = (array)=>{
    var result = [];
array.reduce(function(res, value) {
  if (!res[value.destination]) {
    res[value.destination] = { destination: value.destination, prix: 0 };
    result.push(res[value.destination])
  }
  res[value.destination].prix += value.prix;
  return res;
}, {});
return result;
  }

  ngOnInit(): void {
    
   this.lineChartData = [
    { data: this.destinationDataReducer(this.local_data).map(z=>parseInt(z.prix) ), label: 'Évolution des prix en fonction de la detination' },
  ];
  debugger
  var total = this.destinationDataReducer(this.local_data).reduce((z,v)=>z+parseInt(v.prix), 0);
  console.log("total", total)

   this.lineChartLabels = this.destinationDataReducer(this.local_data).map(z=>z.destination)
   this.lineChartData2 = [
    { data: this.destinationDataReducer(this.local_data).map(z=>z.prix/total), label: 'Évolution relative des prix en fonction de la detination' },
  ];
  }

  
}
