import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm: FormGroup;
  hide = true;
  themeList = ['dark-theme', 'dark-theme-b'];
  overlayContainer;
  constructor(private formBuilder: FormBuilder) {
    this.createForm()
    document.querySelector('html').classList.add('dark-theme');
  }


  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ])
      ],
      password: ['', Validators.required]
    });

  }

  getErrorMessage(field: string): string {
    switch (field) {
      case 'email' :
        return (this.loginForm.get('email').invalid && this.loginForm.get('email').touched) ? 'Please enter a valid email address' : '';
      default :
        return '';
    }
  }


}
