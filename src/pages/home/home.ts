import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import {GoogleProvider} from "../../providers/google/google";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GooglePlus]
})
export class HomePage {

  public authResponse: any;
  public isLoggedIn: boolean;

  constructor(public navCtrl: NavController,
              public google: GoogleProvider) {
  }

  loginWithGoogle(): void{
    this.google.login().subscribe(
      res => {
          if(res.accessToken) {
            this.isLoggedIn = true;
            this.authResponse  = res;
          }
      }
    )
  }

  logout(){
    this.google.logout();
  }

}
