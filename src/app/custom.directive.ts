import { ElementRef, Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[color]'
})

export class CustomDirective{
    constructor(el:ElementRef){
        el.nativeElement.style.background='red';
        el.nativeElement.style.padding='10px';
        el.nativeElement.style.border="1px solid #111";
        el.nativeElement.style.borderRadius="5px";

    }

    @HostBinding("style.background") background="green";

    @HostListener("click") clickEvent(){
        alert("hello host");
    }

    @HostListener("mouseenter") mouseenter(){
        console.log("mouse enterd");
        this.background="purple";
        
    }
    @HostListener("mouseleave") mouseleave(){
        console.log("mouse leave....");
        this.background="yellow";
        
    }
}

