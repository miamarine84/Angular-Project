import { Component, OnInit, Input } from '@angular/core';
import {ShoppingCartService} from '../../SERVICES/shopping_cart.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: any [];

  // constructor(private shopping_cart: ShoppingCartService) { }
  constructor( shopping_cart: ShoppingCartService) {
    console.log(shopping_cart)
  }
  ngOnInit(): void {
  }

  // addToCart(p){
  //   // this.shopping_cart.addProduct(p)
  // }

}