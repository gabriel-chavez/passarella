import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginasComponent } from './paginas.component';
import { PrincipalComponent } from './principal/principal.component';
import { PaginasRoutingModule } from './paginas-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { RouterModule } from '@angular/router';
import { DamasComponent } from './damas/damas.component';





@NgModule({
  declarations: [
    PaginasComponent, 
    PrincipalComponent, DamasComponent,     
  ],
  imports: [
    CommonModule,RouterModule,
  //   PaginasRoutingModule,
    ThemeModule
  ],
  exports:[
    PaginasComponent, 
    PrincipalComponent,     DamasComponent
  ],
})
export class PaginasModule { }
