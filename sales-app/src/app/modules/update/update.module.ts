import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { TeamUpdateComponent } from './components/team-update/team-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TeamUpdateComponent],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    FormsModule, ReactiveFormsModule 
  ],
  exports:[TeamUpdateComponent],
})
export class UpdateModule { }
