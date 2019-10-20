import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  user: any;

  updateUserData = {
    username: '',
    password: ''
  };

  ngOnInit() {
    this.userService.getUserDetails().subscribe((data: {}) => {
      console.log(data);
      this.user = data;
    });
  }

  deleteUser() {
    console.log(this.user.username);

    const confirmDelete = confirm('Do you want to delete this account?');

    if (confirmDelete === true) {
      this.userService.deleteUser(this.user.username).subscribe(res => {
        this.router.navigate(['/']);
      }, err => {
        console.log(err);
      });
    }
  }
  updateUser() {
    if (!this.updateUserData.username && !this.updateUserData.password) {
      alert('Nothing to update');
    } else if (!this.updateUserData.password) {
      alert('Key in your password');
    } else if (!this.updateUserData.username) {
      alert('Key in your new username');
    } else {
      const confirmUpdate = confirm('Do you want to update your details?');
      if (confirmUpdate === true ) {
        console.log(this.updateUserData);
        this.userService.updateUser(this.user.username, this.updateUserData).subscribe(res => {
          localStorage.removeItem('token');
          this.router.navigate(['/']);
        }, err => {
          console.log(err);
        });
      }
    }
  }
}
