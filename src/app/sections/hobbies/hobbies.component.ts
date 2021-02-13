import { Component, OnInit } from '@angular/core';

import { SectionComponent } from '../section.component';

@Component({
  selector: 'cvd-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit, SectionComponent {

  id: string = "hobbies";
  name: string = "Hobbies";

  constructor() { }

  ngOnInit(): void {
  }

}
