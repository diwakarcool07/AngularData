import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmploginComponent } from './emplogin/emplogin.component';
import { EmpregisterComponent } from './empregister/empregister.component';



@NgModule({
  declarations: [EmploginComponent, EmpregisterComponent],
  imports: [
    CommonModule
  ],
  exports:[EmploginComponent,EmpregisterComponent]
})
export class EmployeeModule { }
