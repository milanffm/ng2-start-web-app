import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { AusstattungComponent } from './ausstattung.component';

const routes: Routes = Route.withShell([
  { path: 'ausstattung', component: AusstattungComponent, data: { title: extract('Ausstattung') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AusstattungRoutingModule { }
