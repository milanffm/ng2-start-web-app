import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { FinanzierungComponent } from './finanzierung.component';

const routes: Routes = Route.withShell([
  { path: 'finanzierung', component: FinanzierungComponent, data: { title: extract('Finanzierung') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FinanzierungRoutingModule { }
