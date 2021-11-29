import { Component } from '@angular/core';
import{AuthService} from '../app/services/auth.service';

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
  constructor(public authservice : AuthService) {}

  componentes : Componente[] =[

    {
      icon: 'game-controller-outline', 
      name: 'Juegos Populares', 
      redirecTo: '/elementos'
    },
    {
      icon: 'newspaper-outline', 
      name: 'Noticias sobre Juegos', 
      redirecTo: '/api'
    },
    {
      icon: 'sunny-outline', 
      name: 'Danos tu opinion', 
      redirecTo: '/datos'
    },
  ]


    Onlogout(){
      this.authservice.logout();   
    }


}

