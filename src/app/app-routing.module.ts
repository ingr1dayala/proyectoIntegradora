import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'registro', loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)},
  {path: 'inicio',loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)},
  {
    path: 'almuerzos',
    loadChildren: () => import('./Menu/almuerzos/almuerzos.module').then( m => m.AlmuerzosPageModule)
  },
  {
    path: 'comida-rapida',
    loadChildren: () => import('./Menu/comida-rapida/comida-rapida.module').then( m => m.ComidaRapidaPageModule)
  },
  {
    path: 'desayunos',
    loadChildren: () => import('./Menu/desayunos/desayunos.module').then( m => m.DesayunosPageModule)
  },
  {
    path: 'snacks',
    loadChildren: () => import('./Menu/snacks/snacks.module').then( m => m.SnacksPageModule)
  },
  {
    path: 'bebidas-frias',
    loadChildren: () => import('./Menu/bebidas-frias/bebidas-frias.module').then( m => m.BebidasFriasPageModule)
  },
  {
    path: 'bebidas-calientes',
    loadChildren: () => import('./Menu/bebidas-calientes/bebidas-calientes.module').then( m => m.BebidasCalientesPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
