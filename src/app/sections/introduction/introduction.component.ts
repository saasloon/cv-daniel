import { Component, OnInit } from '@angular/core';
import { SectionComponent } from '../section.component';

@Component({
  selector: 'cvd-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit, SectionComponent {

  id: string = "introduction";
  name: string = "Introduction";

  constructor() { }

  ngOnInit(): void {
  }

}
