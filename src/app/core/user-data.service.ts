import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './user';
import { defaultDataServiceConfig } from './config';

export const mapServerToLocalUser = ({ id, name, username, email}): User => ({
  id, name, username, email,
});

@Injectable({ providedIn: 'root' })
export class UserEntityDataService extends DefaultDataService<User> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('User', http, httpUrlGenerator, defaultDataServiceConfig);
  }

  getAll(): Observable<User[]> {
    return super.getAll().pipe(map(users => users.map(mapServerToLocalUser)));
  }
}
