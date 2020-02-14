import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule } from '@angular/router';
import { UserDetailModule } from './components/user-detail/user-detail.module';
import { UserEditModule } from './components/user-edit/user-edit.module';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
	CommonModule,
	RouterModule,
	UserDetailModule,
	UserEditModule,
	FormsModule,
	MatProgressSpinnerModule
  ],
  exports: [
  ]
})
export class UsersModule { }
