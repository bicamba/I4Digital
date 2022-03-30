import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
  
import { AccessComponent } from './access.component'; 
//-- 
import { HomeComponent } from '../pages/users/home/home.component';  
import { UsersComponent } from '../pages/users/users/users.component';
import { AlbumsComponent } from '../pages/users/albums/albums.component';
import { PublicationsComponent } from '../pages/users/publications/publications.component'; 

export const routesAccess: Routes = [
  {
    path: "home",
    component: AccessComponent,
    children: [
      { path: '',  component: HomeComponent },
      { path: 'menu-home',  component: HomeComponent }, 
      { path: 'users', component: UsersComponent },
      { path: 'albums', component: AlbumsComponent },
      { path: 'publications', component: PublicationsComponent }
    ]
  },
  { path: '', redirectTo: 'inicio-coomeva', component: AccessComponent },
  { path: '**', pathMatch:"full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forChild(routesAccess)],
  exports: [RouterModule]
})
export class AccessRouting { }

//export const routingComponents=[ AdministrationComponent, MenuComponent,AccessComponent];
