import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState: number = 0;

const _countReducer: any = createReducer(
	initialState,
	on(increment, (state: any) => state + 1),
	on(decrement, (state: any) => state - 1),
	on(reset, () => 0),
);

export function countReducer(state: any, action: any): any {
	return _countReducer(state, action);
}
