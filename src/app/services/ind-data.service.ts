import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Indumentaria } from '../indumentaria-list/Indumentaria';

const URL = 'https://6876c205dba809d901ed080d.mockapi.io/api/v1/productos';
//esta clase se puede inyectar
@Injectable({
  providedIn: 'root'
})
export class IndDataService {
   productosCache: Indumentaria[] = [];
  constructor(private http: HttpClient){ 
  }

  getAll(): Observable<Indumentaria[]> {
  if (this.productosCache.length > 0){
    return of(this.productosCache);
  }
  return this.http.get<Indumentaria[]>(URL).pipe(
    tap(productos => {
      this.productosCache = productos; 
    })
  );
  }

  actualizarProductos(productos: Indumentaria[]): void {
    this.productosCache = productos;
  }

}
