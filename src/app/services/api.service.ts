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
      'https://newsapi.org/v2/everything?q=fornite&apiKey=42448ed28a9840e9bc09047e656b5c05');
  }
}
