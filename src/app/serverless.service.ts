import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerlessService {

  constructor(private http: HttpClient) { }

  public url : string = 'https://470c5664.eu-gb.apigw.appdomain.cloud/oscwi/entries';

  saveuser (user:any) :Observable<any>{
    return this.http.put(this.url, user)
  }

  getUser (): Observable<any>{
    return this.http.get(this.url);
  }
}
