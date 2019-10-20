import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectData = {
    projectName: '',
    projectDesc: ''
  };
  projects: any;

  constructor(private project: ProjectsService, private router: Router) {}

  ngOnInit() {
    this.project.getProjects().subscribe((data: {}) => {
      this.projects = data;
      console.log(this.projects);
    });
    if (localStorage.length === 0) {
      this.router.navigate(['/']);
    }
  }

  createProject() {
    this.project.addProject(this.projectData).subscribe(
      res => {
        this.router.navigate(['/dashboard/board/' + res._id]);
      }
    );
  }

}
