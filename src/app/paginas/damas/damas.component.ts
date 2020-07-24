import { Component, OnInit } from '@angular/core';
import { Calzado, CalzadosService } from 'src/app/services/calzados.service';

@Component({
  selector: 'app-damas',
  templateUrl: './damas.component.html',
  styleUrls: ['./damas.component.css']
})
export class DamasComponent implements OnInit {
  calzados:Calzado[]=[];
  constructor(private _calzadosService:CalzadosService) { 

  }

  ngOnInit() {    
    this._calzadosService.ListarCalzados(1)
      .subscribe(resp => {
       console.log(resp)
       this.calzados=resp
      })
  //  this._calzadosService.ListarCalzados();
  }

}
