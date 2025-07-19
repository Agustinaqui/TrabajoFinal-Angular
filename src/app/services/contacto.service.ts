import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private URL = 'https://687b2076b4bc7cfbda84b5d3.mockapi.io/api/v1/mensajes'; 

  constructor(private http: HttpClient) {}

  enviarMensaje(datos: any): Observable<any> {
    return this.http.post(this.URL, datos);
  }
}
