import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = "https://api.github.com";

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get<any>(this.baseUrl + '/users');
  }

  getUser(username: string) {
    return this.http.get<any>(this.baseUrl + `/search/users?q=${username}`);
  }

}
