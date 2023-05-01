import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginComponent>) {
      
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      
      this.authService.login(username, password);
    }
  }       
  
  goToRegister() {
    this.dialogRef.afterClosed().subscribe(() => {
      this.dialog.open(RegisterComponent, {
        width: '400px',
        height: '62vh',
        maxHeight: '600px',
        hasBackdrop: true,
      });
    });

    this.dialogRef.close();
  }
}
