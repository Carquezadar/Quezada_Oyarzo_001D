import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] =[
    {
      icon: 'clipboard-outline',
      name: 'Registrarse', 
      redirecTo: '/formulario'
    },
    {
      icon: 'game-controller-outline', 
      name: 'Juegos Populares', 
      redirecTo: '/elementos'
    },
  ]

}
