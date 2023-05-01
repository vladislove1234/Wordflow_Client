import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  readonly authApiLink = 'http://localhost:3000/auth';

  constructor() { }

  login(username: string, password: string) {
    console.log('logining as ' + username + ' with password ' + password);
  }
}
