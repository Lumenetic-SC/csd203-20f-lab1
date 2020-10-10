import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  
  loggedIn = false;

  isLoggedIn(){
    return this.loggedIn;
  }

  signInWithEmail(){
    this.loggedIn = true;
    alert("Sign in pressed");
  }
}
