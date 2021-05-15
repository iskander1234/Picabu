import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {createViewChild} from '@angular/compiler/src/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  // tslint:disable-next-line:variable-name
  _exform : any;

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {

    this._exform = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ])
    });
  }

  // tslint:disable-next-line:typedef
  clicksub() {
    console.log(this._exform.value);
    const reset = this._exform.reset();
  }

  // tslint:disable-next-line:typedef
  get email() {
    return this._exform.get('email');
  }
  // tslint:disable-next-line:typedef
  get password() {
    return this._exform.get('password');
  }


  //  name?: string;
  //  @ViewChild('nameRef') nameElementRef?: ElementRef;
  //
  // // tslint:disable-next-line:typedef
  //  ngAfterViewInput(){
  //    this.nameElementRef?.nativeElement.focus();
  //  }
}
