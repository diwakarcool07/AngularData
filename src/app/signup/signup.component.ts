import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { UsernameValidators } from '../username.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  form = new FormGroup({
    username:new FormControl("",[
      Validators.required,
      Validators.minLength(4),
      Validators.pattern("diwakar"),
      UsernameValidators.noSpaceBetweenUsername,
      UsernameValidators.unique
    ]),
    password:new FormControl("",[
      Validators.required,
      Validators.minLength(4),
      Validators.pattern("[a-z]{1,15}"), 
    ])
  });

  get username(){
    return this.form.get('username')
  }

  get password(){
    return this.form.get('password');
  }

  submit(x){
    console.log(x.value);
    
  }

  constructor() { }

  ngOnInit() {
  }

}
