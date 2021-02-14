import { Component, OnInit } from '@angular/core';
import { SectionComponent } from '../../section.component';

@Component({
  selector: 'cvd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, SectionComponent {

  id: string = "header";

  constructor() { }

  ngOnInit(): void {
  }

}
