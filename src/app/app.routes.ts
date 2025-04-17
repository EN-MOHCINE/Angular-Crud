import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'; // Import the guard

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent,canActivate: [AuthGuard]    },
  { path: 'users/new', component: UserFormComponent, canActivate: [AuthGuard]   },
  { path: 'users/edit/:id', component: UserFormComponent, canActivate: [AuthGuard]   },
  { path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];
