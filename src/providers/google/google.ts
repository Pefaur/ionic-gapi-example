import { Injectable } from '@angular/core';
import {GooglePlus} from "@ionic-native/google-plus";
import firebase from 'firebase/app';
import {BaseProvider} from "../base/base";
import {HttpClient} from "@angular/common/http";
import {Storage} from "@ionic/storage";
import { environment as ENV } from '../../environments/environment';
import {Subject} from "rxjs";

@Injectable()
export class GoogleProvider extends BaseProvider{

  constructor(public googlePlus: GooglePlus,
              public http: HttpClient,
              public storage: Storage) {
    super(http, storage);
  }

  login() {
      let subject = new Subject<any>();
      this.googlePlus.login({
        'scopes': 'https://www.googleapis.com/auth/gmail.readonly',
        'webClientId': '49577853171-g7kct8699i6spq30afatntpiqv0v98rn.apps.googleusercontent.com',
        'offline': false,
        'force': true
      }).then(
        res => {
          this.storage.set(ENV.STORAGE.TOKEN, res.accessToken).then(
            success => subject.next(res),
            error => subject.error(error)
          )
        },
        error => subject.error(error)
      );
      return subject;
  }

  getMessages(email: string) {
    return this.get('gmail/v1/users/' + encodeURI(email) + '/messages');
  }

  logout(){
    firebase.auth().signOut().then(function() {
      alert("logout successful");
    }, function(error) {
      console.log(error);
    });
  }

}
