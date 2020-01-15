import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users=[{
    name:'diwakar',
    age:22,
    company:'microsoft',
    salary:40000,
    designation:'fullStack',
    Doj:new Date('1/3/2000'),
    location:'Pune',
    Education:'Be',
    Stream:'CSE'
  },
  {
    name:'Mahi',
    age:38,
    company:'BCCI',
    salary:40000,
    designation:'WICKETKEEPER',
    Doj:new Date('1/3/2000'),
    location:'RANCHI',
    Education:'Be',
    Stream:'CSE'
  },{
    name:'Virat',
    age:22,
    company:'bcci',
    salary:40000,
    designation:'fullStack',
    Doj:new Date('1/3/2000'),
    location:'Pune',
    Education:'Be',
    Stream:'CSE'
  },{
    name:'diwakar',
    age:22,
    company:'microsoft',
    salary:40000,
    designation:'fullStack',
    Doj:new Date('1/3/2000'),
    location:'Pune',
    Education:'Be',
    Stream:'CSE'
  },{
    name:'diwakar',
    age:22,
    company:'microsoft',
    salary:40000,
    designation:'fullStack',
    Doj:new Date('1/3/2000'),
    location:'Pune',
    Education:'Be',
    Stream:'CSE'
  },{
    name:'diwakar',
    age:22,
    company:'microsoft',
    salary:40000,
    designation:'fullStack',
    Doj:new Date('1/3/2000'),
    location:'Pune',
    Education:'Be',
    Stream:'CSE'
  },{
    name:'diwakar',
    age:22,
    company:'microsoft',
    salary:40000,
    designation:'fullStack',
    Doj:new Date('1/3/2000'),
    location:'Pune',
    Education:'Be',
    Stream:'CSE'
  }];

  userProfile='https://d2c7ipcroan06u.cloudfront.net/wp-content/uploads/2019/06/20190528141L-696x392.jpg';

  keyupEvent(event){
    console.log(event.target.value); 
  }

  //angular way
  angularWayeventfilter(event){
    console.log(event.target.value); 
  }

  //checking taxt with template variable and getting value through angular

  checkUserName(anumanu){
    console.log(anumanu);  
  }

  constructor() { }

  ngOnInit() {
  }

}
