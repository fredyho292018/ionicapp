import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/ur.services';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { Producto, ResultadoProducto } from '../interfaces/producto.interface';





const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  pagina = 1;
  cantPorpaginas = 10;
  productos: Producto[] = [];
  resul: ResultadoProducto = null;

  constructor(private http: HttpClient) {
    this.cargar_todos();
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getProduct() {
    // const url = `${URL_SERVICIOS}/${id}`;
    /*const url = URL_SERVICIOS + '/productos/todos/' + this.pagina + '/' + this.cantPorpaginas;
    const result = this.http.get<ResultadoProducto>(url).pipe(
      tap(_ => console.log('ss')),
      catchError(this.handleError<ResultadoProducto>(url))
    );
    this.resul = result;
    console.log(result);*/
  }
  cargar_todos() {

    /*const url = URL_SERVICIOS + 'productos/todos/' + this.pagina + '/' + this.cantPorpaginas;
    this.http.get(url)
    .map( res => res.json())
    .subscribe( data => {
      console.log(data);
      if (data.error) {
        // aqui hay un error
      } else {
       this.productos.push(...data.productos);
       this.pagina += 1;

      }
    }

    );
    console.log(this._data[0].name);
     */
    const url = URL_SERVICIOS + '/productos/todos/' + this.pagina + '/' + this.cantPorpaginas;
    const result = this.http.get(url).subscribe( data => {
      // console.log(data);

      if (data['error']) {
        console.log(data['error']);
      } else {
       this.productos.push(data['productos']);
       this.pagina += 1;
        console.log(this.productos);
      }
    }
    );
  }

}
