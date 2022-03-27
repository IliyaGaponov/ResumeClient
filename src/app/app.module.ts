import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EducationComponent } from './components/pages/education/education.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ExperienceComponent } from './components/pages/experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/pages/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    HeaderComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
