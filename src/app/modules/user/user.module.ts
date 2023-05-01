import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/user.component';
import { User } from 'src/app/shared/models/user.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule
  ],
})
export class UserModule { 
  user: User;
}
