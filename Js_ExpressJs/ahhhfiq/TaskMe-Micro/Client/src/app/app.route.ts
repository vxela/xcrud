import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';

export const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent }
];
