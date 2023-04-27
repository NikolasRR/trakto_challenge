import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { SignInScreenComponent } from './sign-in-screen/sign-in-screen.component';
import { SignInScreenModule } from './sign-in-screen/sign-in-screen.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'sign-in', component: SignInScreenComponent },
      { path: 'dashboard', component: AppComponent }
    ]),
    HttpClientModule,
    SignInScreenModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
