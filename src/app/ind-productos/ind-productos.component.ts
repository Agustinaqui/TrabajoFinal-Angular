import { Component, OnInit } from '@angular/core';
import { IndumentariaCartService } from '../services/indumentaria-cart.service';


@Component({
  selector: 'app-ind-productos',
  standalone: false,
  templateUrl: './ind-productos.component.html',
  styleUrl: './ind-productos.component.scss'
})
export class IndProductosComponent implements OnInit {

  hayProductosCargados: boolean = false;

  constructor(private cart:IndumentariaCartService){}

  ngOnInit(): void {
      this.cart.cartList.subscribe(productos => {
        this.hayProductosCargados = productos.length > 0;
      });
  }

}
