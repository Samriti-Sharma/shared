import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { UpdateRoutingModule } from './update-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TeamUpdateComponent } from './components/team-update/team-update.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { TeamListService } from '../dashboard/services/team-list.service';


@NgModule({
  declarations: [TeamUpdateComponent],
  imports: [
    UpdateRoutingModule,
    NativeScriptCommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule
  ],
  // providers:[TeamListService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UpdateModule { }
