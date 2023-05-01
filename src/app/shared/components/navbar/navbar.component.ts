import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../../../modules/auth/components/login/login.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private dialog: MatDialog, private router: Router ) { 

    }

    goHome() {
      this.router.navigate(['/home']);
    }

    openLoginDialog() {
      let dialogRef = this.dialog.open(LoginComponent, {  
        hasBackdrop: true,
        height: '400px',
        width: '400px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
}
