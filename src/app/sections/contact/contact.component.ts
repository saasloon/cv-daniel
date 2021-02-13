import { Component, OnInit } from '@angular/core';

import { SectionComponent } from '../section.component';

@Component({
  selector: 'cvd-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, SectionComponent {

  id: string = "contact";
  name: string = "Contact";

  constructor() { }

  ngOnInit(): void {
  }

}
