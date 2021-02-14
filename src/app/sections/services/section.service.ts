import { Injectable } from '@angular/core';
import { SectionItem } from '../section-item';
import { SECTIONS_COMPONENTS } from '../components';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor() { }

  getSections(): SectionItem[] {
    return SECTIONS_COMPONENTS.map(element => new SectionItem(element));
  }
}
