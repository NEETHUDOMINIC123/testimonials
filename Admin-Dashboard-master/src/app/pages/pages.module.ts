import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { NbListModule,NbCardModule, NbWindowModule,




} from '@nebular/theme';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CourseFormComponent } from './course-form/course-form.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { UsersComponent } from './users/users.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ViewTestimonialComponent } from './view-testimonial/view-testimonial.component';
import { TestimonialFormComponent } from './testimonial-form/testimonial-form.component';
import { TestimonialsService } from './testimonials.service';
import { from } from 'rxjs';



@NgModule({
  imports: [
    FormsModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbListModule,
    NbCardModule,
    DragDropModule,
    NbWindowModule
  ],
  declarations: [
    PagesComponent,
    CoursesComponent,
    CourseFormComponent,
    ViewCourseComponent,
    StaffsComponent,
    StaffFormComponent,
    UsersComponent,
    TestimonialsComponent,
    ViewTestimonialComponent,
    TestimonialFormComponent,
    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {
}
