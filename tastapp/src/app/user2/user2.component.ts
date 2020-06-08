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

  // myusers$: Object;
  myusers$: Observable<User[]>;
  myusers: User[];

  constructor(private data: TestService) {}

  ngOnInit(){

    // this.data.getTest().subscribe(data =>(this.myusers=this.data));
    this.myusers$ = this.data.collection;

  }





}
