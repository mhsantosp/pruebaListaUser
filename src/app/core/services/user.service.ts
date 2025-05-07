import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly users = [
    { id: 1, nombre: 'Juan Pérez', correo: 'juan@example.com' },
    { id: 2, nombre: 'Ana García', correo: 'ana@example.com' },
    { id: 3, nombre: 'Carlos Díaz', correo: 'carlos@peito.com' },
    { id: 4, nombre: 'Tatiana Montes', correo: 'tatiana@empresa.com' }
  ];

  getUsers() {
    return [...this.users];
  }
}
