import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Indumentaria } from '../indumentaria-list/Indumentaria';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit {
constructor(){}
@Input () cantidad! : number;
@Input () max! : number;
@Input () producto!: Indumentaria;

@Output() cantidadChange : EventEmitter <number> = new EventEmitter<number>();
@Output() maxReached : EventEmitter<Indumentaria> = new EventEmitter<Indumentaria>();
@Output() cantidadDisminuida = new EventEmitter<Indumentaria>();
/*emit: hace que funcionen los parentesis*/ 
/*Output: hace quee funcionen los corchetes*/


ngOnInit () : void{ }

upCantidad(): void{
  if (this.cantidad < this.max){
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
  }
  else{
    console.log('emit producto:', this.producto);
     this.maxReached.emit(this.producto);
  }

}

downCantidad(): void{
  if (this.cantidad > 0){
  this.cantidad--;
  this.cantidadChange.emit(this.cantidad);

    if (this.cantidad < this.max){
      this.cantidadDisminuida.emit(this.producto);
    }
  }
}

ChangeCantidad (event:KeyboardEvent):void{
  console.log(event.key);
  this.cantidadChange.emit(this.cantidad);
}


}
