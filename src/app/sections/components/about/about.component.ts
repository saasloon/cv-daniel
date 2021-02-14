import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { SectionComponent } from '../../section.component';

@Component({
  selector: 'cvd-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, SectionComponent {
  faDownload = faDownload;

  id: string = "about";
  name: string = "About me";

  constructor() { }

  ngOnInit(): void {
  }

}
