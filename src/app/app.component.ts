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
      icon: 'game-controller-outline', 
      name: 'Juegos Populares', 
      redirecTo: '/elementos'
    },
    {
      icon: 'newspaper-outline', 
      name: 'Noticias sobre Apple', 
      redirecTo: '/api'
    },
    {
      icon: 'sunny-outline', 
      name: 'Danos tu opinion', 
      redirecTo: '/datos'
    },
  ]

}
