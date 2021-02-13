import { Component, OnInit } from '@angular/core';

import { SectionComponent } from '../section.component';

@Component({
  selector: 'cvd-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, SectionComponent {

  id: string = "skills";
  name: string = "Skills";

  constructor() { }

  ngOnInit(): void {
  }

}
