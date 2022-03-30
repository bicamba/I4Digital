
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AccessRouting } from './access-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { MenuComponent } from '../pages/menu/menu.component'; 
import { AccessComponent } from './access.component';    
//--
import { HomeComponent } from '../pages/users/home/home.component';   
import { UsersComponent } from '../pages/users/users/users.component';
import { AlbumsComponent } from '../pages/users/albums/albums.component';
import { PublicationsComponent } from '../pages/users/publications/publications.component'; 
import { PaginatorPipe } from 'src/app/pipes/paginator';
import { DataFilterGeneralPipe } from 'src/app/pipes/dataFilterGeneralPipe';

@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    AlbumsComponent,
    PublicationsComponent,
    MenuComponent,
    AccessComponent,
    PaginatorPipe,
    DataFilterGeneralPipe,  
  ],
  imports: [
    CommonModule,
    AccessRouting, FormsModule, ReactiveFormsModule
  ],
})
export class LayoutModule { }


