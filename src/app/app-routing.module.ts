import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { PaginasComponent } from './paginas/paginas.component';
import { DamasComponent } from './paginas/damas/damas.component';
import { LayoutPrincipalComponent } from './@theme/layout/layout-principal/layout-principal.component';
import { LayoutSecundarioComponent } from './@theme/layout/layout-secundario/layout-secundario.component';
import { CaballerosComponent } from './paginas/caballeros/caballeros.component';
import { NinosComponent } from './paginas/ninos/ninos.component';



const routes: Routes = [
  {
    // path: '', 
    // loadChildren: () => import('./paginas/paginas.module')
    //   .then(m => m.PaginasModule),
    path: '',
    component: LayoutPrincipalComponent,
    children: [
      {
        path: '',
        component: PrincipalComponent,        
      },          
    ]
  },
  {    
    path: 'damas',
    component: LayoutSecundarioComponent,
    children: [
      {
        path: '',
        component: DamasComponent,        
      },          
    ]
  },
  {    
    path: 'caballeros',
    component: LayoutSecundarioComponent,
    children: [
      {
        path: '',
        component: CaballerosComponent,        
      },          
    ]
  },
  {    
    path: 'ninos',
    component: LayoutSecundarioComponent,
    children: [
      {
        path: '',
        component: NinosComponent,        
      },          
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
