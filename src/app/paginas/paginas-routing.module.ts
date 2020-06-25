import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginasComponent } from './paginas.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [{
  path: '',
  component: PaginasComponent,
  children: [
    {
      path: 'principal',
      component: PrincipalComponent,
    },    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PaginasRoutingModule { }
