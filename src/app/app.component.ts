import { Component, ComponentFactory, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { SectionComponent } from './sections/section.component';
import { SectionDirective } from './sections/section.directive';
import { SectionService } from './sections/section.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'cv-daniel';

  name: string = "Daniel Julián Aguilar";

  currentSection: string = '';
  addClass: boolean = true;

  @ViewChild(SectionDirective, {static: true}) sectionsHost?: SectionDirective;

  tagNames: string[] = ['SECTION'];

  navItems: {id: string, name: string}[] = [];
  first_item_id: string = '';

  constructor(
    private sectionService: SectionService,
    private componentFactoryResolver: ComponentFactoryResolver) {

    }

  ngOnInit() {
    if (this.sectionsHost) {
      const viewContainerRef = this.sectionsHost.viewContainerRef;
      viewContainerRef.clear();
      const sections = this.sectionService.getSections();
      for (let i = 0; i < sections.length; i++) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory<SectionComponent>(sections[i].component);
        const componentRef = viewContainerRef.createComponent(componentFactory);
        let htmlElement: HTMLElement = componentRef.location.nativeElement;
        htmlElement.id = componentRef.instance.id;
        this.tagNames.push(htmlElement.tagName);
        if (i == 0) {
          this.first_item_id = componentRef.instance.id;
          this.currentSection = this.first_item_id;
        } else {
          this.navItems.push({id: componentRef.instance.id, name: componentRef.instance.name});
        }
      }
    }
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  collapse(navbarCollapse: HTMLElement, navbarButton: HTMLButtonElement) {
    if (navbarCollapse.classList.contains("show"))
      navbarButton.click();
  }
}
