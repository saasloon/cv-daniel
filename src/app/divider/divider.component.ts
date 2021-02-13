import { Component, Input, OnInit } from '@angular/core';

import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cvd-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {
  faStar = faStar;

  @Input() color: string = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}
