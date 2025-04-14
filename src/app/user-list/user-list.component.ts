import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: User[] = [];

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) {
    console.log('UserListComponent initialized');
  }

  ngOnInit() {
    console.log('UserListComponent ngOnInit');
    this.userService.getAll().subscribe((users: User[]) => {
      console.log('Users received:', users);
      this.users = users;
    });
  }

  openDialog(user: User): void {
    console.log('Opening dialog for user:', user);
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '500px',
      data: { user: user }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
      if (result) {
        console.log('User updated:', result);
      }
    });
  }

  editUser(user: User): void {
    console.log('Edit user:', user);
    this.openDialog(user);
  }
}
