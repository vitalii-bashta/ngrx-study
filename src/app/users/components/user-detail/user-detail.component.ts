import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
	public selectedUser: User;
	private selectedUser$: Observable<User>;
	private id: string = this.route.snapshot.params.userId;
	private subscription: Subscription;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private http: HttpService
	) { }

	ngOnInit() {
		this.selectedUser$ = this.http.getSingleUser(this.id);
		this.subscription = this.selectedUser$.subscribe((userObject: User) => {
			this.selectedUser = userObject;
		})
	}

	onBack() {
		this.router.navigate(['/users'])
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
