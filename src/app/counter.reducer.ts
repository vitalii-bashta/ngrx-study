import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

const _countReducer = createReducer(
	initialState,
	on(increment, state => state + 1),
	on(decrement, state => state - 1),
	on(reset, () => 0),
);

export function countReducer(state, action) {
	return _countReducer(state, action);
}
