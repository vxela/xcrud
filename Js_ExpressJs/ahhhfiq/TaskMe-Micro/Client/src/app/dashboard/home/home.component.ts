import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  user: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserDetails().subscribe((data: {}) => {
      this.user = data;
    });
  }

}
