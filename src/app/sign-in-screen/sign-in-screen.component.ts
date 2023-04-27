import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SignInServiceService } from './sign-in-service.service';

@Component({
  selector: 'app-sign-in-screen',
  templateUrl: './sign-in-screen.component.html',
  styleUrls: ['./sign-in-screen.component.css']
})
export class SignInScreenComponent {
  email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private service: SignInServiceService, private router: Router) { }

  updateEmail(e: KeyboardEvent) {
    this.email = (<HTMLInputElement>e.target).value;
  }

  updatePassword(e: KeyboardEvent) {
    this.password = (<HTMLInputElement>e.target).value;
  }

  handleSubmit(e: MouseEvent) {
    e.preventDefault();
    this.loading = true;
    this.service.submit(this.email, this.password)
      .subscribe({
        next: () => this.router.navigateByUrl("/dashboard"),
        error: err => {
          this.loading = false;
        }
      })
  }
}
