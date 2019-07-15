import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../order-service.service';


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {
  coffeeCode
  coffeeList

  constructor(public coffeeListService : OrderServiceService) {
    this.coffeeList = this.coffeeListService.getCoffeeLists()
  }

  ngOnInit() {
   
  }

}
