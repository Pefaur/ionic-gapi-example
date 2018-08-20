import {Component, ViewChild} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import {HomePage} from "../pages/home/home";

var config = {
  apiKey: "AIzaSyDFlZHACBUOctDBVbW_78t20pwY75pm8_U",
  authDomain: "vivo-test-42018.firebaseapp.com",
  databaseURL: "https://vivo-test-42018.firebaseio.com",
  projectId: "vivo-test-42018",
  storageBucket: "vivo-test-42018.appspot.com",
  messagingSenderId: "49577853171"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      firebase.initializeApp(config);

    });
  }
}

