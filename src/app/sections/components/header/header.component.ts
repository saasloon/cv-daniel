import { Component, OnInit } from '@angular/core';
import { SectionComponent } from '../../section.component';

@Component({
  selector: 'cvd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, SectionComponent {

  id: string = "header";

  constructor() { }

  ngOnInit(): void {
  }

}
