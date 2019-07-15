import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  codes
  orders = []
  coffeeCategories=[
    {code: "0012", pic: "assets/different-coffees/edited-sizes/Latte-cup.jpg", description: "Latte", price: "25.00"},
    {code: "0013", pic: "assets/different-coffees/edited-sizes/espresso.jpg", description: "Espresso", price: "21.00"},
    {code: "0014", pic: "assets/different-coffees/edited-sizes/plain-coffee.jpg", description: "Plain Coffee", price: "18.00"}
  ]

  coffeeOrdered= []
  oneCoffeeOrder=[]
  singlePrice
  getCoffeeList(code) {
    
    let i= 0  
    for( i = 0; i < this.coffeeCategories.length; i++){
      if (code = this.coffeeCategories[i].code){
         return this.coffeeCategories[i]
      }
   
    }
    
  }
  calculateCoffeeOrder(code, description, price, quantity){
    this.oneCoffeeOrder.splice(1)
    this.oneCoffeeOrder.push(
      {code: code, description:description, price: price, quantity:quantity}
    )
  
  }

  getSinglePrice(code){
    let codes = code
    for(let i = 0; i < this.oneCoffeeOrder.length; i++){
      if(codes === this.oneCoffeeOrder[i].code){
        this.singlePrice = +this.oneCoffeeOrder[i].price * +this.oneCoffeeOrder[i].quantity
        return this.singlePrice
      }
    }
  }
  getCoffeeLists(){
    return this.coffeeCategories
  }

  addOrder(code, pic, description, price, sugarQuantity, milkBoolean, totalPrice){
    this.coffeeOrdered.push(
      {code: code, pic: pic, description: description, price: price, sugarQuantity: sugarQuantity, milkBoolean: milkBoolean, totalPrice: totalPrice}
    )
  }

  confirmOrders(code, pic, description, price, cupQuantity,  milkBoolean, sugarQuantity, totalPrice){
    this.orders.push(
      {code: code, pic: pic, description: description, price: price, cupQuantity: cupQuantity, sugarQuantity: sugarQuantity, milkBoolean: milkBoolean, totalPrice: totalPrice}
    )
  }
  getOrders(){
    return this.orders
  }
  constructor() { }
}
