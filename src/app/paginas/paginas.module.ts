import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginasComponent } from './paginas.component';
import { PrincipalComponent } from './principal/principal.component';
import { PaginasRoutingModule } from './paginas-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { RouterModule } from '@angular/router';
import { DamasComponent } from './damas/damas.component';
import { HttpClientModule } from '@angular/common/http';
import { CaballerosComponent } from './caballeros/caballeros.component';
import { NinosComponent } from './ninos/ninos.component';





@NgModule({
  declarations: [
    PaginasComponent, 
    PrincipalComponent, DamasComponent, CaballerosComponent, NinosComponent,     
  ],
  imports: [
    CommonModule,RouterModule,
  //   PaginasRoutingModule,
    ThemeModule,
    HttpClientModule
  ],
  exports:[
    PaginasComponent, 
    PrincipalComponent,     DamasComponent
  ],
})
export class PaginasModule { }
