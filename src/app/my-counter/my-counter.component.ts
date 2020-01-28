import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
	selector: 'app-my-counter',
	templateUrl: './my-counter.component.html',
	styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {
	public count$: Observable<number>;

	constructor(private store: Store<{ count: number }>) { }

	ngOnInit(): void {
		this.count$ = this.store.pipe(select('count'));
	}

	onIncrement(): void {
		this.store.dispatch(increment());
	}

	onDecrement(): void {
		this.store.dispatch(decrement());
	}

	onReset(): void {
		this.store.dispatch(reset());
	}
}
