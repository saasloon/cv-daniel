import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxResizeObserverModule } from 'ngx-resize-observer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SECTIONS } from './sections';
import { SectionDirective } from './sections/section.directive';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DividerComponent } from './divider/divider.component';
import { CvCardComponent } from './cv-card/cv-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SECTIONS,
    SectionDirective,
    ScrollSpyDirective,
    DividerComponent,
    CvCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxResizeObserverModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
