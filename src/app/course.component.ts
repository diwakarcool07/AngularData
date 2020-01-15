import { Component } from "@angular/core";

@Component({
    selector:'course',
    templateUrl: 'course.component.html'
})

export class CourseComponent{
    courses:string[]=["java","angular","nodejs"]
}