import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  checkngmodeldetails(y){
  console.log(y);
  
  }

  submit(x){   //for submitting form
    console.log(x.value);
    
  }

  ngOnInit() {
  }

}
