import { Component, ElementRef, Input, OnInit } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cvd-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  faTimes = faTimes;

  @Input() id?: string;
  @Input() title?: string;
  @Input() img_src?: string;
  nativeElement?: HTMLElement;

  constructor(el: ElementRef) {
    this.nativeElement = el.nativeElement;
    if (this.nativeElement) {
      this.nativeElement.classList.add("modal");
      this.nativeElement.classList.add("fade");
      this.nativeElement.setAttribute("tabindex", "-1");
      this.nativeElement.setAttribute("aria-hidden", "true");
    }
  }

  ngOnInit(): void {
    if (this.id && this.nativeElement) {
      this.nativeElement.setAttribute("id", this.id);
      this.nativeElement.setAttribute("aria-labelledby", this.id + "Label");
    }
  }

}
