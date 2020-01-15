import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule,Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { headerComponent } from './header.component';
import { CricketTeam } from './cricket.component';
import { CourseComponent } from './course.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserComponent } from './user/user.component';
import { EmployeeModule } from './employee/employee.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CustomDirective } from './custom.directive';
import { TextDirective } from './text.directive';
import { from } from 'rxjs';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { EmailComponent } from './email/email.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [  //adding component
    AppComponent,
    headerComponent,
    CricketTeam,
    CourseComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    PagenotfoundComponent,
    HomeComponent, //registered
    CustomDirective, TextDirective,
     SignupComponent,
     ContactComponent,
     EmailComponent,
     FilterPipe,
  ],
  imports: [     //adding module ex:Formsmodule,RouterModule,ReactiveFormsModule
    BrowserModule,
    EmployeeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'Contact',component:ContactComponent},
      {path:'Login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'Register',component:RegisterComponent},
      {path:'email',component:EmailComponent},
      {path:'**',component:PagenotfoundComponent}
    ])
  ],
  providers: [],  // adding services
  bootstrap: [AppComponent]  //bootstraping and root component
})
export class AppModule { }
