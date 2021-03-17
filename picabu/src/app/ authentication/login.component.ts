import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {createViewChild} from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
   name?: string;
   @ViewChild('nameRef') nameElementRef?: ElementRef;

  // tslint:disable-next-line:typedef
   ngAfterViewInput(){
     this.nameElementRef?.nativeElement.focus();
   }
}
