import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { EnterComponent } from '../routes/enter/enter.component';



@NgModule({
  declarations: [
    CardComponent,


  ],
  imports: [
    CommonModule,
  ],
  exports: [
   CardComponent,
    ],
})
export class SharedModule { }
