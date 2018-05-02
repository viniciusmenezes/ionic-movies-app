import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let url = "https://api.themoviedb.org/3";
let api_key = "api_key=565e5bd40f0fe44c836db96f6c05ab99";

@Injectable()
export class MovieProvider {


  constructor(public http: HttpClient) {
    //console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
     return this.http.get(url + "/movie/popular?" + api_key + "&language=pt-BR");
    //return this.http.get(url + "/movie/latest");
  }

}
