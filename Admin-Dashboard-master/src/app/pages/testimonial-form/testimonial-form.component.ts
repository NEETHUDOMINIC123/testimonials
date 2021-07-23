import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TestimonialsService } from '../testimonials.service';
import { Router } from '@angular/router';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { NgModule } from '@angular/core';



@Component({
  selector: 'ngx-testimonial-form',
  templateUrl: './testimonial-form.component.html',
  styleUrls: ['./testimonial-form.component.scss']
})
export class TestimonialFormComponent implements OnInit {
 
  testimonialDetails={
    name:"",
    position:"",
    organization:"",
    testimonial:"",
    course_title:"",
    image:""

  }

 constructor(private testimonialsService:TestimonialsService,private router:Router) { }
  ngOnInit(): void {
  }
  addTestimonial(){
    this.testimonialsService.newTestimonial(this.testimonialDetails);
    console.log("called");
    alert("success")
    this.router.navigate([TestimonialsComponent]);
  }





}

