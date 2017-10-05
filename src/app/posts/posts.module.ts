import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PostRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    PostRoutingModule
  ],
  declarations: [
    PostsComponent
  ]
})
export class PostsModule { }
