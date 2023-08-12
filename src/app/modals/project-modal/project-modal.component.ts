import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
})
export class ProjectModalComponent implements OnInit {

  @Input('project') project: any;

  constructor() { }

  ngOnInit() {
    console.log(this.project);
  }

}
