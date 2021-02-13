import { Injectable } from '@angular/core';
import { SectionItem } from './section-item';
import { SECTIONS } from '../sections';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor() { }

  getSections(): SectionItem[] {
    return SECTIONS.map(element => new SectionItem(element));
  }
}
