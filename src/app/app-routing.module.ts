import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 
const routes: Routes = [
  {
    path: 'acceso',
    loadChildren: () => import('./components/access/access-layout.module').then(m => m.LayoutModule),
  },
 
  { path: '**', pathMatch: 'full', redirectTo: 'acceso' }
];



@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [LoginComponent];