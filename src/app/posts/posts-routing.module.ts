import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { PostsComponent } from './posts.component';

const routes: Routes = Route.withShell([
  { path: 'posts', component: PostsComponent, data: { title: extract('Posts') } },
  { path: 'posts/:slug', component: PostsComponent }

]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PostRoutingModule { }
