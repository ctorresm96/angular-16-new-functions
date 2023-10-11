import { Component, OnInit } from '@angular/core';
import { UsersHttp } from '../../http/users.http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private http: UsersHttp) {}

  ngOnInit(): void {
    this.http.getUsers().subscribe({
      next: (users) => {
        console.log(users);
      },
    });
  }
}
