import { Routes } from '@angular/router';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamUpdateComponent } from '../update/components/team-update/team-update.component';
import { AuthGuardService } from '../profile/Gaurd/auth-gaurd.service';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
    {
        path: 'team-list', component: TeamListComponent, canActivate: [AuthGuardService],
        children: [
            { path: 'add', component: TeamUpdateComponent },
            { path: 'edit/:id', component: TeamUpdateComponent },
        ]
    }


];
