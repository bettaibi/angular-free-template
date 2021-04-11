import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'app/services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        
      ]))
    }, (formGroup: FormGroup) => {return PasswordValidator.areEqual(formGroup)});
  }

  getEmailErrors(): string{
    if(this.formGroup.get('email').hasError('email')){
      return 'Invalid Email';
    }
    else{
      return 'Email is required';
    }
  }

  getPasswordErrors(): string{
    if(this.formGroup.get('password').hasError('required')){
      return 'Password is required';
    }
    else{
      return 'The password must has at least 6 characters';
    }
  }

  handleSubmit() :void{
    console.log(this.formGroup.value)
    this.sharedService.showMsg('Your account has successfully created');
    this.router.navigateByUrl('/');
  }

}

class PasswordValidator  {

  static areEqual(group: FormGroup){
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? {areEqual: null}: {areEqual: true};

  }
}
