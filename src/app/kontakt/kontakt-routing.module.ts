import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { KontaktComponent } from './kontakt.component';

const routes: Routes = Route.withShell([
  { path: 'kontakt', component: KontaktComponent, data: { title: extract('Kontakt') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class KontaktRoutingModule { }
