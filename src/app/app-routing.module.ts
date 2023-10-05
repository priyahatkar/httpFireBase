import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashbordComponent } from './shared/components/post-dashbord/post-dashbord.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PostComponent } from './shared/components/post/post.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : '', component : PostDashbordComponent
  },
  {
    path : 'posts', component : PostDashbordComponent
  },
  {
    path : 'posts/add', component : PostFormComponent
  },
  {
    path : 'posts/:id', component : PostComponent
  },
  {
    path : 'posts/:postId/edit', component : PostFormComponent
  },
  {
    path :'pageNotFound', component : PageNotFoundComponent
  },
  {
    path : '**', redirectTo : 'pageNotFound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
