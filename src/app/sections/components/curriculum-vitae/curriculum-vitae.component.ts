import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { SectionComponent } from '../../section.component';

@Component({
  selector: 'cvd-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']
})
export class CurriculumVitaeComponent implements OnInit, SectionComponent {
  faPlus = faPlus;

  id: string = "curriculum-vitae";
  name: string = "Curriculum Vitae";

  constructor() { }

  ngOnInit(): void {
  }

}
