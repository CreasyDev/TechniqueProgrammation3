import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { ForfaitsService } from '../services/forfaits.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Forfait } from '../Models/Forfait';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { NotifierService } from 'angular-notifier';
import { DialogBoxEditComponent } from '../dialog-box-edit/dialog-box-edit.component';
import { DialogBoxAjouterComponent } from '../dialog-box-ajouter/dialog-box-ajouter.component';
import { DialogBoxGraphicComponent } from '../dialog-box-graphic/dialog-box-graphic.component';
import { of } from 'rxjs';
import { mergeMap, groupBy, reduce } from 'rxjs/operators';
@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})

export class AdministrationComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  dataSource :any;
  data:any;
  groupedData:any;
  displayedColumns: string[] = ['nom','action'];
  constructor(public dialog: MatDialog, public editDialog: MatDialog,public addDialog: MatDialog,public graphicDialog: MatDialog, private forfaitService:ForfaitsService, private notifier:NotifierService) { }
  ngAfterViewInit(): void {
    

  }

  ngOnInit(): void {
    this.updateGrid();
    this.dataSource.paginator = this.paginator;
  }

  updateGrid(){
    this.forfaitService.getForfait().subscribe(response=>{
      this.data = Object.entries(response).map(([type, value]) => ({type, value})).map(z=>z.value).filter(v=>v.hotel != undefined && v.hotel.nom != "" && v.hotel.nom != undefined && v.userId == "567c92bd-4213-4a7b-9629-3393b6948aa3");
      console.log(this.data);
      console.log(new MatTableDataSource<any>(this.data))
      this.dataSource = new MatTableDataSource<Forfait>(this.data);
    });
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateGrid();
    });
  }

  
  openEditDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.editDialog.open(DialogBoxEditComponent, {
      width: '800px',
      height:'600px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateGrid();
    });
  }

  openAddDialog(action,obj) {
    
    const dialogRef = this.addDialog.open(DialogBoxAjouterComponent, {
      width: '1000px',
      height:'600px',
      data: {
        destination: "",
        villeDepart: "",   
        dateDepart: new Date(),
        dateRetour: new Date(),
        dateDepartD: new Date(),
        dateRetourD: new Date(),
        prix: 0,
        rabais: 0,
        vedette: false,
        hotel:{
          nom: "",
          coordonnees: "",
          nombreEtoiles: 0,
          nombreChambres: 0,
          caracteristiques: []
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateGrid();
    });
  }

  
  openGraphicDialog(action,obj) {
    
    var chartDataDestination = this.data.map( (v) =>{
     return { "destination": v.destination,
     "prix": v.prix                      }
     });

    obj.action = action;
    const dialogRef = this.graphicDialog.open(DialogBoxGraphicComponent, {
      width: '1000px',
      height:'800px',
      data:chartDataDestination
    });
  }
}
