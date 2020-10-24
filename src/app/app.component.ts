import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      var firebaseConfig = {
        apiKey: "AIzaSyC-a3rCn9bVJdnsBPjWUlSnHAr6cBqjOHo",
        authDomain: "csd203-js.firebaseapp.com",
        databaseURL: "https://csd203-js.firebaseio.com",
        projectId: "csd203-js",
        storageBucket: "csd203-js.appspot.com",
        messagingSenderId: "654237263862"
      }

      firebase.initializeApp(firebaseConfig);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
