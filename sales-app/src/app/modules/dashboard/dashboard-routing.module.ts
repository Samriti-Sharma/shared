import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { routes } from './dashboard.common';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
