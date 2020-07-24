import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPrincipalComponent } from './layout/layout-principal/layout-principal.component';
import { LayoutSecundarioComponent } from './layout/layout-secundario/layout-secundario.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './components/slider/slider.component';
import { Slider2Component } from './components/slider2/slider2.component';
import { Slider3Component } from './components/slider3/slider3.component';
import { MarcasComponent } from './components/marcas/marcas.component';


import { PieComponent } from './components/pie/pie.component';
import { SliderSecundarioComponent } from './components/slider-secundario/slider-secundario.component';
import { CalzadoComponent } from './components/calzado/calzado.component';



import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { PruebaSliderComponent } from './components/prueba-slider/prueba-slider.component';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};


@NgModule({
  declarations: [ 
 
    LayoutPrincipalComponent, 
    LayoutSecundarioComponent, 
    CabeceraComponent, 
    SliderComponent, 
    Slider2Component, 
    Slider3Component, 
    MarcasComponent, 
    PieComponent, 
    SliderSecundarioComponent, 
    CalzadoComponent, PruebaSliderComponent],
  exports: [ LayoutPrincipalComponent, LayoutSecundarioComponent, CabeceraComponent,SliderSecundarioComponent,CalzadoComponent],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  
})
export class ThemeModule { }
