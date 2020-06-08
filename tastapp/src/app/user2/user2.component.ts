import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {

  public collection$: Observable<User[]>;



  constructor(private data: TestService) { }

  ngOnInit(): void {

    this.collection$ = this.data.collection;
    console.log(this.data.collection);
    console.log(" ici ==> " + this.collection$);

  }





}
