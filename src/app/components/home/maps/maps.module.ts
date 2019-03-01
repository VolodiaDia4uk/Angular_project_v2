import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent} from './maps.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../material.module';

@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule
  ]
})
export class MapsModule { }
