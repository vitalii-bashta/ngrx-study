import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
	{ path: '', redirectTo: '/users', pathMatch: 'full' },
	{ path: 'users', component: UsersComponent },
	{ path: 'detail/:userId', loadChildren: () => import('./users/components/user-detail/user-detail.module').then(m => m.UserDetailModule) },
	{ path: 'edit', loadChildren: () => import('./users/components/user-edit/user-edit.module').then(m => m.UserEditModule) },
	{ path: '**', redirectTo: '/users'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
