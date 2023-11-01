import { Component, OnInit } from '@angular/core';
import { IDataMoviesSeries } from 'src/app/models/trending.interfaces';
import { MoviesServiceService } from '../../services/movies-service.service';

// export interface IDataMoviesSeries{
//   id:number,
//   name: String,
//   description: string,
//   urlImg:string,
//   point:number,
//   category: string, 
// }



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  arrayMoviesSeries: IDataMoviesSeries[] = []
  ngOnInit(): void {
  this.getTrending()
  }


  constructor(private movieService: MoviesServiceService) { //declaración del servicio usado

  }

  getTrending() { //función que logra guardar la data necesaria por medio de la conexión al servicio
    this.movieService.getTrending().subscribe({
      next: (response) => {

        this.arrayMoviesSeries = response.results
      },

    })
  }



  //      {
  // id:0,
  //  name:  'Black Widow',
  // description: 'Black Widow, se enfrenta a las partes más oscuras de su libro de contabilidad cuando surge una peligrosa conspiración vinculada a su pasado.',
  //         urlImg:'../../assets/img/black.widow.jpg',
  //         point:4,
  //         category:'movies',
  //     },

  //    {
  //       id:1,
  //       name:  'Birds of Prey',
  //       description: 'Harley Quinn une fuerzas con un cantante, un asesino y un detective de policía para ayudar a una joven que recibió un golpe después de que le robó un diamante raro a un señor del crimen.',
  //         urlImg:'../../assets/img/birdsofprey.pelicula.jpg',
  //         point:6,
  //         category:'movies',
  //     },

  //     {
  //       id:2,
  //       name:  'Friends',
  //       description: 'Seis jóvenes de la ciudad de Nueva York, solos y luchando por sobrevivir en el mundo real, encuentran que la compañía, el consuelo y el apoyo que reciben unos de otros son el antídoto perfecto contra las presiones de la vida.',
  //         urlImg:'../../assets/img/friends.serie.jpg',
  //         point:8.7,
  //         category:'series',
  //     },

  //     {
  //       id:3,
  //       name:  'Loki',
  //       description: 'Después de robar el Teseracto durante los eventos de “Avengers: Endgame”, una versión alternativa de Loki llega a la misteriosa Time Variance Authority, una organización burocrática que existe fuera del tiempo y el espacio y monitorea la línea temporal. Le dan a Loki una opción: enfrentarse a ser borrado de la existencia por ser una “variante temporal” o ayudar a arreglar la línea temporal y detener una amenaza mayor.',
  //         urlImg:'../../assets/img/loki.pelicula.jpg',
  //         point:7.4,
  //         category:'series',
  //     },

  //     {
  //       id:4,
  //       name:  'Money Heist',
  //       description: 'Para llevar a cabo el mayor atraco de la historia, un hombre misterioso llamado El Profesor recluta a una banda de ocho ladrones,  que culminan encerrados en la Fábrica Nacional de Moneda y Timbre de España, rodeados de fuerzas policiales y con decenas de rehenes en su poder.',
  //         urlImg:'../../assets/img/moneyheist.serie.jpg',
  //         point:7.4,
  //         category:'series',
  //     },

  //     {
  //       id:5,
  //       name:  'Shang-Chi',
  //       description: 'Shang-Chi debe enfrentar el pasado que creía haber dejado atrás cuando se ve arrastrado a la red de la misteriosa organización de los Diez Anillos.',
  //         urlImg:'../../assets/img/shang-chi.pelicula.jpg',
  //         point:9.0,
  //         category:'movies',
  //     },

  //     {
  //       id:6,
  //       name:  'Stranger Things',
  //       description: 'Cuando un niño desaparece, un pequeño pueblo descubre un misterio que involucra experimentos secretos, fuerzas sobrenaturales aterradoras y una niña extraña.',
  //         urlImg:'../../assets/img/strangerthings.serie.jpg',
  //         point:9.0,
  //         category:'series',
  //     },

  //     {
  //       id:7,
  //       name:  'The Big Bang Theory',
  //       description: 'Los físicos Leonard y Sheldon descubren que su círculo social centrado en los nerds con sus amigos Howard y Raj se expande cuando la aspirante a actriz Penny se muda a la casa de al lado.',
  //         urlImg:'../../assets/img/thebigbangtheory.serie.jpg',
  //          point:6.9,
  //        category:'series',
  //      },
  //    

}
