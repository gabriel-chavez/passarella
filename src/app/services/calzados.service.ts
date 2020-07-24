import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CalzadosService {
  private apiUrl: string;
  private calzados: Calzado[] =[];
  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl
  }

   public ListarCalzados(TParCategoriaFk:Number){

    return this.http.get(`${this.apiUrl}articulos/${TParCategoriaFk}`)
    .pipe(
      map((resp: Respuesta) => {
        if(resp.Exito){
          this.calzados=JSON.parse(resp.ResultadoJson);
          return this.calzados;
        }
        return [];        
      })
    );
  }

}
export interface Calzado{
  Id:number;
  Material:string;
  TParMarcaFk:number;
  TParMarcaDescripcion:string;
  TParTipoFk:string;
  TParTipoDescripcion:string;
  PrecioCompra:number;
  PrecioVenta:number;
  Descuento:number;
  Codigo:string;
  Promocion:number;  
  Colores:Color[];
}
export interface Color{
  Url:string;
  Descripcion:Number;
  Cantidad:string;
  Tamanios:number[];
}
export interface Respuesta{
  Exito:boolean;
  Mensaje:string;
  ResultadoJson:string
}
