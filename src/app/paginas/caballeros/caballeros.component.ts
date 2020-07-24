import { Component, OnInit } from '@angular/core';
import { Calzado, CalzadosService } from 'src/app/services/calzados.service';

@Component({
  selector: 'app-caballeros',
  templateUrl: './caballeros.component.html',
  styleUrls: ['./caballeros.component.css']
})
export class CaballerosComponent implements OnInit {
  calzados:Calzado[]=[];
  constructor(private _calzadosService:CalzadosService) { }
  ngOnInit() {    
    this._calzadosService.ListarCalzados(2)
      .subscribe(resp => {
       console.log(resp)
       this.calzados=resp
      })
  }
}
