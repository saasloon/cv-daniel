import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cvd-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent implements OnInit {
  faPlus = faPlus;

  @Input() src: string = '';
  @Input() makeRound: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
