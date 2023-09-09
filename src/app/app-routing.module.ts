import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './pages/combined/blog/blog.component';
import { ComingSoonComponent } from './pages/combined/coming-soon/coming-soon.component';
import { FaqComponent } from './pages/combined/faq/faq.component';

const routes: Routes = [
  {path:'blog', title: 'QZed | Blog', component: BlogComponent},
  {path:'coming-soon', title: 'QZed | Coming Soon', component: ComingSoonComponent},
  {path:'faq', title: 'QZed | FAQ', component: FaqComponent},
  {path:'', redirectTo: 'coming-soon', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
