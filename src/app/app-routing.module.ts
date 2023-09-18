import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogArticleComponent } from './pages/combined/blog-article/blog-article.component';
import { BlogComponent } from './pages/combined/blog/blog.component';
import { ComingSoonComponent } from './pages/combined/coming-soon/coming-soon.component';
import { FaqComponent } from './pages/combined/faq/faq.component';
import  { FeaturesComponent } from './pages/combined/features/features.component';

const routes: Routes = [
  {path:'blog', title: 'QZed | Blog', component: BlogComponent},
  {path: 'blog/:id', component: BlogArticleComponent}, // title is set in BlogArticleComponent
  {path:'coming-soon', title: 'QZed | Coming Soon', component: ComingSoonComponent},
  {path:'faq', title: 'QZed | FAQ', component: FaqComponent},
  {path:'features', title: 'QZed | Features', component: FeaturesComponent},
  {path:'', redirectTo: 'coming-soon', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
