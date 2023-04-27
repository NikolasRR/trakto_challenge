import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SignInScreenComponent } from './sign-in-screen.component';


@NgModule({
  declarations: [
    SignInScreenComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SignInScreenComponent
  ]
})
export class SignInScreenModule { }
