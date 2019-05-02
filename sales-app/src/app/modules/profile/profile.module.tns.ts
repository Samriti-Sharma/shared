import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from './components/login/login.component';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ProfileRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProfileModule { }
