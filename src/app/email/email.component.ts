import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private restService:HttpService) { }
posts:any[];
  ngOnInit() {

    this.restService.getPosts().subscribe(post=>{
      console.log(post)
      this.posts=post;
      
    })
  }

}
