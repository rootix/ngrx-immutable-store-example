import { createReducer, on } from '@ngrx/store';

import { add } from './actions';

export const initialState: number[] = [0];

const _itemReducer = createReducer(initialState, on(add, state => [...state, state.slice(-1).pop() + 1]));

export function itemReducer(state, action) {
    return _itemReducer(state, action);
}