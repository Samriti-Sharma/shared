import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import {routes } from './update.common';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRoutingModule { }
