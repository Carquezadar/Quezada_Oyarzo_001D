import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"
import { Router } from "@angular/router"
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.page.html',
  styleUrls: ['./loginn.page.scss'],
})
export class LoginnPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router, public toast: ToastController) { }

  ngOnInit() {
  }

  // onSubmitLogin(){
  //   this.authService.login(this.email, this.password).then(res => {
  //   this.router.navigate(['/inicio'])
  //   }).catch(err=> alert('Los datos son incorrectos o no existe el usuario'))
  // }

  async onSubmitLogin()
     {
       this.authService.login(this.email, this.password).then(res => {
       this.router.navigate(['/inicio'])
      }).catch(err=> alert('Los datos son incorrectos o no existe el usuario'))
       const toast = await this.toast.create({
        message:'Bienvenido ' + this.email,
       position: 'bottom',
       duration:2000
        })
         toast.present();        }
}
