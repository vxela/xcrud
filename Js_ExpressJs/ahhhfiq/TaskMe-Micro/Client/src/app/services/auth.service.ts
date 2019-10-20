import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private url = 'http://localhost:5003';

    constructor(private http: HttpClient, private router: Router ) { }

    registerUser(user) {
        return this.http.post<any>(`${this.url}/user/register`, user);
    }

    loginUser(user) {
        return this.http.post<any>(`${this.url}/user/login`, user);
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }

    getToken() {
        return localStorage.getItem('token');
    }
}
