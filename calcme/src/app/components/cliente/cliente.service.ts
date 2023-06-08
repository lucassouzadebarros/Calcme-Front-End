import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlApiCliente = 'http://localhost:8080/cliente';

  httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public post(cliente: any): Observable<any> {
    return this.httpClient.post<any>(this.urlApiCliente, cliente, this.httOptions)
  }

}
