import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { WohnungenComponent } from './wohnungen.component';

const routes: Routes = Route.withShell([
  { path: 'wohnungen', component: WohnungenComponent, data: { title: extract('Wohnungen') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WohnungenRoutingModule { }
