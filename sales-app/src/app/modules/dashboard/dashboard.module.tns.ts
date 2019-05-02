import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamUpdateComponent } from '../update/components/team-update/team-update.component';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TeamListComponent,TeamUpdateComponent],
  imports: [
    DashboardRoutingModule,
    NativeScriptCommonModule,
    NativeScriptUIListViewModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
