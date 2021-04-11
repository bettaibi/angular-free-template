import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
  }


  getEmailErrors(): string{
    if(this.email.hasError('email')){
      return 'Invalid Email';
    }
    else{
      return 'Email is required';
    }
  }

}
