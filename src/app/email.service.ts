import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class EmailService{
    getEmails(){
        return [
            "diwakarcool07@gmail.com",
            "diwakarmentors@gmail.com",
            "iamdiwakarcool@gmail.com"
        ];
    }
}