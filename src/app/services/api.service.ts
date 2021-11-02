import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) { }

  getTopHeadLines(){
    return this.httpclient.get<RespuestaToHeadLines>(
      'https://newsapi.org/v2/everything?q=apple&from=2021-10-17&to=2021-10-17&sortBy=popularity&apiKey=222677ab20de40a09ab94496ff7808a7');
  }
}
