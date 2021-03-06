import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
 import { OtherDetailsComponent } from './other-details/other-details.component';
import { Template1Component } from './template1/template1.component';





const routes: Routes = [
  {
    path:'',
    component:Form1Component
  }
  ,
  {
    path:'Skills',
    component:SkillsComponent
  }
  ,
  {
    path:'Experience',
    component:ExperienceComponent
  }
  ,
  {
    path:'Education',
    component:EducationComponent
  },
  {
    path:'OtherDetails',
    component:OtherDetailsComponent
  },

  {
    path:'template1',
    component:Template1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
