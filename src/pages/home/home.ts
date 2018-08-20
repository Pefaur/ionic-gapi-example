import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
import {AuthProvider} from "../../providers/auth/auth";
import {InAppBrowser, InAppBrowserEvent} from "@ionic-native/in-app-browser";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GooglePlus]
})
export class HomePage {

  displayName: any;
  email: any;
  photoURL: any;
  isLoggedIn:boolean = false;

  constructor(public navCtrl: NavController,
              public authProvider: AuthProvider,
              private inAppBrowser: InAppBrowser,
              private googlePlus: GooglePlus) {



  }

  loginWithGoogle(): void{
    this.googlePlus.login({
        'scopes': 'https://www.googleapis.com/auth/gmail.readonly',
        'webClientId': '49577853171-g7kct8699i6spq30afatntpiqv0v98rn.apps.googleusercontent.com',
        'offline': false,
        'force': true
      }
    ).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    )

  }
  loginWithGoogle2(): void{
    this.authProvider.googleLogin().subscribe((res) => {
      console.log(res);
      this.email = res.email;
      this.displayName = res.displayName;
      this.photoURL = res.photoURL;
      this.isLoggedIn = true;
    }, err =>{
      console.log('err', err);
    });
  }

  logout(){
    this.authProvider.logout();
    this.isLoggedIn = false;
  }

}
