import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComingSoonComponent } from './pages/combined/coming-soon/coming-soon.component';

const routes: Routes = [
  {path:'coming-soon', title: 'QZed | Coming Soon', component: ComingSoonComponent},
  {path:'', redirectTo: 'coming-soon', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
