import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any = {
    email: ""
  }

  constructor() { }
  
  loggedIn = false;

  isLoggedIn(){
    return this.loggedIn;
  }

  // async signInWithEmail(email: String, password: String){
  //   if (email === 'testuser' && password === 'temp') {
  //     this.loggedIn = true;
  //     alert("Sign in pressed");
  //   } else {
  //     throw new Error("Invalid credentials");
  //   }
  // }

  getUserData(){
    return this.userData;
  }

  signInWithGooglePopUp(){
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
      //google access token
      //result.credential.accessToken;
      this.loggedIn = true;
      this.userData.email = result.user.email;
    }).catch((error) => {
      //error.code, .message, .email
      console.log(error.message);
    })
  }
}
