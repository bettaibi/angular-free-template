import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.scss']
})
export class LockscreenComponent implements OnInit {
  password: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)])
  }

  getPasswordErrors(): string{
    if(this.password.hasError('required')){
      return 'Password is required';
    }
    return 'The password must has at least 6 characters';
  }

}
