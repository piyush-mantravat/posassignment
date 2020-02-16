import { Component, OnInit } from '@angular/core';
import {ProductservicesService} from './../../productservices.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productData:any;
  cartData:any=[];
  arr;
  obj ={}
  // newArray = [];
  url = "/assets/images/";
  constructor(private services: ProductservicesService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.services.getData()
    .subscribe(res => {
      this.productData=res;
      // console.log(this.productData,"data");
    });
  }

  sendData(productData,i){
    var itemObject = {
      "id": productData.id,
      "name": productData.name,
      "price": productData.price,
      "quant": productData.quant,
      "index":i
    };
    localStorage.setItem("index",i);
    this.cartData.push(itemObject);
    //  if(this.cartData.length ==0){
    //   this.cartData.push(itemObject);
    //  }
    //  this.cartData.forEach(element => {
    //    if(element.id==productData.id){
    //       console.log("duplicate")
    //    }else{
    //     this.cartData.push(itemObject);
    //    }
    //  });

    // Declare a new array 
    let newArray = []; 
    // Declare an empty object 
    let uniqueObject = {}; 
    // Loop for the array elements 
    for (let i in this.cartData) { 
        // Extract the title 
       var objTitle = this.cartData[i]['name']; 
        // Use the title as the index 
        uniqueObject[objTitle] = this.cartData[i]; 
    } 
    // Loop to push unique object into array 
    for (i in uniqueObject) { 
        newArray.push(uniqueObject[i]); 
    } 
    // Display the unique objects 
    this.arr=newArray;
    console.log(this.arr,"newArray"); 
  }

}
