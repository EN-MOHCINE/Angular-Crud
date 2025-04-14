import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { User } from '../models/User';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-form',
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  template: `
    <h2 mat-dialog-title>Edit User</h2>
    <mat-dialog-content>
      <form>
        <mat-form-field>
          <mat-label>Name</mat-label>
          <input matInput [(ngModel)]="data.user.name">
        </mat-form-field>

        <mat-form-field>
          <mat-label>Username</mat-label>
          <input matInput [(ngModel)]="data.user.username">
        </mat-form-field>

        <mat-form-field>
          <mat-label>Email</mat-label>
          <input matInput [(ngModel)]="data.user.email">
        </mat-form-field>

        <mat-form-field>
          <mat-label>Street</mat-label>
          <input matInput [(ngModel)]="data.user.address.street">
        </mat-form-field>

        <mat-form-field>
          <mat-label>City</mat-label>
          <input matInput [(ngModel)]="data.user.address.city">
        </mat-form-field>

        <mat-form-field>
          <mat-label>Suite</mat-label>
          <input matInput [(ngModel)]="data.user.address.suite">
        </mat-form-field>

        <mat-form-field>
          <mat-label>Zipcode</mat-label>
          <input matInput [(ngModel)]="data.user.address.zipcode">
        </mat-form-field>
      </form>
    </mat-dialog-content>

    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button [mat-dialog-close]="data.user" cdkFocusInitial>Save</button>
    </mat-dialog-actions>
  `,
  standalone: true
})
export class UserFormComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { user: User }) {}
}