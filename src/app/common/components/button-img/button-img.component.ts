import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cvd-button-img',
  templateUrl: './button-img.component.html',
  styleUrls: ['./button-img.component.css']
})
export class ButtonImgComponent implements OnInit {
  faPlus = faPlus;

  @Input() src: string = '';
  @Input() makeRound: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
