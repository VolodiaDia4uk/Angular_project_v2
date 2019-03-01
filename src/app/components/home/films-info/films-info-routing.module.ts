import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilmsInfoComponent} from './films-info.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsInfoRoutingModule { }
