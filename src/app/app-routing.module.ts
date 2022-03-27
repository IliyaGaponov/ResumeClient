import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EducationComponent } from './components/pages/education/education.component';
import { ExperienceComponent } from './components/pages/experience/experience.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
