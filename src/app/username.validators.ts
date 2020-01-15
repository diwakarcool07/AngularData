import { AbstractControl, ValidationErrors } from '@angular/forms';

//if you want to create custom validators use base class called abstractControl
//in angular we have builtin Validators and this Validators also use base class called AbstractControl

export class UsernameValidators{
   static noSpaceBetweenUsername(control:AbstractControl):ValidationErrors | null{
       // to map validation use onemore class called ValidationErrors
        if((control.value as string).indexOf(" ")>=0){
            return{noSpaceBetweenUsername:true};
        }
            else{
                return null;
            }
        
    }
    static unique(u:AbstractControl):ValidationErrors | null{
        if(u.value==="diwakar"){
            return {unique:true}
        }
        else{
            return null
        }
    }

}