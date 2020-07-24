import { Component, OnInit } from '@angular/core';
import { Calzado, CalzadosService } from 'src/app/services/calzados.service';

@Component({
  selector: 'app-ninos',
  templateUrl: './ninos.component.html',
  styleUrls: ['./ninos.component.css']
})
export class NinosComponent implements OnInit {

  calzados:Calzado[]=[];
  constructor(private _calzadosService:CalzadosService) { 
  }
  ngOnInit() {    
    this._calzadosService.ListarCalzados(3)
      .subscribe(resp => {
       console.log(resp)
       this.calzados=resp
      })
  }
}
