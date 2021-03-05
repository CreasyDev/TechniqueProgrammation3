import { Component,OnInit, Inject, Optional} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifierService } from 'angular-notifier';
import { ForfaitsService } from '../services/forfaits.service';

export interface UsersData {
  name: string;
  id: number;
}
@Component({
  selector: 'app-dialog-box-ajouter',
  templateUrl: './dialog-box-ajouter.component.html',
  styleUrls: ['./dialog-box-ajouter.component.css']
})
export class DialogBoxAjouterComponent implements OnInit {

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxAjouterComponent>,
    private forfaitService:ForfaitsService,
    private notifier:NotifierService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    console.log("this.local_data", this.local_data)
    this.forfaitService.addForfait(this.local_data).subscribe(r=>{
      console.log(JSON.parse(JSON.stringify(r)))
      var newId = JSON.parse(JSON.stringify(r))._id;
      if(newId != "")
      {        
        this.notifier.notify("success", "Ajout reussi.")
      }else{        
        this.notifier.notify("error", "Un prbleme est survenu. Contactez le support technique.")
      }      
    });
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  // dateDepartChange(date: any) {
  //   this.local_data.dateDepart = date.toDateString().slice(0, 10);
  // }
  
  // dateRetourChange(date: any) {
  //   this.local_data.dateRetour = date.toDateString().slice(0, 10);
  // }

  ngOnInit(): void {
  }

}
