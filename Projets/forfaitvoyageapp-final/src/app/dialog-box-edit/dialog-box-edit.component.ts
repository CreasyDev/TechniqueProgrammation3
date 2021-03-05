import { Component,OnInit, Inject, Optional} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifierService } from 'angular-notifier';
import { ForfaitsService } from '../services/forfaits.service';
import { RandomUtil } from '../utils/randomUtil';

export interface UsersData {
  name: string;
  id: number;
}
@Component({
  selector: 'app-dialog-box-edit',
  templateUrl: './dialog-box-edit.component.html',
  styleUrls: ['./dialog-box-edit.component.css']
})
export class DialogBoxEditComponent implements OnInit {

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxEditComponent>,
    private forfaitService:ForfaitsService,
    private notifier:NotifierService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    console.log("this.local_data", this.local_data)
    this.local_data.forfaitImage = "https://picsum.photos/200/"+new RandomUtil().randomInteger(100,300),
    this.forfaitService.updateForfait(this.local_data).subscribe(r=>{
      console.log(JSON.parse(JSON.stringify(r)))
       var modifiedCount = JSON.parse(JSON.stringify(r)).modifiedCount;
      if(modifiedCount >0)
      {        
        this.notifier.notify("success", "Mise a jour reussie.")
      }else{        
        this.notifier.notify("error", "Un prbleme est survenu. Contactez le support technique.")
      }      
    });
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
  dateChange(date: any) {
    
  }
  
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }


  ngOnInit(): void {
  }

}
