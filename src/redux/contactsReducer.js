import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, delContact, changeFilter } from './contactsAction';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = createReducer(
  JSON.parse(localStorage.getItem('contacts')) ?? INITIAL_STATE,
  {
    [addContact]: (state, { payload }) => [...state, payload],
    [delContact]: (state, { payload }) => {
      state.filter(({ id }) => payload.id !== id);
    },
  },
);

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
