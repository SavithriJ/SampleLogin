import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
