import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ListComponent } from './Components/list/list.component';
import { DetailsComponent } from './Components/details/details.component';
import { ChronologyComponent } from './Components/chronology/chronology.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { 
      title: 'Home',
      page: 'home'
    }
  },
  {
    path: 'characters',
    data: {
      page: 'charactersList',
      pageDetails: 'charactersDetails'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListComponent,
      },
      {
        path: ':name',
        pathMatch: 'full',
        component: DetailsComponent,
      }
    ]
  },
  {
    path: 'houses',
    data: {
      page: 'housesList',
      pageDetails: 'housesDetails'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListComponent
      },
      {
        path: ':name',
        pathMatch: 'full',
        component: DetailsComponent
      }
    ]
  },
  {
    path: 'chronology',
    component: ChronologyComponent,
    data: { 
      title: 'Chonology',
      page: 'chronology'
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: { 
      title: 'Home',
      page: 'home'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
