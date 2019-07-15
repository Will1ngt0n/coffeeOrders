import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../order-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {
  coffeeCode
  coffeeList
  wayprice

  
  
  constructor(public coffeeListService : OrderServiceService, public route: ActivatedRoute) {
    


    
  }
  checkPrice(code, description, price, quantity){

    console.log(code)
    console.log(description)
    console.log(price)
    console.log(quantity)
    this.wayprice = 0
    this.coffeeListService.calculateCoffeeOrder(code, description, price, quantity)
    this.wayprice = this.coffeeListService.getSinglePrice(this.coffeeCode)
  }

  confirmOrder(code, pic, description, price, cupQuantity,  milkBoolean, sugarQuantity, totalPrice){
    console.log(code)
    console.log(description)
    console.log(price)
    console.log(cupQuantity)
    console.log(milkBoolean)
    console.log(sugarQuantity)
    console.log(pic)
    console.log(totalPrice)
    this.coffeeListService.confirmOrders(code, pic, description, price, cupQuantity,  milkBoolean, sugarQuantity, totalPrice)
  }
 ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.coffeeCode = params.get('code');
      this.coffeeList = this.coffeeListService.getCoffeeList(this.coffeeCode)
      console.log("code" + this.coffeeCode)
      console.log("just space")
      console.log(this.coffeeList)
    })
  }
}
