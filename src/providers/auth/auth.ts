import { Injectable } from '@angular/core';
import {GooglePlus} from "@ionic-native/google-plus";
import { Observable } from "rxjs/Observable";
import firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

  constructor(public googlePlus: GooglePlus) {
    console.log('Hello AuthProvider Provider');
  }

  googleLogin() {
    return Observable.create(observer => {
      return this.googlePlus.login({
        'scopes': 'https://www.googleapis.com/auth/gmail.readonly',
        'webClientId': '49577853171-g7kct8699i6spq30afatntpiqv0v98rn.apps.googleusercontent.com',
        'offline': true,
        'force': true
      })
        .then( res => {
          const firecreds = firebase.auth.GoogleAuthProvider.credential(res.idToken);
          firebase.auth().signInWithCredential(firecreds)
            .then( success => { observer.next(success); })
            .catch(error => {
              observer.error(error);
            });
        });
    })
  }

  logout(){
    firebase.auth().signOut().then(function() {
      alert("logout successful");
    }, function(error) {
      console.log(error);
    });
  }

}
