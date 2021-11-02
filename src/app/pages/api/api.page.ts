import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  api:Article[]=[]

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getTopHeadLines().subscribe(resp=>{
      console.log('api', resp);
      //push permite añadir al arreglo cada objeto de tipo noticias obtenidas desde el servicio.
      this.api.push(...resp.articles);
    });
  }

}
