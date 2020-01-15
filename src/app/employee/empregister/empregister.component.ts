import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})
export class EmpregisterComponent implements OnInit {

  constructor() { }
register(x){
  console.log(x);
  
}

  ngOnInit() {
    
  }

}
