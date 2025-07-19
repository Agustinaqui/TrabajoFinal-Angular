import { Component, OnInit } from '@angular/core';
import { IndDataService } from '../services/ind-data.service';
import { IndumentariaCartService } from '../services/indumentaria-cart.service';
import { Indumentaria } from './Indumentaria';

@Component({
  selector: 'app-indumentaria-list',
  standalone: false,
  templateUrl: './indumentaria-list.component.html',
  styleUrl: './indumentaria-list.component.scss'
})

export class IndumentariaListComponent implements OnInit {
  //tipado de datos
  productos: Indumentaria[] = [];

constructor(
  private cart:IndumentariaCartService,
  private indDataService : IndDataService){ //servicio inyectado
}

ngOnInit(): void {
  this.indDataService.getAll().subscribe(data => {
    this.productos = data.map(p => {
      let localImage = '';

      switch(p.nombre) {
        case 'Pantalón polar soft Lumi - Rosa':
          localImage = 'assets/images/pant-rosa.jpeg';
          break;
        case 'Pantalón polar soft Lumi - Blanco':
          localImage = 'assets/images/pant-blanco.jpeg';
          break;
        case 'Pantalón polar soft Lumi - Verde':
          localImage = 'assets/images/pant-verde.jpeg';
          break;
      }

      return {
        ...p,
        image: localImage,
        cantidad: 0,
        maxAlcanzado: false
      };
    });
  });
}


addToCart (producto : Indumentaria) : void{
  if (producto.cantidad > 0 && producto.stock >= producto.cantidad) {
    this.cart.addToCart(producto);

    producto.stock -= producto.cantidad;

    if (producto.stock <= 0) {
      producto.maxAlcanzado = true;
    } else {
      producto.maxAlcanzado = false;
    }

    producto.cantidad = 0;

    // Actualizar el cache en el servicio para que el stock modificado persista
    this.indDataService.actualizarProductos(this.productos);
  }
  //console.log('Producto agregado al carrito:', producto);
}

maxReached(producto: Indumentaria): void {
  producto.maxAlcanzado = true;
}

ocultarMensajeStock (producto : Indumentaria): void{
  producto.maxAlcanzado = false;
}

}




