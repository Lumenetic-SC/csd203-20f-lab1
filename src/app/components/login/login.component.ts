import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {}

  // signIn(){
  //   this.auth.signInWithEmail(this.email, this.password)
  //     .then(() => {
  //       this.router.navigate(["/user-profile"], { queryParams: { id: 1 } })
  //     })
  //     .catch((error) => {
  //       alert(error)
  //     })
  // }

  signInWithGoogle(){
    this.auth.signInWithGooglePopUp();
  }
}
