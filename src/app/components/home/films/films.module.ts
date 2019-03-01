import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import {FilmsComponent} from './films.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from '../../../material.module';


@NgModule({
  declarations: [FilmsComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule
  ]
})
export class FilmsModule { }
