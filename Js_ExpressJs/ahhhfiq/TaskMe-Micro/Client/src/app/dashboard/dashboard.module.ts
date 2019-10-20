import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { BoardComponent } from './board/board.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AuthGuard } from '../services/auth.guard';
import { UserComponent } from './user/user.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
    declarations: [
        LayoutComponent,
        HomeComponent,
        AdminComponent,
        BoardComponent,
        NavbarComponent,
        UserComponent,
        ProjectComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(dashboardRoutes),
        NgbModule.forRoot(),
        FormsModule
    ],
    providers: [AuthGuard]
})
export class DashboardModule {}

