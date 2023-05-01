import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegisterComponent>,
    public dialog: MatDialog) {
      this.createRegisterForm();
  }

  createRegisterForm() {
    console.log("creating register form");
    this.registerForm = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required],
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
    });
  }

  goToLogin() {
    this.dialogRef.afterClosed().subscribe(() => {
      this.dialog.open(LoginComponent,{
        hasBackdrop: true,
        height: '400px',
        width: '400px',
      });
    });

    this.dialogRef.close();
  }

  register() {

  }

}
