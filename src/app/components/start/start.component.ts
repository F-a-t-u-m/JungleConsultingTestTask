import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  user: any;
  users: any[] = [];
  filteredUsers: any[] = [];
  usersCount: number = this.users.length;
  searchValue: string = '';

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe({
      next: (response) => {
        this.users = response;
        this.applyFilter();
      }
    })
  }

  getUser() {
    if (this.searchValue && this.searchValue !== '') {
      this.usersService.getUser(this.searchValue).subscribe({
        next: (data) => {
          this.user = data.items;
        },
        error: (error) => {
          alert('User not found');
          console.log(`error`, error);
        }
      })
    } else {
      this.getUsers();
    }
  }

  applyFilter() {
    if (!this.searchValue || this.searchValue.trim() === '') {
      this.filteredUsers = this.users;
      this.usersCount = this.users.length;
      return;
    }

    const matches: any[] = [];

    this.users.forEach((user) => {
      if (user.login.toLowerCase().includes(this.searchValue.toLowerCase())) {
        matches.push(user);
      }
    })

    this.filteredUsers = matches;
    this.usersCount = matches.length;
  }
}
