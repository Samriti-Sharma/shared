import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamUpdateComponent } from '../update/components/team-update/team-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamListService } from './services/team-list.service';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, TeamListComponent,TeamUpdateComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,FormsModule, ReactiveFormsModule
    
  ],
  // providers:[TeamListService]
})
export class DashboardModule { }
