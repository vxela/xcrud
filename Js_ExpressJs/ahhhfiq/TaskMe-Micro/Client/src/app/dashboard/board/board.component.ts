import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { CardService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  projectData: any;
  cardData: any;
  cardDetails = {
    task: ''
  };

  updateData = {
    projectTitle: '',
    projectDesc: ''
  };

  updateOpen = false;

  constructor(
    private project: ProjectsService,
    private card: CardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getData();
    this.clearInputs();
  }

  async getData() {
    try {
      this.project
        .getProject(this.route.snapshot.params['id'])
        .subscribe((data: {}) => {
          this.projectData = data;
          console.log(data);
        });
      this.card
        .getCards(this.route.snapshot.params['id'])
        .subscribe((data: {}) => {
          this.cardData = data;
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  clearInputs() {
    this.cardDetails.task = null;
    this.updateData.projectTitle = null;
    this.updateData.projectDesc = null;
  }

  deleteProject() {
    const confirmDelete = confirm('Do you want to delete this project');

    if (confirmDelete === true) {
      this.project.deleteProject(this.route.snapshot.params['id']).subscribe(
        res => {
          this.router.navigate(['/dashboard/home']);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  createCard() {
    console.log(this.cardDetails);
    this.card
      .addCard(this.cardDetails, this.route.snapshot.params['id'])
      .subscribe(res => {
        this.ngOnInit();
      });
  }

  deleteCard(id, task) {
    const confirmDelete = confirm(`Do you want to delete ${task}`);

    if (confirmDelete === true) {
      this.card.deleteCard(id).subscribe(
        res => {
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  setComplete(id) {
    this.card.updateStatus(id).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    );
  }

  toggleUpdate() {
    this.updateOpen = !this.updateOpen;
  }

  updateProject() {
    if (!this.updateData.projectTitle && !this.updateData.projectDesc) {
      alert('Nothing to update');
    } else if (!this.updateData.projectTitle) {
      const confirmUpdate = confirm('Do you want to update this project?');

      if (confirmUpdate === true) {
        this.updateData.projectTitle = this.projectData.projectName;
        this.project
          .updateProject(this.route.snapshot.params['id'], this.updateData)
          .subscribe(res => {
            this.ngOnInit();
            this.toggleUpdate();
          });
      }
    } else if (!this.updateData.projectDesc) {
      const confirmUpdate = confirm('Do you want to update this project?');

      if (confirmUpdate === true) {
        this.updateData.projectDesc = this.projectData.projectDesc;
        this.project
          .updateProject(this.route.snapshot.params['id'], this.updateData)
          .subscribe(res => {
            this.ngOnInit();
            this.toggleUpdate();
          });
      }
    } else {
      this.project
        .updateProject(this.route.snapshot.params['id'], this.updateData)
        .subscribe(res => {
          this.ngOnInit();
          this.toggleUpdate();
        });
    }
  }
}
