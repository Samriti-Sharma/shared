import { Routes } from '@angular/router';


export const routes: Routes = [
  {path:'',
  loadChildren:"./modules/profile/profile.module#ProfileModule"},
  {path:'dashboard',
  loadChildren:"./modules/dashboard/dashboard.module#DashboardModule"},
  
];
