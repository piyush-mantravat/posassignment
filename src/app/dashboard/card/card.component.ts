import { Component, OnInit,Input,SimpleChanges } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SaleItemComponent} from './../sale-item/sale-item.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cartData: any;
  data:any;
  item=0;
  uniqueItem=[];
  totalItem=[];
  saleData;
  allitemprice=0;
  vatTax=0;
  discount=0;
  totalVatDiscountPrice=0;
  totalPrice=0;
  items=0;
  Index=0;
  index;

  constructor(public dialog: MatDialog) { 
  }

  ngOnInit() {
    // this.Index=localStorage.getItem("index");
  }

  ngOnChanges(changes: SimpleChanges) {
    this.index=localStorage.getItem("index");
    if(this.cartData !=undefined)
    for(var i=1; i<=this.cartData.length; i++){
       this.item=i;
    }
    if(this.cartData !=undefined)
    this.cartData.forEach((value,i) => { 
      // debugger;
      this.Index=i;
      this.totalItem.push(value.price);
      // console.log(this.totalItem,"jfngjdfngjdfng"); 
   });
   if(this.cartData !=undefined)
   this.totalItem.forEach((value,i)=>{
    //  debugger;
    if(this.uniqueItem.indexOf(this.totalItem[i])==-1){
          this.uniqueItem.push(value);
        }
   })
  //  console.log(this.uniqueItem,"pppppppppp");

   if(this.cartData !=undefined)
   this.uniqueItem.forEach((value,i)=>{
    this.items =value;
   })
      // this.item =this.items;
      this.allitemprice+=this.items;
      this.vatTax=this.allitemprice*(10/100);
      this.totalVatDiscountPrice=this.allitemprice-this.vatTax;
      this.discount=this.totalVatDiscountPrice*(10/100);
      this.totalPrice=this.totalVatDiscountPrice-this.discount;
      this.saleData={
          "itemTotalprice":this.allitemprice,
          "totalItem":this.item
         }
  }
  // updateValue(){
  //   console.log("first time");
  //   this.allitemprice+=this.items;
  //   this.vatTax=this.allitemprice*(10/100);
  //   this.totalVatDiscountPrice=this.allitemprice-this.vatTax;
  //   this.discount=this.totalVatDiscountPrice*(10/100);
  //   this.totalPrice=this.totalVatDiscountPrice-this.discount;
  //   //  this.saleData={
  //   //   "itemTotalprice":this.allitemprice,
  //   //   "totalItem":this.item
  //   //  }
  // }

  increment(data,i){
      const cnt = ++data.quant;
      this.cartData[i].quant = cnt;
      this.allitemprice+=data.price;
      this.vatTax=this.allitemprice*(10/100);
      this.totalVatDiscountPrice=this.allitemprice-this.vatTax;
      this.discount=this.totalVatDiscountPrice*(10/100);
      this.totalPrice=this.totalVatDiscountPrice-this.discount;

      this.saleData={
        "itemTotalprice":this.allitemprice+=data.price,
        "totalItem":this.item
       }
  }

  decrement(data,i){
      const cnt = --data.quant;
      this.cartData[i].quant = cnt;
      this.allitemprice-=data.price;
      this.vatTax=this.allitemprice*(10/100);
      this.totalVatDiscountPrice=this.allitemprice-this.vatTax;
      this.discount=this.totalVatDiscountPrice*(10/100);
      this.totalPrice=this.totalVatDiscountPrice-this.discount;
      this.saleData={
        "itemTotalprice":this.allitemprice-=data.price,
        "totalItem":this.item
       }
    if(data.quant==0){
      this.cartData.splice(i, 1);
      this.item--;
      console.log(this.cartData,"=>>>>>>>");
    }
  }
  opensaleItemDialog(){
    const dialogRef = this.dialog.open(SaleItemComponent, {
      width: '250px',
      data: {data:this.cartData,item:this.saleData}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
