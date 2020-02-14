import { Component, OnInit, OnDestroy, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy, AfterViewInit {
	public users: User[];
	public someUserName: string;
	private user$: Observable<User[]>;
	private subscription: Subscription;

	constructor(private http: HttpService, elementRef: ElementRef) { }

	ngOnInit() {
		this.user$ = this.http.getUsers();
		this.subscription = this.user$.subscribe((users: User[]) => {
			this.users = users;
			this.someUserName = users[0].name
		})
	}

	onEdit(event: User) {
		this.someUserName = event.name;
		this.http.updateUser(event).subscribe((val) => console.log(val))
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	ngAfterViewInit() {

	}

}
