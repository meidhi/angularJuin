import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private pCollection: Observable<User[]>;
  private urlApi = "https://testaltareawebapp.azurewebsites.net/collaborateur/dto";

  constructor(private http: HttpClient) {

    this.pCollection = this.http.get<User[]>(`${this.urlApi}`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new User(obj)
        })
      })
    );
  }

  get collection(): Observable<User[]> {
    return this.pCollection;
  }

  set collection(col: Observable<User[]>) {
    this.pCollection = col;
  }

}

