import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as ENV } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import {Storage} from "@ionic/storage";

@Injectable()
export class BaseProvider {

  constructor(public http: HttpClient, public storage: Storage) {}

  /** get token */
  private getAuthToken() {
    return Observable.fromPromise(this.storage.get(ENV.STORAGE.TOKEN));
  }

  /** GET */
  public get(url:string, body?:any) {
    return this.getAuthToken().flatMap( token => {
      return  this.http.get(ENV.API+url, {
        params: body,
        headers: new HttpHeaders().append('Authorization', "Bearer "+token)
      });
    })
  }

  /** POST */
  public post(url:string, body?:any) {
    return this.getAuthToken().flatMap( token => {
      return  this.http.post(ENV.API+url, body,{
        headers: new HttpHeaders().append('Authorization', "Bearer "+token)
      });
    })
  }

  /** PUT */
  public put(url:string, body?:any) {
    return this.getAuthToken().flatMap( token => {
      return  this.http.put(ENV.API+url, body,{
        headers: new HttpHeaders().append('Authorization', "Bearer "+token)
      });
    })
  }

  /** DELETE */
  public delete(url:string) {
    return this.getAuthToken().flatMap( token => {
      return  this.http.delete(ENV.API+url, {
        headers: new HttpHeaders().append('Authorization', "Bearer "+token)
      });
    })
  }
}



