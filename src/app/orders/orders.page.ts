import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OrderServiceService } from '../order-service.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders
  constructor(public route: ActivatedRoute, public coffeeListService: OrderServiceService) {
    this.orders = this.coffeeListService.getOrders()
  }

  ngOnInit() {
  }

}
