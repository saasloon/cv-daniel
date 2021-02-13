import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { SectionComponent } from '../section.component';

@Component({
  selector: 'cvd-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit, SectionComponent {
  faPlus = faPlus;

  id: string = "work";
  name: string = "Work";

  constructor() { }

  ngOnInit(): void {
  }

}
