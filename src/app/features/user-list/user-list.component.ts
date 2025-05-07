import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface User {
  id: number;
  nombre: string;
  correo: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatCardModule, MatFormFieldModule,
    MatInputModule, MatListModule,
    MatIconModule, MatButtonModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  searchTerm: string = '';

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = this.userService.getUsers();
  }

  reset(): void {
    this.searchTerm = '';
    this.loadUsers();
  }

  get filteredUsers(): User[] {
    const term = this.searchTerm.toLowerCase();
    return this.users.filter(user =>
      user.nombre.toLowerCase().includes(term) ||
      user.correo.toLowerCase().includes(term)
    );
  }
}
