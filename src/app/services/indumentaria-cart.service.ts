import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Indumentaria } from '../indumentaria-list/Indumentaria';

@Injectable({
  providedIn: 'root'
})

/*maneja la logica del carrito*/
export class IndumentariaCartService {

  private _cartList: Indumentaria [] = [];
  
  cartList : BehaviorSubject<Indumentaria []> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(producto : Indumentaria){
    let item = this._cartList.find((v1) => v1.nombre == producto.nombre) ;
    if (!item){
      this._cartList.push({ ... producto});
    }else{
      item.cantidad += producto.cantidad;
    }
    console.log(this._cartList.length);
    this.cartList.next(this._cartList);
  }

}
