import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITrendingReponse } from '../models/trending.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

key: string ='7d3eb65387fc6738c008842bd5f7e953'

apiUrl: string = 'https://api.themoviedb.org/3/'

  constructor( private _https:HttpClient ) { }



  getTrending (): Observable<ITrendingReponse>  {
   
    let params = { language: 'es-ES' }; //declaramos parametros para el idioma
    let headers = { //declaramos encabezados necesarios para la petición a la API
      accept: 'application/json',
      Authorization: `Bearer ${environment.tokenAPI}`
    }


    return this._https.get (this.apiUrl + 'trending/all/week', {
      params: params,
      headers: headers,
  })
}

}
