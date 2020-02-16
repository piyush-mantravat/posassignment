import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.scss']
})
export class SaleItemComponent implements OnInit {
   saleItemAllData;
   itemPrice;
   date = new Date();
  constructor(
    public dialogRef: MatDialogRef<SaleItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data,"pkkkkkkk");
      this.saleItemAllData=data.data;
      this.itemPrice=data.item;
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
