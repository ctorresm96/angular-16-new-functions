import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersHttp {
  //   constructor(httpClient: HttpClient) {}

  getUsers() {
    return of([
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Jane' },
    ]).pipe(delay(5000));
  }
}
