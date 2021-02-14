import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { COMMON_COMPONENTS } from './common/components'
import { SECTIONS_COMPONENTS } from './sections/components';
import { CV_COMPONENTS } from './cv/components'

import { COMMON_DIRECTIVES } from './common/directives';
import { SECTIONS_DIRECTIVES } from './sections/directives';
import { AboutComponent } from './sections/components/about/about.component';

const COMPONENTS = [
  COMMON_COMPONENTS,
  SECTIONS_COMPONENTS,
  CV_COMPONENTS
];

const DIRECTIVES = [
  COMMON_DIRECTIVES,
  SECTIONS_DIRECTIVES
];

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    DIRECTIVES,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
