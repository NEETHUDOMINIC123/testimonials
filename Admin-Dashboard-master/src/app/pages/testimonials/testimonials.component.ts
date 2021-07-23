import { Component, OnInit } from '@angular/core';

import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";
import { NbWindowService } from '@nebular/theme';
import { TestimonialFormComponent } from '../testimonial-form/testimonial-form.component';
import { TestimonialsService } from '../testimonials.service';

import { Router } from '@angular/router';

@Component({
  selector: 'ngx-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonials={
    name:"",
    position:"",
    organization:"",
    testimonial:"",
    course_title:"",
    Image:""
  }

  constructor(private windowService:NbWindowService,private testimonialsService:TestimonialsService,private router:Router) { }

  ngOnInit(): void {

      this.testimonialsService.gettestimonials().subscribe((data)=>{
      this.testimonials=JSON.parse(JSON.stringify(data));
    })
  }
addTestimonial(){
  this.windowService.open(TestimonialFormComponent, { title: 'Add testimonial'});
}

}
