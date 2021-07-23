import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {HttpClient ,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  
  constructor( private http:HttpClient) { }

  item={
    name:"",
    position:"",
    organization:"",
    testimonial:"",
    course_title:"",
    image:""

  }

  
  
  gettestimonials(){
    return this.http.get("http://localhost:1111/testimonials");
  }

  newTestimonial(item:any)
  {   
    return this.http.post("http://localhost:1111/insert",{"testimonial":item})
    .subscribe(data =>{console.log(data)})
  }
  

  }






