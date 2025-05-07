import { provideRouter, Routes } from '@angular/router';
import { UserListComponent } from './features/user-list/user-list.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];

export const appRouterProviders = [provideRouter(routes)];
