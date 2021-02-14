import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { SectionComponent } from '../../section.component';

@Component({
  selector: 'cvd-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, SectionComponent {
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl('')
  });

  id: string = "contact";
  name: string = "Contact";

  constructor() { }

  ngOnInit(): void {
  }

  onFocus(element: HTMLElement, focus: boolean) {
    if (focus)
      element.classList.add("floating-label-form-group-with-focus");
    else
      element.classList.remove("floating-label-form-group-with-focus");
  }

  onValueChange(value: string, element: HTMLElement) {
    if (value)
      element.classList.add("floating-label-form-group-with-value");
    else
      element.classList.remove("floating-label-form-group-with-value");
  }

}
