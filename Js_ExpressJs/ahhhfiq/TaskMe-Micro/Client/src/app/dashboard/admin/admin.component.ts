import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  cardCount: any;
  projectCount: any;
  userCount: any;
  adminCount: any;

  listData: any;

  user: any;
  projectDetails: any;
  adminDetails: any;
  taskDetails: any;

  errData: any;

  userDetails: {
    user: '';
  };

  adminUser: {
    user: '';
  };
  deleteUserDetails: {
    user: '';
  };

  constructor(private admin: AdminService) {}

  ngOnInit() {
    this.getAllData();
    this.clearInputs();
  }

  clearInputs() {
    this.userDetails = null;
    this.adminUser = null;
    this.deleteUserDetails = null;
  }

  getAllData() {
    try {
      this.admin.getProjectCount().subscribe((data: {}) => {
        this.projectCount = data;
      });
      this.admin.getUserCount().subscribe((data: {}) => {
        this.userCount = data;
      });
      this.admin.getCardCount().subscribe((data: {}) => {
        this.cardCount = data;
      });
      this.admin.getAdminCount().subscribe((data: {}) => {
        this.adminCount = data;
      });
    } catch (error) {
      console.log(error);
    }
  }

  createAdmin() {
    const confirmRequest = confirm('Do you want to add this user as admin?');

    if (confirmRequest === true) {
      this.admin.adminify(this.userDetails).subscribe(res => {
        this.ngOnInit();
      });
    }
  }
  removeAdmin() {
    const confirmRequest = confirm('Do you want to remove this user as admin?');
    if (confirmRequest === true) {
      this.admin.removeAdmin(this.adminUser).subscribe(res => {
        this.ngOnInit();
      });
    }
  }
  deleteUser() {
    const confirmRequest = confirm('Do you want to delete this user?');

    if (confirmRequest === true) {
      this.admin.deleteUser(this.deleteUserDetails).subscribe(res => {
        this.ngOnInit();
      });
    }
  }

  getUsernames() {
    this.admin.getUsers().subscribe((data: {}) => {
      this.user = data;
    });
  }
  getProjects() {
    this.admin.getProjects().subscribe((data: {}) => {
      this.projectDetails = data;
    });
  }
  getTasks() {
    this.admin.getTasks().subscribe((data: {}) => {
      this.taskDetails = data;
    });
  }
  getAdmins() {
    this.admin.getAdmins().subscribe((data: {}) => {
      this.adminDetails = data;
      console.log(data);
    });
  }

  getList(type) {
    switch (type) {
      case 1:
        this.listData = 1;
        this.getProjects();
        break;
      case 2:
        this.listData = 2;
        this.getUsernames();
        break;
      case 3:
        this.listData = 3;
        this.getTasks();
        break;
      case 4:
        this.listData = 4;
        this.getAdmins();
        break;
      default:
        this.listData = 'Nothing to show';
    }
  }
}
