import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  baseUrl = "https://api.github.com/users";

  constructor(
    private http: HttpClient
  ) { }

  getRepos(login: string) {
    return this.http.get<any>(this.baseUrl + `/${login}/repos`);
  }
}
