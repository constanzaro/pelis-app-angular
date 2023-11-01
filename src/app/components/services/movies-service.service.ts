import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ITrendingReponse } from 'src/app/models/trending.interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

key: string ='7d3eb65387fc6738c008842bd5f7e953'


apiUrl: string = 'https://api.themoviedb.org/3/'
// token: string ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDNlYjY1Mzg3ZmM2NzM4YzAwODg0MmJkNWY3ZTk1MyIsInN1YiI6IjY1M2VmYjJlYzhhNWFjMDExZDZkYjk2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cX3X0UOBp3hCoQ4oPbq3G0_DWP_GLswm879reuOmxug'
//se puede colocar el tokenAPI directamente aca, sin importar ni exportar para usarlo, aunque es poco recomendable por problemas de seguridad al subirlo a un servidor.

  constructor( private _https:HttpClient ) { }



  getTrending (): Observable<ITrendingReponse>  {
   
    let params = { language: 'es-ES' }; //declaramos parametros para el idioma
    let headers = { //declaramos encabezados necesarios para la petición a la API
      accept: 'application/json',
      Authorization: `Bearer ${environment.tokenAPI}`
    }


    return this._https.get <ITrendingReponse> (this.apiUrl + 'trending/all/week', {
      params: params,
      headers: headers,
  })

  

  //El error que mencionas se debe a una incompatibilidad de tipos en TypeScript. El mensaje de error indica que el tipo de datos que devuelve la solicitud HTTP no coincide con el tipo esperado, que es Observable<ITrendingReponse>.
  //TypeScript está diciendo que no puede garantizar que el objeto que recibes sea del tipo ITrendingReponse. 
  //Para solucionar puedes intentar realizar una conversión explícita del tipo de datos utilizando el operador map del observable para transformar la respuesta a ITrendingReponse

}

}
