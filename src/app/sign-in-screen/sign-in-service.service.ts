import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { enviroment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SignInServiceService {

  constructor(private http: HttpClient) { }

  submit(email: string, password: string) {
    return this.http.post(`${enviroment.api_url}/auth/signin`, { email: email, password: password });
  }
}
