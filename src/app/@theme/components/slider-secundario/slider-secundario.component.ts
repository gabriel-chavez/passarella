import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-secundario',
  templateUrl: './slider-secundario.component.html',
  styleUrls: ['./slider-secundario.component.css']
})
export class SliderSecundarioComponent implements OnInit {
  @Input() urlImagen: string;
  constructor() { }

  ngOnInit() {
  }

}
