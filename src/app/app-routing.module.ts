import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { loginnoGuard } from './guards/loginno.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'loginn',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),canActivate : [AuthGuard]
  },
  {
    path: 'elementos',
    loadChildren: () => import('./pages/elementos/elementos.module').then( m => m.ElementosPageModule),canActivate : [AuthGuard]
  },

  {
    path: 'api',
    loadChildren: () => import('./pages/api/api.module').then( m => m.ApiPageModule),canActivate : [AuthGuard]
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule),canActivate : [AuthGuard]
  },
  {
    path: 'loginn',
    loadChildren: () => import('./pages/loginn/loginn.module').then( m => m.LoginnPageModule), canActivate:[loginnoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule), canActivate:[loginnoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
