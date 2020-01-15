import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// httpclient module is depending upon httpClientModule
// so should register httpClientModule in app.module.ts
//this service so should use constructor arguments

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employeeData=[
    {
      emp_id:'ty001',
      emp_name:'diwakar',
      emp_gender:'male',
      emp_age:23,
      emp_company:'microsoft',
      emp_salary:40000},
      {
        emp_id:'ty001',
        emp_name:'diwakar',
        emp_gender:'male',
        emp_age:23,
        emp_company:'microsoft',
        emp_salary:40000},
        {
          emp_id:'ty001',
          emp_name:'diwakar',
          emp_gender:'male',
          emp_age:23,
          emp_company:'microsoft',
          emp_salary:40000},
  ]


 posts:any[]; //for placeholderjason
  users:any[];

  private base_path='https://jsonplaceholder.typicode.com/posts';
 private user_data="https:api.github.com/users"; //github api url

  constructor(private http:HttpClient) {
    //this.http.get(this.base_path).toPromise().then().catch()  promise way
   this.http.get<any>(this.base_path).subscribe(data=>{
  this.posts=data;
  })

    this.http.get<any>(this.user_data).subscribe(data=>{
      this.users=data;
    })
   }

  employee=[
    {empId:101,
    name:'Mahi',
    salary:25000,
    Designation:'FullStackDevops',
    company:'microsoft',
    location:'Bangalore',
    Doj:new Date('4/05/2018'),
    Photo:
    'https://cdn.pixabay.com/photo/2019/11/06/05/57/model-4605248__340.jpg',
    College:'Tit',},

    {empId:102,
    name:'diwakar',
    salary:40000,
    Designation:'FullStack',
    company:'ibm',
    location:'pune',
    Doj:new Date('1/06/2018'),
    Photo:
    'https://cdn.pixabay.com/photo/2019/11/08/10/56/woman-4611072__340.jpg',
    College:'tits',
     },
  ];

  addEmp(){
    this.employee.unshift({
      empId:102,
      name:'diwakar',
      salary:40000,
      Designation:'FullStack',
      company:'ibm',
      location:'pune',
      Doj:new Date('1/06/2018'),
      Photo:
      'https://cdn.pixabay.com/photo/2019/11/08/10/56/woman-4611072__340.jpg',
      College:'tits', 
    })
  }

  //removing employee
  removeEmp(emp){
    let index=this.employee.indexOf(emp);//first check indexOf
    this.employee.splice(index,1)
  };

  color="red";


  addPost(input:HTMLInputElement){
    // for creating we have to use http post method

    let post:any={title:input.value}
    input.value="";
    this.http.post<any>(this.base_path,post).subscribe(res=>{
      post.id=res.id;
      this.posts.splice(0,0,post);
      console.log(res);
      
    },
    error=>console.log(error)
    );
  }


  //delete method

  removePost(post){
    this.http.delete<any>(`${this.base_path}/${post.id}`).subscribe(_=>{
      let index=this.posts.indexOf(post);
      this.posts.splice(index,1);
    });

  }

  ngOnInit() {

  }
}
