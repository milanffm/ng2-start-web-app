import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { ObjektComponent } from './objekt.component';

const routes: Routes = Route.withShell([
  { path: 'objekt', component: ObjektComponent, data: { title: extract('Objekt') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ObjektRoutingModule { }
