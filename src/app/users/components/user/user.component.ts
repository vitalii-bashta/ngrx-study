import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnChanges {
	@Input() user: User;
	@Output() edit: EventEmitter<User> = new EventEmitter<User>();
	public editing = false

	ngOnInit() {
	}

	ngOnChanges(changes: SimpleChanges) {

	}

	onEdit() {
		if(this.editing) {
			this.edit.emit(this.user);
		}
		this.editing = !this.editing
	}
}
