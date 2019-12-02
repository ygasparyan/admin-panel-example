import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services';
import {  UsersModel } from '../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public users$: Observable<UsersModel> = this.usersService.getUsers();

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

}
