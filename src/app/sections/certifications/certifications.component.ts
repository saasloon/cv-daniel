import { Component, OnInit } from '@angular/core';

import { SectionComponent } from '../section.component';

@Component({
  selector: 'cvd-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit, SectionComponent {

  id: string = "certificates";
  name: string = "Certificates";

  constructor() { }

  ngOnInit(): void {
  }

}
