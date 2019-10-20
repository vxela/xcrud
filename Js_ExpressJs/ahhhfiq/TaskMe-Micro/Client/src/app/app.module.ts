import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.route';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';


@NgModule({
declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent
],
imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(APP_ROUTES),
    DashboardModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
],
providers: [AuthService, AuthGuard,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    }],
bootstrap: [AppComponent],
})
export class AppModule { }
