import { Component, OnInit } from '@angular/core';

import { SectionComponent } from '../section.component';

@Component({
  selector: 'cvd-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, SectionComponent {

  id: string = "education";
  name: string = "Education";

  constructor() { }

  ngOnInit(): void {
  }

}
