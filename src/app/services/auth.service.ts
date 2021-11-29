import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFaut: AngularFireAuth, public router: Router ) { }

  login(email:string, password:string){
    return new Promise((resolve, rejected) =>{ 
    this.AFaut.signInWithEmailAndPassword(email, password).then(user =>{   
    resolve(user);   
    }).catch(err => rejected(err));     });
}

logout(){
   this.AFaut.signOut().then(() => {
  this.router.navigate(['/loginn']);
  });
  }

  register(email:string, password: string){
    return new Promise((resolve, reject)=>{

    this.AFaut.createUserWithEmailAndPassword(email,password).then(res =>{
        resolve(res)
      }).catch(err => reject(err))
    })
    
  }




}

