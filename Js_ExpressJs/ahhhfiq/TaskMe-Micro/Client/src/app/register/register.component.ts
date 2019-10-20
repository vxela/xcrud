import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

    registerUserData = {
      username: '',
      password: ''
    };

    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit() {
    }

    register() {
        this.auth.registerUser(this.registerUserData)
        .subscribe(
            res => {
                const getToken = res.data.token;
                localStorage.setItem('token', getToken);
                this.router.navigate(['/dashboard']);
            },
            err => console.log(err)
        );
    }
}
