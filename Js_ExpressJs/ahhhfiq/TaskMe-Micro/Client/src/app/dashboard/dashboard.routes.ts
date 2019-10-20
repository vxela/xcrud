import { Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { BoardComponent } from './board/board.component';
import { AuthGuard } from '../services/auth.guard';
import { UserComponent } from './user/user.component';

export const dashboardRoutes: Routes = [
{
    path: 'dashboard',
    component: LayoutComponent,
    children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent},
    { path: 'board/:id', component: BoardComponent},
    { path: 'admin', component: AdminComponent }
    ],
    canActivate: [AuthGuard]
}
];
