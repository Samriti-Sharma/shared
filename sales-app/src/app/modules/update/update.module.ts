import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { TeamUpdateComponent } from './components/team-update/team-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeamListService } from '../dashboard/services/team-list.service';

@NgModule({
  declarations: [TeamUpdateComponent],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    FormsModule,
     ReactiveFormsModule ,
     HttpClientModule
  ],
  // providers:[TeamListService],
  exports:[TeamUpdateComponent],
})
export class UpdateModule { }
