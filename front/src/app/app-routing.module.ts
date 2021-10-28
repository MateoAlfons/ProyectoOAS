import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamListComponent } from './components/team-list/team-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/resultados',
    pathMatch: 'full'
  },
  {
    path: 'resultados',
    component: TeamListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
