import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { UpdateRoutingModule } from './update-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TeamUpdateComponent } from './components/team-update/team-update.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TeamUpdateComponent],
  imports: [
    UpdateRoutingModule,
    NativeScriptCommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UpdateModule { }
