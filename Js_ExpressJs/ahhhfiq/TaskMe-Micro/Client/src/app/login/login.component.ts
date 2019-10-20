import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { restoreView } from '@angular/core/src/render3';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = false;

  loginUserData = {
    username: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.auth.loginUser(this.loginUserData).subscribe(
      res => {
        const getToken = res.data.token;
        localStorage.setItem('token', getToken);
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
