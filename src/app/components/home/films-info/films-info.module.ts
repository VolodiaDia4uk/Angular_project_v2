import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsInfoRoutingModule } from './films-info-routing.module';
import {FilmsInfoComponent} from './films-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from '../../../material.module';

@NgModule({
  declarations: [FilmsInfoComponent],
  imports: [
    CommonModule,
    FilmsInfoRoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule
  ]
})
export class FilmsInfoModule { }
