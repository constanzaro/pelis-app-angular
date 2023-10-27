import { Component, Input } from '@angular/core';
import { IDataMoviesSeries } from 'src/app/components/routes/home/home.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent {

  @Input() cardData: IDataMoviesSeries = {} as IDataMoviesSeries;

  constructor() {
    // Constructor del componente CardComponent
  }
}






