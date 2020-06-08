import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  myusers: Observable<User[]>;
  private pCollection: Observable<User[]>;

  constructor(private http: HttpClient) {

    this.pCollection = this.http.get<User[]>("https://testaltareawebapp.azurewebsites.net/collaborateur/dto").pipe(
      map((tab) =>
        tab.map((obj) =>
          new User(obj)
        })
      })
    );
   }

  public getTest() {
    // this.http.get<Observable<User>[]>('https://testaltareawebapp.azurewebsites.net/collaborateur/dto').subscribe(data => {
    //   this.myusers = data;
    //   return this.myusers;
    // console.log(this.myusers[1]);
  }
  get collection(): Observable<User[]> {
    return this.pCollection;
  }

  set collection(col: Observable<User[]>) {
    this.pCollection = col;
  }

}

