import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuard} from '../../services/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'films',
        loadChildren: './films/films.module#FilmsModule'
      },
      {
        path: 'films-info/:id',
        loadChildren: './films-info/films-info.module#FilmsInfoModule'
      },
      {
        path: 'films-favourite',
        loadChildren: './films-favourite/films-favourite.module#FilmsFavouriteModule'
      },
      {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
