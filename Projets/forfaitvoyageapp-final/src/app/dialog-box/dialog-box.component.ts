import { Component,OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifierService } from 'angular-notifier';
import { ForfaitsService } from '../services/forfaits.service';

export interface UsersData {
  name: string;
  id: number;
}
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    private forfaitService:ForfaitsService,
    private notifier:NotifierService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.forfaitService.deleteForfait(this.local_data).subscribe(r=>{
      console.log(JSON.parse(JSON.stringify(r)).deletedCount)
      var deletedCount = JSON.parse(JSON.stringify(r)).deletedCount;
      if(deletedCount >0)
      {        
        this.notifier.notify("success", "Suppression reussie.")
      }else{        
        this.notifier.notify("error", "Un prbleme est survenu. Contactez le support technique.")
      }      
    });
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }


  ngOnInit(): void {
  }

}
