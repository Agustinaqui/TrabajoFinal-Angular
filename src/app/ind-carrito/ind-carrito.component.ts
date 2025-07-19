import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Indumentaria } from '../indumentaria-list/Indumentaria';
import { IndumentariaCartService } from '../services/indumentaria-cart.service';
@Component({
  selector: 'app-ind-carrito',
  standalone: false,
  templateUrl: './ind-carrito.component.html',
  styleUrl: './ind-carrito.component.scss'
})
export class IndCarritoComponent implements OnInit{

  cartList$ : Observable<Indumentaria []>;
  private cartList: Indumentaria[] = [];
  totalSinDescuento: number = 0;
  totalConDescuento: number = 0;

  //servicio inyectado
  constructor(private cart:IndumentariaCartService){ 
    this.cartList$ = cart.cartList.asObservable();
  }
  
  ngOnInit () : void{
    this.cartList$.subscribe(lista => {
      this.cartList = lista;
      this.calcularTotales();
    });
  }

  calcularTotales(): void {
    this.totalSinDescuento = 0;
    this.totalConDescuento = 0;

    this.cartList.forEach (p => {
      const subtotal = p.precio * p.cantidad;
      this.totalSinDescuento += subtotal;

      if (p.sale && p.descuento){
        const precioConDescuento = p.precio * (1 - p.descuento / 100);
        this.totalConDescuento += precioConDescuento * p.cantidad;
      } else{
        this.totalConDescuento += subtotal;
      }
    });
  }
}
