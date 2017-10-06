import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { LageComponent } from './lage.component';

const routes: Routes = Route.withShell([
  { path: 'lage', component: LageComponent, data: { title: extract('Lage') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LageRoutingModule { }
